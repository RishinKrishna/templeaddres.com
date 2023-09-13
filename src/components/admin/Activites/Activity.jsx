import Image from "next/image";
import React from "react";

const Activity = ({ image, title, description }) => {
  return (
    <div className="p-3 flex border-b-2 border-[#ffb889] ">
      {image && image != "" ? (
        <Image src={image} alt="activity" width={25} height={25} />
      ) : (
        <div className="w-[50px] h-[50px] bg-red-500 rounded-[50%] mr-4"></div>
      )}
      <div className="flex justify-center flex-col">
        <h4 className="text-[17px] font-poppins font-semibold">{title}</h4>
        <p className="text-[#666666] text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default Activity;
