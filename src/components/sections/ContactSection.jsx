import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BackgroundLines } from "../ui/background-lines";
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactSection = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            alert("Please fill in all fields");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            alert("Please enter a valid email address");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name.trim(),
                    to_name: "Suryansu",
                    from_email: form.email.trim(),
                    to_email: "suryansu87@gmail.com",
                    message: form.message.trim(),
                }
            );

            setLoading(false);
            alert("Thank you! I'll respond as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setLoading(false);
            console.error("Email sending error:", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
        console.log({
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        });
    };

    return (
        <section
            id="contact"
            className="relative pt-10 pb-20 md:pb-0 px-2 sm:px-4 md:px-8 lg:px-16 max-w-full md:max-w-3xl mx-auto"
        >
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-2 sm:px-4 -z-10">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-4 sm:gap-6 w-full max-w-lg mx-auto z-20"
                >
                    <h2
                        id="heading"
                        className="bg-gradient-to-r from-indigo-200 to-gray-900 bg-clip-text text-transparent text-3xl sm:text-4xl font-medium text-center dark:to-slate-500"
                    >
                        Contact Me
                    </h2>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="font-medium text-gray-700 dark:text-gray-300"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="py-2 sm:py-3 px-3 sm:px-4 w-full placeholder:text-gray-400 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:text-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-medium text-gray-700 dark:text-gray-300"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="py-2 sm:py-3 px-3 sm:px-4 w-full placeholder:text-gray-400 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:text-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1 ">
                        <label
                            htmlFor="message"
                            className="font-medium text-gray-700 dark:text-gray-300"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="py-2 sm:py-3 px-3 sm:px-4 w-full placeholder:text-gray-400 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none dark:text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 bg-indigo-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </BackgroundLines>
        </section>
    );
};

export default ContactSection;
