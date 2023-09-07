import Styles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";
import { menu, close } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${Styles["navbar"]}`);
      if (navbar) {
        navbar.classList.toggle(Styles["sticky"], window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${Styles["navbar"]} fixed w-full top-0 left-0 flex justify-between items-center z-[10000000] py-[25px] px-[50px]`}
      >
        <a href="/" className={`${Styles["logo"]}`}>
          Logo
        </a>
        <ul className="relative flex justify-center items-center">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/list">List</a>
          </li>
          <li>
            <a href="galary">Gallery</a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="focus:outline-none"
          >
            <Image
              src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu"
              width={28}
              height={28}
              className="object-contain"
            />
          </button>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[#fefefe] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="relative flex justify-center items-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className={`${Styles["banner"]}`}></section>
    </>
  );
};

export default Navbar;
