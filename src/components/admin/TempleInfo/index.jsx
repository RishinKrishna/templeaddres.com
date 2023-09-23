import Image from "next/image";
import TampleDescription from "../TampleDescription";
import TempleDeity from "../TempleDeity";
import TempleContactDetails from "../TempleContactDetails";
import  Image  from "next/image";
const TempleInfo = () => {
  return (
    <div className="w-full flex">
      <div className="w-[50%]">
        <Image
        width={500}
        height={500}
          src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtempleCard_01.7b351b63.jpg&w=2048&q=75"
          alt="Temple"
          className="object-cover"
        />
      </div>
      <div className="w-[50%] px-4">
        <div className="w-full">
          <h2 className="text-[20px] font-poppins font-semibold">
            Sree Padmanabhaswamy Temple
          </h2>
        </div>
        <div className="flex text-[#666666]">
          <div className="w-[50%] py-3">
            <div className="text-[11px]">
              <p>
                West Nada Fort, East Fort, Pazhavangadi, Thiruvananthapuram,
                Kerala 628246
              </p>
            </div>
          </div>
          <div className="w-[50%] py-3 text-[11px]">
            <p> Near The Supreme court </p>
          </div>
        </div>
        <div className="flex justify-center text-[14px] gap-10 ">
          <p>4AM - 8AM</p>
          <p>1PM - 2PM</p>
          <p>6PM- 9PM</p>
        </div>
        <div className="w-full border bottom-b-2"></div>
        <TampleDescription />
        <TempleDeity />
        <TempleContactDetails />
      </div>
    </div>
  );
};

export default TempleInfo;
