import React from "react";

interface MenuOverLayProps {
  links: { href: string; label: string; onClick: () => void }[];
}

const MenuOverLay: React.FC<MenuOverLayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, i) => (
        <li key={i}>
          <button
            onClick={link.onClick}
            className="text-black hover:text-slate-600"
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverLay;
