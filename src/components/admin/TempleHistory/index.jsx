import EditIcon from "@/components/icons/EditIcon";
import React from "react";

const TempleHistory = () => {
  return (
    <div>
      <div className="flex justify-between py-3">
        <h4 className="text-[19px] font-poppins font-semibold ">History</h4>
        <EditIcon />
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grig-cols-1 gap-4">
        <div className="">
          <img
            src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallary_img_03.1624abef.jpg&w=2048&q=75"
            alt="Temple"
            className="w-full h-auto max-h-[380px] object-cover mr-4"
          />
        </div>
        <div className="">
          <p>
            The temple's exact age is debated, but it is believed to have been
            constructed over 1,000 years ago. Some historical accounts suggest
            that the temple dates back to the 8th century CE. It has undergone
            several renovations and expansions over the centuries The temple's
            exact age is debated, but it is believed to have been constructed
            over 1,000 years ago. Some historical accounts suggest that the
            temple dates back to the 8th century CE. It has undergone several
            renovations and expansions over the centuries
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempleHistory;
