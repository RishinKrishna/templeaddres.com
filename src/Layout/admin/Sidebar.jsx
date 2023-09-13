import { sideLinks } from "@/constants";
import Link from "next/link";
import Styles from '@/Layout/layout.module.scss'
const Sidebar = () => {
  return (
    <div className="bg-white text-[grey] h-screen p-4">
      <h2 className="text-[25px] font-semibold mb-10 text-[#ff6b07]">
        TempleAddres
      </h2>
      <ul className="flex flex-col justify-center text-[14px]">
        {sideLinks.map((link) => (
          <li
            key={link.id}
            className={Styles["sidelink"]}
          >
            {link.icon}
            <Link href={link.id}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
