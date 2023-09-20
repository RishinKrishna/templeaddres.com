import EditIcon from "@/components/icons/EditIcon";
import GlobIcon from "@/components/icons/GlobIcon";
import MailIcon from "@/components/icons/MailIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import TelephoneIcon from "@/components/icons/TelephoneIcon";
import React from "react";

const TempleContactDetails = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-[19px] font-poppins font-semibold pb-3">
          Contact Details
        </h4>
        <EditIcon />
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grig-cols-1 lg:pe-20 ">
        <a className="flex gap-4 mb-3">
          <div>
            <MobileIcon />
          </div>
          <span className="text-[16px]">9048262454 </span>
        </a>
        <a className="flex gap-4 mb-3">
          <div className="">
            <MailIcon />
          </div>
          <span className="text-[16px]">sreepathma@gmail.com</span>
        </a>
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grig-cols-1  lg:pe-20">
        <a className="flex gap-4 mb-3">
          <div>
            <TelephoneIcon />
          </div>
          <span className="text-[16px]">0001-43548</span>
        </a>
        <a className="flex gap-4 mb-3">
          <div>
            <GlobIcon />
          </div>
          <span className="text-[16px]">URL:https://templeaddress.com</span>
        </a>
      </div>
    </div>
  );
};

export default TempleContactDetails;
