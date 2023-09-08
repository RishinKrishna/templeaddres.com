import Styles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" className={`${Styles["logo"]}`}>
        TempleAddres
        </Link>
        <ul className="relative flex justify-center items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/list">List</Link>
          </li>
          <li>
            <Link href="/galary">Gallery</Link>
          </li>
        </ul>
        <Link href="/login" className="py-[7px] font-semibold text-[#fff] px-8 bg-[#ff6b07] rounded-[10px]">
        Login</Link>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="focus:outline-none"
          >
            <Image
              src={toggle ? menu : close}
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
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Dashboard</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">List</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
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
