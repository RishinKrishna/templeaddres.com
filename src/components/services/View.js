import Image from "next/image";
import React, { useEffect, useState } from "react";
import MobileIcon from "../icons/MobileIcon";
import MailIcon from "../icons/MailIcon";
import ClockIcon from "../icons/ClockIcon";
import EditIcon from "../icons/EditIcon";
import LandmarkIcon from "../icons/LandmarkIcon";
import UserAddressIcon from "../icons/UserAddressIcon";
import UserIcon from "../icons/UserIcon";
import { get } from "@/config/axiosConfig";
import service_circular_pattern_img from "@/assets/service_circular_pattern_img.png";

const ServiceView = ({ id }) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const getService = () => {
      get({ api: `/services/view/${id}` }).then((response) => {
        setService(response.data.data);
      });
    };

    if (id) {
      getService();
    }
  }, [id]);

  return (
    <div className="bg-white grid lg:grid-cols-2 sm:grid-cols-1 gap-x-8 pb-10 p-5 rounded-[16px] relative">
      <div>
        {service.profile_image ? (
          service.profile_image != "" && (
            <Image
              src={service.profile_image}
              width={500}
              height={500}
              className="w-full h-full rounded-[10px] object-cover shadow-md"
              alt="temple"
            />
          )
        ) : (
          <div className="w-full h-full flex justify-center items-center  rounded-[20px] border">
            <UserIcon
              width="200"
              height="150"
              className="opacity-50"
              fill="#A9A9A9"
            />
          </div>
        )}
      </div>
      <div>
        <div className="py-2">
          <h1 className="font-poppins text-3xl font-semibold">
            {service.name}
          </h1>

          <div className="grid grid-cols-2 gap-x-4 font-poppins text-sm mt-2">
            <div className="flex">
              <div className="mr-3">
                <UserAddressIcon />
              </div>
              <div className="">
                <p className="text-secondary-gray ">{service.address}</p>
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
                  {service.description}
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
                  <span className="ml-3">{service.contact_number}</span>
                </div>

                <div className="flex items-center">
                  <MailIcon />
                  <span className="ml-3">{service.email_address}</span>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="text-xl font-[500]">Aditional Details</h1>
                <p className="text-secondary-gray mt-2  text-[13px]">
                  Service Areas: {service.service_areas}
                </p>
                <p className="text-secondary-gray mt-2  text-[13px]">
                  Booking Available: {service.booking_available ? "Yes" : "No"}
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

export default ServiceView;
