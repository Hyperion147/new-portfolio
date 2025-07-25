import { FaGithub } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";

const FixedButtons = () => {
    return (
        <div className="fixed bottom-7 right-7 flex flex-col z-50 gap-4">
            <div className="relative group">
                <span
                    className="absolute -inset-[2px] rounded-full animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e5e1f6_0%,#e5e0d9_50%,#e5e0d9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                />
                <a
                    href="https://drive.google.com/file/d/1yrDS9gXg3YcA7Q4ilTdWLcFAHvFxxS6D/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-slate-800 inline-flex bg-[#fff9f0] text-black dark:text-white p-4 rounded-full shadow-lg transition-all duration-300"
                    aria-label="GitHub"
                >
                    <MdDocumentScanner className="w-4 h-4 md:w-5 md:h-5 " />
                </a>
            </div>
            <div className="relative group">
                <span
                    className="absolute -inset-[2px] rounded-full animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e5e1f6_0%,#e5e0d9_50%,#e5e0d9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                />
                <a
                    href="https://github.com/Hyperion147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-slate-800 inline-flex bg-[#fff9f0] text-black dark:text-white p-4 rounded-full shadow-lg transition-all duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5 " />
                </a>
            </div>
        </div>
    );
};

export default FixedButtons;
