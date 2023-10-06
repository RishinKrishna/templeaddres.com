import { sideLinks } from "@/constants";
import Link from "next/link";
import Styles from "@/Layout/layout.module.scss";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="hidden relative md:flex  bg-white text-[grey] h-screen p-6">
        <ul className="flex flex-col  text-[14px]">
          <h2 className="text-[25px] font-semibold mb-10 text-[#ff6b07]">
            TempleAddres
          </h2>
          {sideLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.id} className={Styles["sidelink"]}>
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex flex-1 right-0 z-10">
        <button onClick={() => setToggle((prev) => !prev)} className="">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="object-contain mr-8 relative  top-[-390px] right-0 z-50 "
          />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#fefefe] absolute top-14 left-0 min-w-[140px] h-full z-10 sidebar`}
        >
          <ul className="relative flex flex-col  text-[14px]">
            <h2 className="text-[25px] font-semibold mb-10 text-[#ff6b07]">
              TempleAddres
            </h2>
            {sideLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.id} className={Styles["sidelink"]}>
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
