import React from "react";

const Counts = () => {
  return (
    <div className="leading-4">
      <h5 className="mb-2 leading-3">Dashboard</h5>
      <div className=" bg-white w-full rounded-[12px] p-5 ">
        <h4 className="font-poppins text-[#666666] text-[15px]">Welcome To TempleAddres</h4>
        <div className="border-t-2 border-gray-100 my-2"></div>

        <div className="flex w-[60%]  bg-white ">
          <div className="flex  w-full ">
            <div className="flex  p-4 ">
              <div className="flex bg-[#FF6B07] p-2 w-[250px] rounded-[12px]">
                <div className="flex justify-center items-center">
                  <div className="p-4 bg-[#FF9A56] rounded-[12px] text-white font-semibold">264</div>
                  <div className="p-3 text-white font-semibold">Service Count</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full ">
            <div className="flex p-4 ">
              <div className="flex bg-[#FFB907] p-2 w-[250px] rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#FFD469] rounded-[12px] text-white font-semibold">42</div>
                  <div className="p-3 text-white font-semibold">Temple Count</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex w-full ">
            <div className="flex p-4 ">
            <div className="flex bg-[#081B60] p-2 w-[250px] rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#33447D] rounded-[12px] text-white font-semibold">945</div>
                  <div className="p-3 text-white font-semibold">User Count</div>
                </div>
              </div>
            </div>
            <div className="flex p-4 ">
              <div className="flex bg-[#270D0D] p-2 w-[250px] rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#584242] rounded-[12px] text-white font-semibold">01</div>
                  <div className="p-3 text-white font-semibold">Temple Count</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Counts;
