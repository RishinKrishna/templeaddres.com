import React, { useState } from "react";
import GalaryRow from "../Home/GalaryRow";
import DataTable from "../DataTable";
import Image from "next/image";
import GlobeIcon from "../icons/GlobeIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import MobileIcon from "../icons/MobileIcon";
import ClockIcon from "../icons/ClockIcon";
import LandmarkIcon from "../icons/LandmarkIcon";
import LocationIcon from "../icons/LocationIcon";
import MenuIcon from "../icons/MenuIcon";
import EditIcon from "../icons/EditIcon";
import DisableIcon from "../icons/DisableIcon";
import TrashIcon from "../icons/TrashIcon";
import { CustomDropdown } from "../CustomDropdown";
import EyeIcon from "../icons/EyeIcon";
import TemplesIcon from "../icons/TemplesIcon";

const TempleView = ({
  thumbnail,
  name,
  landmark,
  description,
  location,
  pin_code,
  deity,
  deity_2,
  gallery,
  address,
  admin,
  upi_image,
}) => {
  const [poojaList, setTempleList] = useState([]);
  const poojaTableHeaders = [
    {
      Header: "ID",
      accessor: "pooja_id",
    },
    {
      Header: "Pooja Name",
      accessor: "name",
    },
    {
      Header: "Code",
      accessor: "cdoe",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Remarks",
      accessor: "remarks",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "  ",
      accessor: "",
      Cell: () => {
        return (
          <button type="button" className="bg-primary px-4 py-3 rounded-lg">
            <EyeIcon />
          </button>
        );
      },
    },
    {
      Header: " ",
      accessor: "",
      Cell: () => {
        return (
          <CustomDropdown
            button={{
              render: () => <MenuIcon />,
            }}
            optionsContainerClassName="bg-white w-[150px] top-o right-0  py-2 shadow-lg"
            optionsList={[
              {
                icon: <EditIcon height={15} className="mr-4" />,
                name: "Edit",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9] ",
              },
              {
                icon: <DisableIcon height={15} className="mr-4" />,
                name: "Disable",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9] ",
              },
              {
                icon: <TrashIcon height={15} className="mr-4" />,
                name: "Delete",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9]  ",
              },
            ]}
          />
        );
      },
    },
  ];
  return (
    <div className="font-poppins  bg-white rounded-[16px] shadow-md px-5 pt-5">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-8 pb-10  border-b-2">
        <div>
          {thumbnail ? (
            thumbnail != "" && (
              <Image
                src={thumbnail}
                width={500}
                height={500}
                className="w-full h-full rounded-[10px] object-cover shadow-md"
                alt="temple"
              />
            )
          ) : (
            <div className="w-full h-[230px] flex justify-center items-center  rounded-[20px] border">
              <TemplesIcon width="200" height="150" className="opacity-50" />
            </div>
          )}
        </div>
        <div>
          {/* <h1 className="font-poppins text-2xl">{temple.name}</h1> */}
          <div className="border-b-2 border-opacity-20 border-b-secondary-gray py-2">
            <h1 className="font-poppins text-4xl font-semibold">{name}</h1>

            <div className="grid grid-cols-2 font-poppins text-sm mt-2">
              <div className="flex ">
                <div className="p-3">
                  <LocationIcon />
                </div>
                <div className="p-3">
                  <p className="text-secondary-gray ">{address}</p>
                </div>
              </div>

              <div className="flex ">
                <div className="p-3">
                  <LandmarkIcon />
                </div>
                <div className="p-3">
                  <p className="text-secondary-gray">{landmark}</p>
                </div>
                {admin && (
                  <div className="flex items-center ml-auto">
                    <EditIcon />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center ">
              <div className="py-1 px-3">
                <ClockIcon />
              </div>
              <div className="py-1 px-3 flex gap-x-6">
                <p className="text-secondary-gray text-md">4AM- 8AM</p>
                <p className="text-secondary-gray text-md">4AM- 8AM</p>
                <p className="text-secondary-gray text-md">4AM- 8AM</p>
              </div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-[500]">Description</h1>
              {admin && (
                <div className="flex items-center ml-auto">
                  <EditIcon />
                </div>
              )}
            </div>
            <div>
              <p className="text-secondary-gray mt-2  text-[13px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between">
              <h1 className="text-xl font-[500]">Deity</h1>
              {admin && (
                <div className="flex items-center ml-auto">
                  <EditIcon />
                </div>
              )}
            </div>
            <div className="flex gap-x-4 mt-2">
              <div className="bg-[#E4E4E4] px-4 py-2 rounded-[7px] text-[13px]">
                <span>Lord Vishnu</span>
              </div>
              <div className="bg-[#E4E4E4] px-4 py-2 rounded-[7px] text-[13px]">
                <span>Lord Vishnu</span>
              </div>
              <div className="bg-[#E4E4E4] px-4 py-2 rounded-[7px] text-[13px]">
                <span>Lord Vishnu</span>
              </div>
              <div className="bg-[#E4E4E4] px-4 py-2 rounded-[7px] text-[13px]">
                <span>Lord Vishnu</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-[500]">Contact Details</h1>
              {admin && (
                <div className="flex items-center ml-auto">
                  <EditIcon />
                </div>
              )}
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
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-4">
              <div className="flex items-center">
                <PhoneIcon />
                <span className="ml-3">0001-43548</span>
              </div>

              <div className="flex items-center">
                <GlobeIcon />
                <span className="ml-3">9048262454</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">History</h1>
          {admin && (
            <div className="flex items-center ml-auto">
              <EditIcon />
            </div>
          )}
        </div>
        <div className="mt-4 grid lg:grid-cols-2 sm:grid-1 gap-8">
          <div className="">
            {thumbnail ? (
              thumbnail != "" && (
                <Image
                  src={thumbnail}
                  width={300}
                  height={300}
                  alt="temple"
                  className="w-full max-h-[350px] object-cover rounded-[10px]"
                />
              )
            ) : (
              <div className="w-full h-[230px] flex justify-center items-center  rounded-[20px] border">
                <TemplesIcon width="200" height="150" className="opacity-50" />
              </div>
            )}
          </div>
          <div className="">
            <p className=" text-secondary-gray ">
              The s exact age is debated, but it is believed to have been
              constructed over 1,000 years ago. Some historical accounts suggest
              that the temple dates back to the 8th century CE. It has undergone
              several renovations and expansions over the centuries The temples
              exact age is debated, but it is believed to have been constructed
              over 1,000 years ago. Some historical accounts suggest that the
              temple dates back to the 8th century CE. It has undergone several
              renovations and expansions over the centuries
            </p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <h2 className=" font-semibold text-[25px]">Gallery</h2>
        <GalaryRow gallery={gallery} />
      </div>

      <div className="py-5">
        <h1 className=" font-semibold text-[25px]">Pooja List</h1>
        <div className="shadow-lg border py-4 mt-4">
          <DataTable
            columnDef={{
              tableHeaders: poojaTableHeaders,
              //   panelActionButtons,
            }}
            tableData={poojaList}
            className="t-table bordered "
            search={false}
          />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <h1 className="text-2xl font-semibold">Payment, Donation</h1>
        {admin && (
          <div className="flex items-center ml-auto">
            <EditIcon />
          </div>
        )}
      </div>
      <div className="mt-4 grid lg:grid-cols-2 sm:grid-1 gap-8 pb-6">
        <div className="">
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              Accoount nunber :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider ">
              184808971963187
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              IFSC code :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              SBIN73489573
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              Accoount name :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              User Name
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              UPI ID :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              user123@oksbi
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src={thumbnail}
            width={300}
            height={300}
            alt="temple"
            className="w-full max-h-[350px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TempleView;
