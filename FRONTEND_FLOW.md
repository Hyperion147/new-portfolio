# Frontend Flow & Algorithm

> Last updated: May 16, 2026

---

## 1. App Bootstrap

```
App starts
│
├── LanguageProvider     — loads locale from localStorage
├── AuthProvider         — runs initializeAuth (see §3)
├── SocketProvider       — connects WebSocket (only when authenticated)
├── CallsProvider        — manages active call state
└── GuestTokenInit       — fetches guest JWT if no real session exists (see §2)
```

---

## 2. Guest Token Init

Runs on every page load when the user is not authenticated and has no pending verification.

```
isLoading? ──yes──► wait
     │
     no
     │
isAuthenticated? ──yes──► skip
     │
     no
     │
hasPendingVerification? ──yes──► skip
     │
     no
     │
Already has guest token in localStorage? ──yes──► skip
     │
     no
     │
POST /api/auth/guest-token
     │
     ├── success ──► store token + guestId in localStorage (isGuest=true)
     └── fail    ──► generate local guestId as fallback (x-guest-id header)
```

Guest tokens allow unauthenticated users to initiate calls via QR scan.

---

## 3. Auth Initialization (on every page load)

Runs once on mount inside `useAuth`.

```
Check localStorage for authToken + user
     │
     ├── found ──► setAuthState { isAuthenticated: true }  ──► done
     │
     └── not found
           │
           Check localStorage for pendingAuthToken + pendingVerification
                │
                ├── not found ──► check if guest ──► setLoading(false) ──► done
                │
                └── found (pending session)
                      │
                      user.isEmailVerified === true in stored data?
                      │
                      ├── yes ──► promotePendingVerification()
                      │           setAuthState { isAuthenticated: true } ──► done
                      │
                      └── no
                            │
                            GET /api/auth/email-verification-status
                            │
                            ├── isEmailVerified: true ──► promotePendingVerification()
                            │                             setAuthState { isAuthenticated: true }
                            │
                            ├── isEmailVerified: false ──► setAuthState { pendingVerification }
                            │                              (user lands on /verify-otp)
                            │
                            └── error (token expired) ──► clearPendingVerification()
                                                          setLoading(false)
                                                          (user lands on /login)
```

---

## 4. Registration Flow

```
User fills signup form
(username, email*, password, phone?)
     │
     * email is required, phone is optional
     │
POST /api/auth/register
     │
     ├── error ──► show server error inline on relevant field
     │
     └── success
           │
           Backend auto-sends OTP to email
           Store pendingAuthToken + user in localStorage
           │
           GET /api/auth/email-verification-status
           │
           ├── isEmailVerified: true (edge case) ──► promotePendingVerification()
           │                                         navigate('/') — fully authenticated
           │
           └── isEmailVerified: false
                 │
                 navigate('/verify-otp', { context: 'signup', email })
                 │
                 OTP input shown immediately (no send button — email already sent)
                 │
                 User enters 6-digit code
                 │
                 POST /api/auth/verify-email { otp }
                 │
                 ├── error ──► show error message, allow resend after 30s
                 │
                 └── success
                       │
                       promotePendingVerification()
                       setAuthState { isAuthenticated: true }
                       navigate('/')
```

---

## 5. Login Flow

```
User fills login form
(identifier = username or email, password)
     │
POST /api/auth/login { identifier, password }
     │
     ├── 401 "Account is not active"
     │     │
     │     Backend returned token in error body?
     │     │
     │     ├── yes ──► store as pendingVerification
     │     │           POST /api/auth/resend-email-verification
     │     │           navigate('/verify-otp', { unverified: true })
     │     │
     │     └── no ──► check if pendingAuthToken exists from prior registration
     │                 │
     │                 ├── yes ──► use it to resend
     │                 │           navigate('/verify-otp', { unverified: true })
     │                 │
     │                 └── no ──► navigate('/verify-otp', { unverified: true })
     │                            (user must use resend button)
     │
     ├── other error ──► show error message
     │
     └── success { token, user, verification }
           │
           verification.required === true AND isEmailVerified === false?
           │
           ├── yes ──► store pendingVerification
           │           navigate('/verify-otp', { context: 'login' })
           │
           └── no ──► clearPendingVerification()
                       setAuthData(token, user)
                       setAuthState { isAuthenticated: true }
                       navigate('/')
```

---

## 6. Email Verification Page (/verify-otp)

```
Page loads
     │
     Read location.state:
     { context, email, identifier, unverified, userId }
     │
     context === 'signup' or 'login'?
     │
     ├── yes ──► otpSent = true (OTP already sent by backend)
     │           Show OTP input immediately
     │           Start 30s resend countdown
     │
     ├── context === 'forgot-password'
     │     │
     │     Auto-call POST /api/auth/forgot-password { identifier }
     │     Show OTP input after send
     │
     └── context === 'profile'
           │
           Auto-call POST /api/auth/resend-email-verification
           Show OTP input after send

User enters 6-digit OTP
     │
     context === 'forgot-password'?
     │
     ├── yes ──► navigate('/reset-password', { userId, otp })
     │
     └── no
           │
           POST /api/auth/verify-email { otp }
           │
           ├── error "expired" ──► "OTP expired. Request a new one."
           ├── error "invalid" ──► "Invalid OTP. Try again."
           │
           └── success
                 │
                 unverified (came from login)?
                 │
                 ├── yes ──► navigate('/login', { verified: true })
                 │           Login page shows "Email verified! You can now sign in."
                 │
                 └── no ──► promotePendingVerification()
                             setAuthState { isAuthenticated: true }
                             navigate('/')

Resend button (after 30s, max 5 attempts):
     POST /api/auth/resend-email-verification
     Reset 30s countdown

Sign out button:
     confirmLogout() ──► logout() ──► navigate('/login')
```

---

## 7. Forgot Password Flow

```
User visits /forgot-password
     │
     Enter identifier (email or username)
     │
POST /api/auth/forgot-password { identifier }
     │
     └── success { data: { userId } }
           │
           navigate('/verify-otp', {
             context: 'forgot-password',
             userId,
             identifier
           })
           │
           OTP auto-sent on page load
           User enters 6-digit code
           │
           navigate('/reset-password', { userId, otp })
           │
           User enters new password
           │
POST /api/auth/reset-password { userId, otp, newPassword }
           │
           └── success ──► navigate('/login')
```

---

## 8. Route Protection

```
ProtectedRoute (requireAuth: true)
     │
     isLoading? ──► show skeleton
     │
     isAuthenticated? ──no──► navigate('/login')
     │
     yes ──► render children

useProtectedRoute (requireAuth: false) — used on Login/Signup
     │
     isAuthenticated? ──yes──► navigate('/')
     │
     hasPendingVerification? ──yes──► navigate('/verify-otp')
     │
     no ──► render page
```

---

## 9. Axios Interceptor Logic

Every API request goes through:

```
Request interceptor
     │
     Is AUTH_ENDPOINT? (login, register, forgot-password, guest-token, reset-password)
     ├── yes ──► set isAuthenticating=true, send without token
     │
     Is PUBLIC_ENDPOINT? (qr scan, qr image, reports)
     ├── yes ──► send without token
     │
     Is VERIFICATION_ENDPOINT? (verify-email, resend, email-status, profile)
     ├── yes ──► attach pendingAuthToken or authToken, send
     │           (errors here NEVER trigger redirect)
     │
     └── all others ──► attach authToken or guestToken
                         attach x-guest-id for /api/calls/ endpoints

Response interceptor (on error)
     │
     AUTH_ENDPOINT error? ──► isAuthenticating=false, propagate
     VERIFICATION_ENDPOINT error? ──► propagate (no redirect)
     │
     401?
     ├── hasPendingVerification ──► do nothing (OTP page handles it)
     ├── real user token ──► clearAuthData(), redirect to /login
     └── guest token ──► clearGuestSession() (GuestTokenInit re-fetches)
     │
     403?
     ├── hasPendingVerification ──► do nothing
     └── real user token ──► clearAuthData(), redirect to /login
```

---

## 10. QR Code Scan Flow

```
User visits /scan or /scan/:token
     │
     Has token in URL?
     │
     ├── yes (/scan/:token) ──► ScanToken page
     │         │
     │         GET /api/qr-codes/scan (public)
     │         │
     │         ├── QR assigned to user ──► show Call / Chat buttons
     │         │     │
     │         │     User clicks Call ──► POST /api/calls/initiate { qrToken }
     │         │     User clicks Chat ──► POST /api/chat-sessions/initiate { qrToken }
     │         │
     │         └── QR unassigned ──► show "Claim this QR" button
     │               │
     │               isAuthenticated? ──no──► navigate('/login')
     │               yes ──► navigate('/claim-qr')
     │
     └── no (/scan) ──► Scan page
           │
           Camera opens, scans QR code
           │
           Decode URL from QR ──► navigate('/scan/:token')
```

---

## 11. LocalStorage Schema

| Key | Value | Purpose |
|-----|-------|---------|
| `authToken` | JWT string | Full authenticated session token |
| `user` | JSON User object | Cached user data |
| `pendingAuthToken` | JWT string | Restricted token (verification endpoints only) |
| `pendingVerification` | JSON `{ user, phone, email }` | Pending session data |
| `guestId` | UUID string | Guest identifier for anonymous calls |
| `isGuest` | `"true"` | Flag to identify guest sessions |

---

## 12. Auth State Machine

```
                    ┌─────────────────────────────────────────┐
                    │              LOADING                     │
                    │         (isLoading: true)                │
                    └──────────────┬──────────────────────────┘
                                   │ initializeAuth completes
                    ┌──────────────┼──────────────────────────┐
                    │              │                           │
                    ▼              ▼                           ▼
          ┌──────────────┐ ┌──────────────────┐    ┌──────────────────┐
          │  GUEST /     │ │    PENDING        │    │  AUTHENTICATED   │
          │  ANONYMOUS   │ │  VERIFICATION     │    │                  │
          │              │ │ hasPending: true  │    │ isAuth: true     │
          └──────┬───────┘ └────────┬─────────┘    └────────┬─────────┘
                 │                  │                        │
          scan QR│           verify │email OTP               │logout
                 │                  │                        │
                 │                  ▼                        ▼
                 │         ┌──────────────────┐    ┌──────────────────┐
                 └────────►│  AUTHENTICATED   │    │   GUEST /        │
                           │                  │    │   ANONYMOUS      │
                           └──────────────────┘    └──────────────────┘
```

---

## 13. Page Route Map

| Route | Auth Required | Description |
|-------|--------------|-------------|
| `/` | No | Home / landing page |
| `/login` | No (redirects if authed) | Login form |
| `/signup` | No (redirects if authed) | Registration form |
| `/verify-otp` | Pending session | Email OTP verification |
| `/forgot-password` | No | Request password reset |
| `/reset-password` | No | Set new password with OTP |
| `/contact` | No | Contact page |
| `/scan` | No | QR code camera scanner |
| `/scan/:token` | No | QR code action page |
| `/claim-qr` | Yes | Claim an unassigned QR code |
| `/profile` | Yes | User profile & settings |
| `/calls` | Yes | Call history |
| `/chats` | Yes | Chat sessions list |
| `/messages/:id` | Yes | Individual chat |
| `/usage` | Yes | Subscription & usage stats |
