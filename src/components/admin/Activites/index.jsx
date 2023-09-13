import React from "react";
import Activity from "./Activity";

const Activites = () => {
  let activities = [
    {
      title: "Sofia paul",
      description: "Sofia paul",
    },
    {
      title: "Sofia paul",
      description: "Sofia paul",
    },
    {
      title: "Sofia paul",
      description: "Sofia paul",
    },
    {
      title: "Sofia paul",
      description: "Sofia paul",
    },
    {
      title: "Sofia paul",
      description: "Sofia paul",
    },
  ];
  return (
    <>
      <div className="border-b-2 border-gray-100 my-2 px-4 pt-4 pb-2">
        <h5 className="font-poppins text-[#666666] text-[15px]">Activities</h5>
      </div>

      <div className="h-full overflow-auto">
        {activities.map((activity, index) => (
          <Activity {...activity} key={`activity${index}`} />
        ))}
      </div>
    </>
  );
};

export default Activites;
