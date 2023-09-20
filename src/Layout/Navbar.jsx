import Styles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ containerClassName }) => {
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
        className={`${Styles["navbar"]} ${containerClassName} fixed w-full top-0 left-0 z-10`}
      >
        <div className=" hidden  md:flex justify-between  items-center  py-[25px] px-[50px]">
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
          <Link
            href="/login"
            className="py-[7px] font-semibold text-[#fff] px-8 bg-[#ff6b07] rounded-[10px]"
          >
            Login
          </Link>
        </div>

        <div
          className={`md:hidden  flex flex-1 justify-end items-center px-2 py-2`}
        >
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="focus:outline-none"
          >
            <Image
              src={toggle ? close : menu}
              alt="menu"
              width={28}
              height={28}
              className="object-contain m-2"
            />
          </button>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[#fefefe] absolute top-20 right-0 min-w-[140px] z-10 rounded-xl sidebar`}
          >
            <ul className="relative flex flex-col justify-center items-start">
              <Link
                href="/"
                className={`${Styles[""]} text-[#ff6b07] text-[25px] font-semibold mb-2`}
              >
                TempleAddres
              </Link>
              <li className="mt-2">
                <Link className="text-black mt-5" href="/">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-black" href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-black" href="/about">
                  About
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-black" href="/list">
                  List
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-black" href="/galary">
                  Gallery
                </Link>
              </li>
              <div className="mt-5 ">
                <Link
                  href="/login"
                  className=" py-[7px] font-semibold text-[#fff] px-8 bg-[#ff6b07] rounded-[10px]"
                >
                  Login
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
