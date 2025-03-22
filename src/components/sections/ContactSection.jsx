import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from '../Utils';

const ContactSection = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_y3ckbbj',
            'template_kgb5fws',
            {
                from_name: form.name,
                to_name: "Suryansu",
                from_email: form.email,
                to_email: "suryansu87@gmail.com",
                message: form.message
            },
            'ocaE5N3GFCetKK-nI'
        )
            .then(() => {
                setLoading(false);
                alert("Thank you, I will respond as soon as possible!");
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert("Something went wrong!!!");
            });
    };

    return (
        <div id="contact" className="relative xl:mt-8 xl:flex-row mx-4 sm:mx-8 md:mx-20 lg:mx-32 flex flex-col gap-5 justify-center overflow-hidden mb-15">
       
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-[length:20px_20px]",
                    "bg-[image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col gap-4 w-full max-w-2xl z-10"
            >
                <h3 className="bg-gradient-to-r from-indigo-200 to-gray-900 leading-right rounded-2xl bg-clip-text text-transparent text-3xl sm:text-4xl font-medium">
                    Contact.
                </h3>

                <label className="flex flex-col">
                    <span className="font-medium mb-2">Your Name</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        className="py-3 px-4 w-full placeholder:text-slate-500 rounded-lg outline-none border font-medium"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-2">Your Email</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className="py-3 px-4 w-full placeholder:text-slate-500 rounded-lg outline-none border font-medium"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium mb-2">Your Message</span>
                    <textarea
                        rows="6"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className="py-4 px-6 w-full placeholder:text-slate-500 rounded-lg outline-none border font-medium resize-y"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-slate-300 py-3 px-8 outline-none w-fit font-bold hover:bg-slate-500 hover:text-white shadow-md shadow-primary rounded-3xl transition-all duration-300"
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default ContactSection;