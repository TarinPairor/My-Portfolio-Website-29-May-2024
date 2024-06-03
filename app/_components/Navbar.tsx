"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";

const links = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Adjust the scroll position by a few pixels after scrollIntoView
      const adjustScroll = () => {
        const offset = -100; // Adjust this value to move up or down the final scroll position
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: "smooth",
        });

        // Update the URL without refreshing the page
        history.pushState(null, "", `#${id}`);

        // Clean up the event listener
        window.removeEventListener("scroll", adjustScroll);
      };

      // Add a scroll event listener to adjust the position after the initial smooth scroll
      window.addEventListener("scroll", adjustScroll);
    }
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-100 bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto pr-10">
        <div
          className="text-3xl font-semibold p-10 cursor-pointer"
          onClick={() => handleScroll("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 text-slate-600 hover:text-slate-400 hover:border-slate-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 text-slate-600 hover:text-slate-400 hover:border-slate-300"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto items-center justify-end"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {links.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleScroll(link.href)}
                  className="text-slate-600 hover:text-slate-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverLay
          links={links.map((link) => ({
            ...link,
            onClick: () => handleScroll(link.href),
          }))}
        />
      )}
    </nav>
  );
};

export default Navbar;
