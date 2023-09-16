import Layout from "@/Layout/admin";
import TampleDescription from "@/components/admin/TampleDescription";
import TempleContactDetails from "@/components/admin/TempleContactDetails";
import TempleDeity from "@/components/admin/TempleDeity";
import TempleGallery from "@/components/admin/TempleGallery";
import TempleHistory from "@/components/admin/TempleHistory";
import EditIcon from "@/components/icons/EditIcon";
import LandmarkIcon from "@/components/icons/LandmarkIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import TimerIcon from "@/components/icons/TimerIcon";
import Image from "next/image";

const TempleInfo = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-2 md:grig-cols-1 gap-4 bg-white rounded-t-[20px] p-3">
        <div>
          <img
            src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtempleCard_01.7b351b63.jpg&w=2048&q=75"
            alt="Temple"
            className="object-cover h-auto w-full "
          />
        </div>
        <div className="">
          <h2 className="text-[26px] font-poppins font-semibold mb-3">
            Sree Padmanabhaswamy Temple
          </h2>
          <div className="w-full grid lg:grid-cols-2 md:grig-cols-1">
            <div className="flex text-[13px] mb-4">
              <div>

              <LocationIcon />
              </div>
              <p className="ml-1">
                West Nada Fort, East Fort, Pazhavangadi, Thiruvananthapuram,
                Kerala 628246
              </p>
            </div>
            <div className="flex text-[13px] mb-4">
              <div>

              <LandmarkIcon />
              </div>
              <p className="ml-1">Near The Supreme court</p>
              <div className="ml-auto ">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center text-[20px] gap-2">
          <TimerIcon/>
          <p>4AM - 8AM</p>
          <p className="ml-6">1PM - 2PM</p>
          <p className="ml-6">6PM- 9PM</p>
        </div>
        <div class="w-full border-b border-gray-300 mt-2"></div>
        <TampleDescription />
        <TempleDeity />
        <TempleContactDetails />
        </div>
      </div>
      
      <div>
        <div className="bg-white rounded-b-[20px] px-3">
          <div class="w-full border-b border-gray-300"></div>
          <TempleHistory />
          <TempleGallery />
        </div>
      </div>
    </>
  );
};

TempleInfo.getLayout = (page) => <Layout>{page}</Layout>;

export default TempleInfo;
