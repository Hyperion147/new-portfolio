import { FaGithub, FaRegStar } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  const buttons = [
    {
      id: 1,
      logo: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/Hyperion147",
      name: "Github",
      target: "_blank"
    },
    {
      id: 2,
      logo: (
        <IoDocumentOutline className="w-5 h-5 " />
      ),
      link: "/resume",
      name: "Resume",
    },
  ];

  return (
    <div className="flex justify-center gap-10 mt-4 relative">
      {buttons.map((button) => (
        <div className="flex gap-2 items-center group" key={button.id}>
          <p className="text-slate-500">{button.name}</p>
          <Link
            to={button.link}
            target={button.target}
            rel="noopener noreferrer"
            className="relative dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-slate-800 inline-flex bg-[#fff9f0] text-black dark:text-white p-2 rounded-full shadow-lg transition-all duration-300 group-hover:rounded-full group-hover:border group-hover:border-slate-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-label={button.name}
          >
            {button.logo}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
