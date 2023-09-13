import React from "react";

const Summary = () => {
  return (
    <div className="leading-4 w-full ">
      <h5 className="mb-2 leading-3">Dashboard</h5>
      <div className="w-full grid grid-cols-12 gap-x-4">
        <div className="col-span-7 bg-white w-full rounded-[12px] p-5 ">
          <div className="border-b-2 border-gray-100 pb-3 ">
            <h4 className="font-poppins text-[#666666] text-[15px]">
              Welcome To TempleAddres
            </h4>
          </div>

          <div className="grid grid-cols-2   bg-white ">
            <div className="flex  p-4 ">
              <div className="flex bg-[#FF6B07] p-2 w-[250px]  rounded-[12px] ">
                <div className="flex justify-center items-center">
                  <div className="p-4 bg-[#FF9A56] rounded-[12px] text-white font-semibold">
                    264
                  </div>
                  <div className="p-3 text-white font-semibold">
                    Service Count
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-4 ">
              <div className="w-[250px] flex bg-[#FFB907] p-2  rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#FFD469] rounded-[12px] text-white font-semibold">
                    42
                  </div>
                  <div className="p-3 text-white font-semibold">
                    Temple Count
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-4 ">
              <div className=" w-[250px] flex bg-[#081B60] p-2  rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#33447D] rounded-[12px] text-white font-semibold">
                    945
                  </div>
                  <div className="p-3 text-white font-semibold">User Count</div>
                </div>
              </div>
            </div>
            <div className="flex p-4 ">
              <div className=" w-[250px] flex bg-[#270D0D] p-2  rounded-[12px]">
                <div className="flex justify-center items-center ">
                  <div className="p-4 bg-[#584242] rounded-[12px] text-white font-semibold">
                    01
                  </div>
                  <div className="p-3 text-white font-semibold">
                    Temple Count
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-white w-full rounded-[12px] h-[280px] overflow-hidden">
          <div className="border-b-2 border-gray-100 my-2 px-4 pt-4 pb-2">
            <h5 className="font-poppins text-[#666666] text-[15px]">
              Activities
            </h5>
          </div>

          <div className="h-full overflow-auto">
            <div className="p-3 flex border-b-2 border-[#ffb889] ">
              <div className="w-[40px] h-[40px] bg-red-500 rounded-[50%] mr-4"></div>
              <div className="flex justify-center flex-col">
                <h4 className="text-[17px] font-poppins font-semibold">
                  Sofia Paul
                </h4>
                <p className="text-[#666666] text-[13px]">
                  Registered in TempleAddress
                </p>
              </div>
            </div>

            <div className="p-3 flex border-b-2 border-[#ffb889] ">
              <div className="w-[40px] h-[40px] bg-red-500 rounded-[50%] mr-4"></div>
              <div className="flex justify-center flex-col">
                <h4 className="text-[17px] font-poppins font-semibold">
                  Sofia Paul
                </h4>
                <p className="text-[#666666] text-[13px]">
                  Registered in TempleAddress
                </p>
              </div>
            </div>

            <div className="p-3 flex border-b-2 border-[#ffb889] ">
              <div className="w-[40px] h-[40px] bg-red-500 rounded-[50%] mr-4"></div>
              <div className="flex justify-center flex-col">
                <h4 className="text-[17px] font-poppins font-semibold">
                  Sofia Paul
                </h4>
                <p className="text-[#666666] text-[13px]">
                  Registered in TempleAddress
                </p>
              </div>
            </div>
            <div className="p-3 flex border-b-2 border-[#ffb889] ">
              <div className="w-[40px] h-[40px] bg-red-500 rounded-[50%] mr-4"></div>
              <div className="flex justify-center flex-col">
                <h4 className="text-[17px] font-poppins font-semibold">
                  Sofia Paul
                </h4>
                <p className="text-[#666666] text-[13px]">
                  Registered in TempleAddress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
