import type { Metadata } from "next";
import Navbar from "@/components/utils/Navbar";
import MobilePageHeading from "@/components/utils/MobilePageHeading";
import { quotes } from "@/constants/quotes";

export const metadata: Metadata = {
    title: "The Wall",
    description:
        "A growing wall of quotes about life, curiosity, education, and lifelong learning.",
    alternates: {
        canonical: "https://suryansu.in/wall",
    },
};

const quoteLayout = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-8",
    "md:col-span-5",
    "md:col-span-7",
    "md:col-span-8",
    "md:col-span-4",
    "md:col-span-6",
    "md:col-span-6",
];

const featuredQuotes = new Set([1, 5]);

export default function WallPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="w-full px-4 pb-28 pt-4 md:px-8 md:pt-28 lg:px-12">
                <MobilePageHeading eyebrow="words to keep" title="The Wall" />

                <section
                    aria-label="Quotes about life and learning"
                    className="grid grid-cols-1 gap-3 md:grid-cols-12"
                >
                    {quotes.map((item, index) => (
                        <article
                            key={`${item.author}-${item.topic}`}
                            className={`${quoteLayout[index % quoteLayout.length]} group relative flex flex-col justify-between overflow-hidden border border-slate-300 p-6 transition-colors duration-300 dark:border-slate-700 md:p-8 ${
                                featuredQuotes.has(index)
                                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                                    : "bg-background text-slate-950 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-900"
                            }`}
                        >
                            <div className="mb-12 flex items-start justify-between gap-4">
                                <span
                                    className={`pixeltext text-xs uppercase tracking-[0.22em] ${
                                        featuredQuotes.has(index)
                                            ? "text-slate-400 dark:text-slate-500"
                                            : "text-slate-500 dark:text-slate-400"
                                    }`}
                                >
                                    {item.topic}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={`font-mono text-xs ${
                                        featuredQuotes.has(index)
                                            ? "text-slate-500 dark:text-slate-400"
                                            : "text-slate-400 dark:text-slate-600"
                                    }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <blockquote>
                                <p className="text-2xl font-medium leading-[1.15] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                                    “{item.quote}”
                                </p>
                                <footer className="mt-8 border-t border-current/20 pt-4">
                                    <cite className="not-italic">
                                        <span className="block text-sm font-semibold">
                                            {item.author}
                                        </span>
                                        <span className="mt-1 block text-xs opacity-60">
                                            {item.source}
                                        </span>
                                    </cite>
                                </footer>
                            </blockquote>

                            <span className="absolute bottom-0 right-0 h-3 w-3 border-l border-t border-current opacity-30 transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
