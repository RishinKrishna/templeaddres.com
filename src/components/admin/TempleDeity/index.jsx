import EditIcon from "@/components/icons/EditIcon";
import React from "react";

const deitys = [
  {
    id: 1,
    deity: "Lord Vishnu",
  },
  {
    id: 2,
    deity: "Lord Ganapathy",
  },
  {
    id: 3,
    deity: "Lord Ayyapan",
  },
  {
    id: 5,
    deity: "Lord Shiva",
  },
  {
    id: 6,
    deity: "Goddess Kali",
  },
  {
    id: 7,
    deity: "Lord Vishnu",
  },
];

const TempleDeity = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-[19px] font-poppins font-semibold">Deity</h4>
        <EditIcon />
      </div>
      <div className="flex flex-wrap pt-2">
        {deitys.map((deity) => (
          <button
            key={deity.id}
            className="bg-[#E4E4E4] text-black px-4 py-[7px] rounded-md mr-6 mb-4 text-[13px]"
          >
            {deity.deity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TempleDeity;
