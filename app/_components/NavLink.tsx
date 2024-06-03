import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-slate-500 sm:text-xl rounded md:p-0 hover:text-slate-200"
    >
      {label}
    </Link>
  );
}

export default NavLink;
