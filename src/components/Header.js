import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
        <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
        <a href="/" className="logo text-2xl font-bold text-accent">
            Darshan
        </a>

        <nav className="hidden md:block">
            <ul className="flex">
            <li>
                <a href="/#about">About</a>
            </li>
            <li>
                <a href="/#projects">Projects</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
            <li>
                <a href="https://docs.google.com/document/d/1iHEJWNQeQ3hqZlMrZwiswQyhcJANalRd/edit?usp=sharing&ouid=100130136704610493440&rtpof=true&sd=true"
                target="_blank"
                without
                rel="noreferrer">
                Resume
                </a>
            </li>
            </ul>
        </nav>

        <nav
            className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
        >
            <ul className="flex flex-col">
            <li>
                <a href="/#about">About</a>
            </li>
            <li>
                <a href="/#projects">Projects</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
            <li>
                <a href="/#resume">Resume</a>
            </li>
            </ul>
        </nav>

        <button onClick={handleToggle} className="block md:hidden">
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
        </header> 
    </div>
  );
};
