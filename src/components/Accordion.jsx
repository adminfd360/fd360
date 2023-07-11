import { VscNotebook } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import "./pages/styles.css";

const Accordion = ({ item, index, toggleAccordion, activeIndex }) => {
  return (
    <li className="">
      <div
        className="flex items-center gap-3 bg-[#f7f7f7] p-3 sm:p-4 rounded-md relative cursor-pointer max-sm:pr-10"
        onClick={toggleAccordion}
      >
        <VscNotebook size="25" />
        <span className={`${index === activeIndex ? "font-bold" : ""}`}>
          {item.title}
        </span>
        {index === activeIndex ? (
          <AiOutlineMinus
            size="16"
            className="text-slate-600 absolute right-3 md:right-5"
          />
        ) : (
          <AiOutlinePlus
            size="16"
            className="text-slate-600 absolute right-3 md:right-5"
          />
        )}
      </div>
      <div
        className={`${
          index === activeIndex
            ? "scale-in-ver-top h-auto p-4 md:p-8 my-2 border"
            : "hidden h-0  p-0 my-0 borde-0"
        } w-full rounded-md bg-white transition-all`}
      >
        {item.content}
      </div>
    </li>
  );
};

export default Accordion;
