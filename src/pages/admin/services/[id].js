import Layout from "@/Layout/admin";
import ClockIcon from "@/components/icons/ClockIcon";
import EditIcon from "@/components/icons/EditIcon";
import LandmarkIcon from "@/components/icons/LandmarkIcon";
import MailIcon from "@/components/icons/MailIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import UserAddressIcon from "@/components/icons/UserAddressIcon";
import Image from "next/image";
import service_circular_pattern_img from "@/assets/service_circular_pattern_img.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserIcon from "@/components/icons/UserIcon";
import { get } from "@/config/axiosConfig";
import EditServiceProfile from "@/components/admin/Modals/service/EditServiceProfile";
import { modal } from "@/components/Modal";
import EditServiceDescription from "@/components/admin/Modals/service/EditServiceDescription";
import EditServiceContactDetails from "@/components/admin/Modals/service/EditServiceContactDetails";
import EditServiceAditionalDetails from "@/components/admin/Modals/service/EditServiceAditionalDetails";

const ServicesInfo = () => {
  const { query } = useRouter();
  const id = query.id;
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

  const onEditServiceProfile = (event) => {
    modal({
      show: true,
      containerClassName: " max-w-[500px]",
      maxWidth: 550,
      header: {
        heading: "Edit Service",
      },
      component: (
        <div>
          <EditServiceProfile
            id={id}
            profileImage={service.profile_image}
            name={service.name}
            address={service.address}
            location={service.location}
            consulting_time={service.consulting_time}
          />
        </div>
      ),
      modalBodyClassName: "",
    });
  };
  const onEditServiceDescription = (event) => {
    modal({
      show: true,
      containerClassName: " max-w-[500px]",
      maxWidth: 550,
      header: {
        heading: "Edit Service Description",
      },
      component: (
        <div>
          <EditServiceDescription id={id} description={service.description} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };
  const onEditServiceContactDetails = (event) => {
    modal({
      show: true,
      containerClassName: " max-w-[500px]",
      maxWidth: 500,
      header: {
        heading: "Edit Service Contact Details",
      },
      component: (
        <div>
          <EditServiceContactDetails
            id={id}
            email={service.email_address}
            mobile={service.contact_number}
          />
        </div>
      ),
      modalBodyClassName: "",
    });
  };
  const onEditServiceAditionalDetails = (event) => {
    modal({
      show: true,
      containerClassName: " max-w-[500px]",
      maxWidth: 500,
      header: {
        heading: "Edit Service Aditional Details",
      },
      component: (
        <div>
          <EditServiceAditionalDetails
            id={id}
            service_areas={service.service_areas}
            booking_available={service.booking_available ? "Yes" : "No"}
          />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

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
                <p className="text-secondary-gray ">{service.location}</p>
              </div>

              <div className=" ml-auto">
                <button type="button" onClick={onEditServiceProfile}>
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-3">
            <div className="mr-3">
              <ClockIcon />
            </div>
            <div className="flex gap-x-6">
              {/* <p className="text-secondary-gray text-md ">
                09:30 AM to 5:00 PM </p> */}
              {/* <p className="text-secondary-gray text-md ">{wh_1}</p>
              <p className="text-secondary-gray text-md ">{wh_2}</p>
              <p className="text-secondary-gray text-md ">{wh_3}</p> */}
              <p className="text-secondary-gray text-md ">
                {service.consulting_time}
              </p>
            </div>
          </div>
          <div>
            <div className="my-4">
              <div className="flex justify-between">
                <h1 className="text-xl font-[500]">Description</h1>
                <div className=" ml-auto">
                  <button type="button" onClick={onEditServiceDescription}>
                    <EditIcon />
                  </button>
                </div>
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
                <div className=" ml-auto">
                  <button type="button" onClick={onEditServiceContactDetails}>
                    <EditIcon />
                  </button>
                </div>
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
                <div className="flex justify-between my-3">
                  <h1 className="text-xl font-[500]">Aditional Details</h1>
                  <div className=" ml-auto">
                    <button
                      type="button"
                      onClick={onEditServiceAditionalDetails}
                    >
                      <EditIcon />
                    </button>
                  </div>
                </div>
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
ServicesInfo.getLayout = (page) => <Layout>{page}</Layout>;
export default ServicesInfo;
