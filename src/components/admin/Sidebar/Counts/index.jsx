import React from "react";

const Counts = () => {
  return (
    <div className="">
      <h5>Counts</h5>
      <div className=" bg-white w-[60%] rounded-[10px] p-5 ">
        <h4>Welcome To TempleAddres</h4>
        <div className="border-t-2 border-gray-200 my-2"></div>

        <div className="flex w-[60%]  bg-white ">
          <div className="flex w-full ">
            <div className="flex p-4 ">
              <div className="flex bg-orange-500 p-2 w-full ">
                <div className="flex justify-center items-center ">
                  <div className="p-2 bg-slate-300">264</div>
                  <div className="p-3">Temple Count</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
