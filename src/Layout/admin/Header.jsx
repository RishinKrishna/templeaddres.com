import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const profileMenus = ["My Profile", "Update Password", "Sign Out"];
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }


    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex justify-end items-center w-full h-[65px] bg-white left-0 relative">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faAdd} className="text-[24px] text-[#ff6b07] mr-4" />
        <div className="">
          
        </div>
        <div className="w-[30px] h-[30px] bg-gray-300 border-2 border-red-400 rounded-full mr-4" />
        <h4
          className="text-[15px] font-semibold mr-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Administrator
        </h4>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className="bg-white py-2 shadow-xl absolute right-4 top-[60px] rounded-lg z-20"
        >
          <div className=" flex border-b-2 border-[#ffb889] px-3 pb-2">
            <div className="w-[30px] h-[30px] bg-gray-300 border-2 border-red-400 rounded-full mr-2"></div>
            <div className="flex justify-center flex-col">
              <h4 className="text-[14px] font-poppins font-semibold">Sajith.k.s</h4>
              <p className="text-[#666666] text-[12px]">sajithpjoffialme@gmail.com</p>
            </div>
          </div>
          <ul className="px-3 pt-2 text-[14px] text-[#666666] font-poppins">
            {profileMenus.map((menu) => (
              <li
                onClick={() => setOpen(false)}
                className="py-1 pl-2 hover:bg-[#ff6b07] rounded-md hover:text-white cursor-pointer"
                key={menu}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="absolute top-16 right-[175px] bg-white rounded-lg shadow-lg">
      <ul className="px-3 pt-2 text-[14px] text-[#666666] font-poppins">
            {profileMenus.map((menu) => (
              <li
                onClick={() => setOpen(false)}
                className="py-1 pl-2 hover:bg-[#ff6b07] rounded-md hover:text-white cursor-pointer"
                key={menu}
              >
                {menu}
              </li>
            ))}
          </ul>
      </div> */}
    </div>
  );
};

export default Header;
