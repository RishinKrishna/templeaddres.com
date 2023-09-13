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
    <div className="">
      <h4 className="text-[17px] font-poppins font-semibold">Deity</h4>
      <div className="flex flex-wrap py-2">
        {deitys.map((deity) => (
          <button
            key={deity.id}
            className="bg-[#E4E4E4] text-black px-3 py-[7px] rounded-md mr-3 mb-2 text-[11px]"
          >
            {deity.deity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TempleDeity;
