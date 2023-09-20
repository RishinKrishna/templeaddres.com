import EditIcon from "@/components/icons/EditIcon";
import React from "react";

const TampleDescription = () => {
  return (
    <div className="py-2">
      <div className="flex justify-between ">
        <h4 className="text-[19px] font-poppins font-semibold">Description</h4>
        <EditIcon />
      </div>
      <p className="text-[13px] text-[#66666] mt-2">
        The Sree Padmanabhaswamy Temple is a renowned Hindu temple located in
        Thiruvananthapuram, the capital city of Kerala, India. It is one of the
        most significant and ancient temples in the country and is dedicated to
        Lord Padmanabhaswamy, a form of Lord Vishnu.
      </p>
    </div>
  );
};

export default TampleDescription;
