import { sideLinks } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white text-[grey] h-screen p-6">
      <h2 className="text-[25px] font-semibold mb-10 text-[#ff6b07]">
        TempleAddres
      </h2>
      <ul className="flex flex-col justify-center text-[14px]">
        {sideLinks.map((link) => (
          <li key={link.id} className="flex hover:bg-[#ff6b07] mb-4 py-2 px-4 rounded-[6px] gap-3 hover:text-white ">
            {link.icon}
            <Link href={link.id}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
