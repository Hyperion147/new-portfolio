import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { createParticleCanvas } from "package-particlefx";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ToggleDark from "../components/utils/ToggleDark";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactLayout = () => {
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
        },
      );

      setLoading(false);
      toast.success("Thank you! I'll respond asap.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      toast.error("Error, Please contact through Resume.");
    }
  };

  const containerRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const [config, setConfig] = useState({
    imageSrc: "/footer.png",
    particleGap: 4,
    noise: 1,
  });

  useEffect(() => {
    if (containerRef.current) {
      particleCanvasRef.current = createParticleCanvas(
        containerRef.current,
        config,
      );
    }

    return () => {
      particleCanvasRef.current?.destroy();
    };
  }, [config]);

  return (
    <motion.section
      aria-label="Contact Section"
      className="bg-[#fff9f0] dark:bg-slate-800 min-h-screen overflow-x-hidden"
      initial={{ opacity: 0, y: -100, filter: "blur(14px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-6 sm:px-12 lg:mx-80 pt-6 lg:pt-8 head gap-4">
        {/* Back button */}
        <Link className="z-50" to="/">
          <p className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-400 dark:to-slate-500 leading-right bg-clip-text text-transparent text-sm sm:text-lg lg:text-xl font-medium pixeltext flex items-center gap-2">
            <MdKeyboardDoubleArrowLeft className="dark:text-indigo-200 text-slate-500" />
            go back
          </p>
        </Link>

        {/* Title center on mobile, right on desktop */}
        <h2 className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent sm:text-lg lg:text-xl font-medium pixeltext text-center sm:text-left">
          /pages/contact.jsx
        </h2>

        <ToggleDark />
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-gray-500 dark:via-indigo-200 to-transparent mt-4 h-[1px] mx-6 sm:mx-12 lg:mx-80" />
      
      <div className="flex flex-col md:flex-row justify-between items-center md:px-80 md:mt-0 mt-10">
        <div className="w-1/2 flex">
          <div
            ref={containerRef}
            style={{ width: "1080px", height: "250px" }}
          />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-0 md:mt-4 flex flex-col sm:gap-4 md:w-1/2 px-10 w-full max-w-lg md:mx-auto z-20 gap-2"
        >
          <div className="flex flex-col gap-1 pt-0 md:pt-10">
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
            className="mt-2 bg-indigo-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
      </div>
    </motion.section>
  );
};

export default ContactLayout;
