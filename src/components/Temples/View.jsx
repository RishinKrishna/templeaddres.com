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
import QrAlt from "../../assets/qr.png";
import { modal } from "../Modal";
import EditContactDetails from "../admin/Modals/EditContactDetails";
import EditDescription from "../admin/Modals/EditDescription";
import EditDeity from "../admin/Modals/EditDeity";
import EditHistory from "../admin/Modals/EditHistory";
import EditTemple from "../admin/Modals/EditTemple";
import EditPayment from "../admin/Modals/EditPayment";
import EditPoojaList from "../admin/Modals/EditPoojaList";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GoogleMaps from "../admin/GoogleMap";
import router from "next/router";
import AddPoojaList from "../admin/Modals/AddPoojaList";

const TempleView = ({
  id,
  thumbnail,
  name,
  landmark,
  description,
  location,
  pin_code,
  deity,
  deity_2,
  deity_3,
  deity_4,
  deity_5,
  deity_6,
  deity_7,
  temple_mobile,
  temple_phone,
  gallery,
  address,
  admin,
  upi_image,
  poojaList,
  history_details,
  email,
  url,
  wh_1,
  wh_2,
  wh_3,
  account_name,
  bank_name,
  account_number,
  ifsc_code,
  upi_id,
  local_place,
  town,
  district,
  state,
  country,
  other_image,
  onCloseModal,
}) => {
  const poojaTableHeaders = [
    {
      Header: "ID",
      accessor: "id",
      Cell: (data) => {
        let index = data.row.index + 1;
        return <span>{index}</span>;
      },
    },
    {
      Header: "Pooja Name",
      accessor: "pooja_name",
    },
    {
      Header: "Code",
      accessor: "pooja_code",
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
      Header: "  ",
      accessor: "",
      Cell: () => {
        return (
          <button
            type="button"
            className="bg-primary px-4 py-3 rounded-lg"
            onClick={() => router.push(`/admin/services/${id}`)}
          >
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
                  "flex items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9]",
                onClick: onEditPoojaList,
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

  let deities = [deity, deity_2, deity_3, deity_4, deity_5, deity_6, deity_7];
  let editTempleProps = {
    id,
    thumbnail,
    name,
    landmark,
    location,
    wh_1,
    wh_2,
    wh_3,
    local_place,
    town,
    district,
    state,
    country,
  };

  let EditContactDetailsProps = { id, temple_phone, temple_mobile, email, url };

  // console.log(temple_phone)

  let EditPaymentProps = { account_number, ifsc_code, bank_name, upi_id, id };

  let EditDeitysProps = {
    id,
    deity,
    deity_2,
    deity_3,
    deity_4,
    deity_5,
    deity_6,
    deity_7,
  };
  let EditHistoryProps = { id, other_image, history_details };
  const onEditTemple = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Address",
      },
      component: (
        <div>
          <EditTemple {...editTempleProps} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  const onEditContactDetails = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Contact Details",
      },
      component: (
        <div>
          <EditContactDetails {...EditContactDetailsProps} />
        </div>
      ),
      modalBodyClassName: "",
      onClose: () => onCloseModal(),
    });
  };

  const onEditDescription = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Description",
      },
      component: (
        <div>
          <EditDescription description={description} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  const onEditDeity = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Deity",
      },
      component: (
        <div>
          <EditDeity {...EditDeitysProps} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  const onEditHistory = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit History",
      },
      component: (
        <div>
          <EditHistory {...EditHistoryProps} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  const onEditPayment = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Payment",
      },
      component: (
        <div>
          <EditPayment {...EditPaymentProps} />
        </div>
      ),
      modalBodyClassName: "",
      onClose: () => onCloseModal(),
    });
  };

  const onEditPoojaList = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Edit Pooja List",
      },
      component: (
        <div>
          <EditPoojaList />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  const addPoojaList = (event) => {
    modal({
      show: true,
      containerClassName: "r-bg-tertiary-dark max-w-[500px]",
      header: {
        heading: "Add Pooja List",
      },
      component: (
        <div>
          <AddPoojaList id={id} />
        </div>
      ),
      modalBodyClassName: "",
    });
  };

  return (
    <div className="font-poppins  bg-white rounded-[16px] shadow-md lg:px-5 lg:pt-5 px-3">
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
                    <button type="button" onClick={onEditTemple}>
                      <EditIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center ">
              <div className=" p-3">
                <ClockIcon width={15} />
              </div>
              <div className="py-1 px-3 flex gap-x-6">
                <p className="text-secondary-gray text-md">{wh_1}</p>
                <p className="text-secondary-gray text-md">{wh_2}</p>
                <p className="text-secondary-gray text-md">{wh_3}</p>
              </div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-[500]">Description</h1>
              {admin && (
                <button type="button" onClick={onEditDescription}>
                  <EditIcon />
                </button>
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
                  <button type="button" onClick={onEditDeity}>
                    <EditIcon />
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-x-4 mt-2">
              {deities.map((deity, index) => {
                if (deity && deity !== "") {
                  return (
                    <div
                      key={index}
                      className="bg-[#E4E4E4] px-4 py-2 rounded-[7px] text-[13px]"
                    >
                      <span>{deity}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-[500]">Contact Details</h1>
              {admin && (
                <button type="button" onClick={onEditContactDetails}>
                  <EditIcon />
                </button>
              )}
            </div>

            <div className="lg:flex grid sm:grid-cols-1 mt-3 gap-10">
              <div className="flex items-center text-[14px] text-secondary-gray">
                <MobileIcon />
                <span className="ml-3">{temple_mobile}</span>
              </div>

              <div className="flex items-center text-[14px] text-secondary-gray">
                <MailIcon />
                <span className="ml-3">{email}</span>
              </div>
            </div>
            <div className="lg:flex grid sm:grid-cols-1 mt-4 gap-10">
              <div className="flex items-center text-[14px] text-secondary-gray">
                <PhoneIcon />
                <span className="ml-3">{temple_phone}</span>
              </div>

              <div className="flex items-center text-[14px] text-secondary-gray">
                <GlobeIcon />
                <span className="ml-3">{url}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">History</h1>
          {admin && (
            <button type="button" onClick={onEditHistory}>
              <EditIcon />
            </button>
          )}
        </div>
        <div className="mt-4 grid lg:grid-cols-2 sm:grid-1 gap-8">
          <div className="">
            {other_image ? (
              other_image != "" && (
                <Image
                  src={other_image}
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
            <p className="text-secondary-gray ">{history_details}</p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <h2 className=" font-semibold text-[25px]">Gallery</h2>
        <GalaryRow gallery={gallery} />
      </div>

      <div className="py-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Pooja List</h1>
          {admin && (
            <button
              type="button"
              className="py-[8px] text-[14px] font-semibold text-[#fff] px-[40px] bg-[#ff6b07] rounded-[10px]"
              onClick={addPoojaList}
            >
              Add Pooja
            </button>
          )}
        </div>
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

      <GoogleMaps />

      <div className="flex justify-between mt-5">
        <h1 className="text-2xl font-semibold">Payment, Donation</h1>
        {admin && (
          <button type="button" onClick={onEditPayment}>
            <EditIcon />
          </button>
        )}
      </div>
      <div className="mt-4 grid lg:grid-cols-2 sm:grid-1 gap-8 pb-6">
        <div className="">
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              Accoount number :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider ">
              {account_number}
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              IFSC code :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              {ifsc_code}
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              Accoount name :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              {bank_name}
            </p>
          </div>
          <div className="border bottom-1 rounded-lg p-2 mt-3">
            <h5 className=" text-secondary-gray text-[15px] font-semibold ">
              UPI ID :
            </h5>
            <p className=" text-secondary-gray text-[15px] tracking-wider">
              {upi_id}
            </p>
          </div>
        </div>
        <div className="px-12">
          {upi_image !== null ? (
            <div className="p-6 flex justify-center items-center">
              <Image
                src={upi_image}
                width={300}
                height={300}
                alt="temple"
                className="w-[250px] h-[250px] object-cover rounded-[10px]"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <Image
                src={QrAlt}
                alt="qr"
                className="opacity-20"
                width={250}
                height={250}
              />
              <p className="text-secondary-gray">No QR Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TempleView;
