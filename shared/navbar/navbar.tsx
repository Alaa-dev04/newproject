"use client";
import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
const links = [
  {
    id: 1,
    title: "home ",
    url: "/home",
  },
  {
    id: 2,
    title: "blog ",
    url: "/blog",
  },
  {
    id: 3,
    title: "about ",
    url: "/about",
  },
  {
    id: 4,
    title: "contact ",
    url: "/contact",
  },
  {
    id: 5,
    title: "dashboard ",
    url: "/dashboard",
  },
  {
    id: 6,
    title: "portfolio ",
    url: "/portfolio",
  },
];
const handellogout = () => {
  console.log("logged out ");
};
const Navbar = () => {
  return (
    <div className=" flex justify-between  p-4 m-4">
      <div className="">ALAADEV</div>
      <div className="flex justify-center gap-4 ">
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))} 
        <div>
        <button className="flex justify-end cursor-pointer" >
          <LogOut onClick={handellogout} />
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;
