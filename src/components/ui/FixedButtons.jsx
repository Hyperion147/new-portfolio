import { FaRegStar } from "react-icons/fa";

const FixedButtons = () => {
  const buttons = [
    {
      id: 1,
      logo: <FaRegStar className="w-4 h-4 md:w-5 md:h-5" />,
      link: "https://github.com/Hyperion147/new-portfolio",
      name: "Drop a Star",
    },
  ];

  return (
    <div className="fixed bottom-5 md:top-8 right-5 flex flex-col z-50 gap-4">
      {buttons.map((button) => (
        <div className="flex justify-end gap-2 items-center" key={button.id}>
          <p className="text-slate-500 hidden md:block">{button.name}</p>
          <div className="relative group flex">
            <span
              className="absolute -inset-[1px] rounded-full animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e5e1f6_0%,#e5e0d9_50%,#e5e0d9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />

            <a
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-slate-800 inline-flex bg-[#fff9f0] text-black dark:text-white p-2 rounded-full shadow-lg transition-all duration-300"
              aria-label="GitHub"
            >
              {button.logo}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixedButtons;
