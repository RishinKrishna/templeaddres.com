import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center flex-col">
      {/* <NoDataIcon width="100" fill="#666666" className="opacity-50" /> */}
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
