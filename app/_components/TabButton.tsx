import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonInterface {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonInterface) => {
  const buttonClasses = active ? "text-slate-500" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-slate-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
