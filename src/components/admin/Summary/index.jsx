import React from "react";
import Activites from "../Activites";

const Summary = () => {
  return (
    <div className="leading-4 w-full ">
      <h5 className="mb-2 leading-3">Dashboard</h5>
      <div className="w-full h-[250px] grid grid-cols-12 gap-x-4">
        <div className="col-span-7 bg-white w-full rounded-[12px] p-5 ">
          <div className="border-b-2 border-gray-100 pb-3 ">
            <h4 className="font-poppins text-[#666666] text-[15px]">
              Welcome To TempleAddres
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-5 bg-white ">
            <div className="flex bg-[#FF6B07] p-2 rounded-[18px] ">
              <div className="flex justify-center items-center">
                <div className="p-6 bg-[#FF9A56] rounded-[12px] ">
                  <h1 className="text-white font-extrabold text-2xl"> 264 </h1>
                </div>
                <div className="p-3 text-white font-semibold text-xl">
                  Service Count
                </div>
              </div>
            </div>

            <div className="flex bg-[#FF6B07] p-2 rounded-[18px] ">
              <div className="flex justify-center items-center">
                <div className="p-6 bg-[#FF9A56] rounded-[12px] ">
                  <h1 className="text-white font-extrabold text-2xl"> 264 </h1>
                </div>
                <div className="p-3 text-white font-semibold text-xl">
                  Service Count
                </div>
              </div>
            </div>

            <div className="flex bg-[#FF6B07] p-2 rounded-[18px] ">
              <div className="flex justify-center items-center">
                <div className="p-6 bg-[#FF9A56] rounded-[12px] ">
                  <h1 className="text-white font-extrabold text-2xl"> 264 </h1>
                </div>
                <div className="p-3 text-white font-semibold text-xl">
                  Service Count
                </div>
              </div>
            </div>

            <div className="flex bg-[#FF6B07] p-2 rounded-[18px] ">
              <div className="flex justify-center items-center">
                <div className="p-6 bg-[#FF9A56] rounded-[12px] ">
                  <h1 className="text-white font-extrabold text-2xl"> 264 </h1>
                </div>
                <div className="p-3 text-white font-semibold text-xl">
                  Service Count
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-white w-full rounded-[12px] h-full overflow-hidden">
          <Activites />
        </div>
      </div>
    </div>
  );
};

export default Summary;
