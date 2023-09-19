import Layout from "@/Layout/admin";
import ClockIcon from "@/components/icons/ClockIcon";
import EditIcon from "@/components/icons/EditIcon";
import LandmarkIcon from "@/components/icons/LandmarkIcon";
import MailIcon from "@/components/icons/MailIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import UserAddressIcon from "@/components/icons/UserAddressIcon";
import Image from "next/image";
import service_circular_pattern_img from "@/assets/service_circular_pattern_img.png";

const servicesInfo = () => {
  return (
    <div className="bg-white grid lg:grid-cols-2 sm:grid-cols-1 gap-x-8 pb-10 p-5 rounded-[16px] relative">
      <div>
        <Image
          src=""
          width={500}
          height={500}
          className="w-full h-full rounded-[10px] object-cover shadow-md"
          alt=""
        />
      </div>
      <div>
        <div className="py-2">
          <h1 className="font-poppins text-3xl font-semibold">Hari Kumar VS</h1>

          <div className="grid grid-cols-2 font-poppins text-sm mt-2">
            <div className="flex">
              <div className="mr-3">
                <UserAddressIcon />
              </div>
              <div className="">
                <p className="text-secondary-gray ">
                  Vayapputarh illam, Kakkor, Kozhikodu
                </p>
              </div>
            </div>

            <div className="flex ">
              <div className="mr-3">
                <LandmarkIcon />
              </div>
              <div className="">
                <p className="text-secondary-gray ">Kakkor</p>
              </div>

              <div className=" ml-auto">
                <EditIcon />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-3">
            <div className="mr-3">
              <ClockIcon />
            </div>
            <div className="flex gap-x-6">
              <p className="text-secondary-gray text-md ">
                09:30 AM to 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="my-4">
              <div className="flex justify-between">
                <h1 className="text-xl font-[500]">Description</h1>
              </div>
              <div className="border-b-2 border-opacity-20 border-b-secondary-gray pb-4">
                <p className="text-secondary-gray mt-2  text-[13px]">
                  Description: Harikumar VS, hailing from Vayappurath Illam, is
                  the sole proprietor of Amrutham Catering Services. He provides
                  a range of food delivery services, including those for
                  marriage functions, house warmings, and temple-related events.
                  In addition to this, he is also a priest, offering a variety
                  of poojas and related services
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between my-3">
                <h1 className="text-xl font-[500]">Contact Details</h1>
              </div>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-3">
                <div className="flex items-center">
                  <MobileIcon />
                  <span className="ml-3">9048262454</span>
                </div>

                <div className="flex items-center">
                  <MailIcon />
                  <span className="ml-3">sreepathma@gmail.com</span>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="text-xl font-[500]">Aditional Details</h1>
                <p className="text-secondary-gray mt-2  text-[13px]">
                  Service Areas: Kozhikode
                </p>
                <p className="text-secondary-gray mt-2  text-[13px]">
                  Booking Available: Yes
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          alt=""
          src={service_circular_pattern_img}
          width={320}
          height={320}
          className="right-0 bottom-0 hidden md:block w-[250px] absolute"
        />
      </div>
    </div>
  );
};
servicesInfo.getLayout = (page) => <Layout>{page}</Layout>;
export default servicesInfo;
