import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faGopuram,
  faGears,
  faMessage,
  faTrophy,
  faUser,
  faGear,
  faCircleInfo,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { dashboard } from "@/assets/admin/sidebar";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white text-[grey] h-screen p-6">
      <h2 className="text-[25px] font-semibold mb-10 text-[#ff6b07]">
        TempleAddres
      </h2>
      <ul className="flex flex-col justify-center space-y-2">
        <li className="flex py-2 px-4 rounded-[10px] ">
          <Image
          src={dashboard}
          width={1000} 
          height={1000}
          className="w-[20px] text-[red] text-[rad]"/>


          {/* <FontAwesomeIcon
            icon={faTableCellsLarge}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          /> */}
          <Link href="/admin" className="hover:text-black font-semibold ">
            Dashboard
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faGopuram}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="/admin/temples" className="hover:text-black font-semibold ">
            Temples
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faGears}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Services
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px]">
          <FontAwesomeIcon
            icon={faUser}
            className="social_icons mr-4 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            User
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faMessage}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Message
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faTrophy}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Rewards
          </Link>
        </li>
        <div className="border-t-2 border-gray-200 my-5"></div>

        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faGear}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Settings
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px] "
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Help
          </Link>
        </li>
        <li className="py-2 px-4 rounded-[10px] ">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="social_icons mr-3 hover:text-[#ff6b07] text-[20px]"
          />
          <Link href="#" className="hover:text-black font-semibold ">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
