import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[var(--bg-primary)]" : "bg-transparent"
      } relative`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={`w-9 h-9 object-contain ${
              !scrolled ? "filter brightness-0 invert" : ""
            }`}
          />
          <p
            className={`${
              scrolled ? "text-[var(--text-primary)]" : "text-white"
            } text-[18px] font-bold cursor-pointer flex`}
          >
            Karengula Dinakar &nbsp;
            <span className="sm:block hidden"></span>
          </p>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  scrolled
                    ? active === nav.title
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)]"
                    : "text-white"
                } hover:${
                  scrolled ? "text-[var(--text-highlight)]" : "text-gray-300"
                } text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.type === "external" ? (
                  <a href={nav.url} target="_blank" rel="noopener noreferrer">
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle scrolled={scrolled} />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain ${
              !scrolled ? "filter invert" : ""
            }`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 ${
              scrolled ? "bg-[var(--bg-card)]" : "black-gradient"
            } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    scrolled
                      ? active === nav.title
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)]"
                      : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.type === "external" ? (
                    <a href={nav.url} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
