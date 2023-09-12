import React from "react";

const Activites = () => {
  return (
    <div className="p-5 w-full">
      <div className="bg-white w-full rounded-[12px] p-6">
        <h5 className="font-poppins text-[#666666] text-[15px]">Activities</h5>
        <div className="border-t-2 border-gray-100 my-2" />

        <div className="flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[17px] font-poppins">Sofia Paul</h4>
          </div>
          <div className="font-poppins text-[#666666] text-[13px]">
            <p>Registered in TempleAddress</p>
          </div>
        </div>

        <div className="border-t-2 border-[#ffb889] my-2" />

        <div className="flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[17px] font-poppins">Rameswaram  Temple</h4>
          </div>
          <div className="font-poppins text-[#666666] text-[13px]">
            <p>Added  in TempleAddres</p>
          </div>
        </div>

        <div className="border-t-2 border-[#ffb889] my-2" />

        <div className="flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[17px] font-poppins">John Wick</h4>
          </div>
          <div className="font-poppins text-[#666666] text-[13px]">
            <p>Registerd in TempleAddres</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activites;
