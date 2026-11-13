export interface PersonalBestEntry {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  numbers: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
}

export interface MonkeyProfile {
  name: string;
  xp: number;
  isPremium: boolean;
  streak: number;
  maxStreak: number;
  typingStats: {
    completedTests: number;
    startedTests: number;
    timeTyping: number;
  };
  personalBests: {
    time: { [mode2: string]: PersonalBestEntry[] };
    words: { [mode2: string]: PersonalBestEntry[] };
  };
  allTimeLbs: {
    time: {
      [lang: string]: {
        [mode2: string]: { rank: number; count: number };
      };
    };
  };
  details?: {
    bio?: string;
    keyboard?: string;
  };
}

export async function getMonkeyProfile(): Promise<MonkeyProfile | null> {
  const api = process.env.MONKEY_API ?? process.env.NEXT_PUBLIC_MONKEY_API;
  const user = process.env.MONKEY_USER ?? process.env.NEXT_PUBLIC_MONKEY_USER;
  const key = process.env.MONKEY_KEY ?? process.env.NEXT_PUBLIC_MONKEY_KEY;

  if (!api || !user || !key) {
    return null;
  }

  try {
    const res = await fetch(
      `${api.replace(/\/$/, "")}/users/${user}/profile`,
      {
        headers: {
          Authorization: `ApeKey ${key}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}
