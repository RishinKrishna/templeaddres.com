import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { CustomDropdown } from "@/components/CustomDropdown";
import UserIcon from "@/components/icons/UserIcon";
import EditIcon from "@/components/icons/EditIcon";
import ExportIcon from "@/components/icons/ExportIcon";
import TemplesIcon from "@/components/icons/TemplesIcon";
import ServiesIcon from "@/components/icons/ServiesIcon";
import router from "next/router";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";
import Image from "next/image";
import { post } from "@/config/axiosConfig";
const Header = ({ sidebarIsopen, setSidebarIsOpen }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
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

  const handleSignOut = () => {
    setShowConfirmationModal(true);
  };
  

  const confirmSignOut = () => {
    post({
      api: `/auth/logout`,
    }).then((response) => {
      localStorage.clear();
      router.push("/login");
    });
  };
  return (
    <div className="flex justify-end items-center w-full h-[65px] bg-white left-0 relative px-12">
      <div className="flex justify-center items-center">
        <CustomDropdown
          button={{
            render: () => (
              <FontAwesomeIcon
                icon={faAdd}
                className="text-[24px] text-[#ff6b07] mr-4"
              />
            ),
          }}
          optionsContainerClassName="bg-white w-[230px] top-[55px] right-0  py-2 shadow-lg"
          optionsList={[
            {
              icon: <TemplesIcon height={20} className="mr-4" />,
              name: "Temple",
              className:
                "py-3 flex font-poppins items-center w-full text-sm text-[#A9A9A9] border-b-2 border-gray-100 ",
              onClick: () => handleRoutes("/admin/temples/addtemple"),
            },
            {
              icon: <ServiesIcon height={20} className="mr-4" />,
              name: "Service",
              className:
                "py-3 flex font-poppins items-center w-full text-sm text-[#A9A9A9] ",
              onClick: () => handleRoutes("/admin/services/addservice"),
            },
          ]}
        />
        <CustomDropdown
          button={{
            render: () => (
              <div className="flex  items-center">
                <div className="w-[30px] h-[30px] bg-gray-300 border-2 border-red-400 rounded-full mr-4" />
                Admin
              </div>
            ),
          }}
          optionsContainerClassName="bg-white w-[230px] top-[55px] right-0  py-2 shadow-lg"
          optionsList={[
            {
              render: () => (
                <div className=" border-b-2 border-gray-100  py-3">
                  <div className="flex justify-start px-3 ">
                    <div className="w-[30px] h-[30px] bg-gray-300 border-2 border-red-400 rounded-full mr-4" />
                    <div>
                      <h5 className=" leading-none font-poppins">Sajith</h5>
                      <p className="text-xs font-poppins text-secondary-gray">
                        sajithpj@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              icon: <UserIcon height={20} className="mr-4"fill="#A9A9A9" />,
              name: "My Profile",
              className:
                "py-3 flex font-poppins items-center w-full text-sm text-[#A9A9A9] border-b-2 border-gray-100 ",
            },
            {
              icon: <EditIcon height={20} className="mr-4" />,
              name: "Update Password",
              className:
                "py-3 flex font-poppins items-center w-full text-sm text-[#A9A9A9] border-b-2 border-gray-100",
            },
            {
              icon: <ExportIcon height={20} className="mr-4" />,
              name: "Sign Out",
              className:
                "py-3 flex font-poppins items-center w-full text-sm text-[#A9A9A9]  ",
              onClick: handleSignOut,
            },
          ]}
           
           />
           
         {showConfirmationModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
              <p className="text-lg mb-4">Are you sure you want to sign out?</p>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 mr-4 border border-gray-300 rounded-md"
                  onClick={() => setShowConfirmationModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => {
                    confirmSignOut();
                    setShowConfirmationModal(false);
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
