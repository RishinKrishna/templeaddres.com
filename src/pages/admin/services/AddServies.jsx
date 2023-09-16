import Layout from "@/Layout/admin";
import EditIcon from "@/components/icons/EditIcon";
import React, { useState } from "react";

const AddServies = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    bookingAvailable: "",
    email: "",
    service: "",
    location: "",
    consultingTime: "",
    serviceAreas: "",
    phone: "",
  });

  const [FormError, setFormError] = useState({
    nameErr: "",
    descriptionErr: "",
    addressErr: "",
    bookingAvailableErr: "",
    emailErr: "",
    serviceErr: "",
    locationErr: "",
    consultingTimeErr: "",
    serviceAreasErr: "",
    phoneErr: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    let errorKey = `${[e.target.name]}Err`;
    setFormError({
      ...FormError,
      [errorKey]: "",
    });


  };

  const validateForm =()=>{
   let nameErr = "";
   let descriptionErr = "";
   let addressErr = "";
   let bookingAvailableErr = "";
   let emailErr = "";
   let serviceErr = "";
   let locationErr = "";
   let consultingTimeErr = "";
   let serviceAreasErr = "";
   let phoneErr = "";

   if (!formData.name || formData.name == "") {
    nameErr = "Please enter your name ";
  }
  if (formData.description === "") {
    descriptionErr = "Please enter your description";
  }
  if (formData.address === "") {
    addressErr = "Please enter your Address";
  }
  if (formData.bookingAvailable === "") {
    bookingAvailableErr = "Please enter your Booking Available";
  }
  if (!formData.email && formData.email == "") {
    emailErr = "Please enter your email ";
  }
  if (formData.service === "") {
    serviceErr = "Please enter your service";
  }
  if (formData.location === "") {
    locationErr = "Please enter your location";
  }
  if (formData.consultingTime === "") {
    consultingTimeErr = "Please enter your consulting Time";
  }
  if (formData.serviceAreas === "") {
    serviceAreasErr = "Please enter your service Areas ";
  }
  
  if (formData.phone == "") {
    phoneErr = "Please enter your phone number";
  } else if (formData.phone.length != 10) {
    phoneErr = "Phone should have 10 digits";
  }


  if (
    nameErr !== "" ||
    descriptionErr !== "" ||
    addressErr !== "" ||
    bookingAvailableErr !== "" ||
    emailErr !== "" ||
    serviceErr !== "" ||
    locationErr !== "" ||
    consultingTimeErr !== "" ||
    serviceAreasErr !== "" ||
    phoneErr !== "" 
  ) {
    setFormError({
      ...FormError,
      nameErr,
      descriptionErr,
      addressErr,
      bookingAvailableErr,
      emailErr,
      serviceErr,
      locationErr,
      consultingTimeErr,
      serviceAreasErr,
      phoneErr,

    });
    return false;
  }
  return true;

}

const handleSubmit = async (e) => {
  e.preventDefault();
  const isValid = validateForm();
  if (!isValid) return;

  // post({ api: ""})
};













  return (
    <div className="w-full bg-white lg:p-6 grid lg:grid-cols-2 md:grig-cols-1 gap-6 rounded-[20px]">
      <div className="w-full">
        <div className="flex justify-start items-center">
          <div className="w-[82px] h-[82px] bg-green-200 rounded-full border-2 border-[#FF6B07]"></div>
          <div className="ml-8">
            <EditIcon />
          </div>
        </div>

        <form action="" className="">
          <div className="mt-3">
            <label className="mb-2 block ">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
             <span className="text-red-500 text-[13px]">{FormError.nameErr}</span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Description"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">{FormError.descriptionErr}</span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Address"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">{FormError.addressErr}</span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Booking Available</label>
            <input
              type="text"
              name="bookingAvailable"
              id="bookingAvailable"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Booking Available"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">{FormError.bookingAvailableErr}</span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">{FormError.emailErr}</span>
          </div>
        </form>
      </div>

      <div className="">
        <div className="">
          <label className="mb-2 block ">Service</label>
          <input
            type="text"
            name="service"
            id="service"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Service"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">{FormError.serviceErr}</span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block ">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Location"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">{FormError.locationErr}</span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block ">Consulting Time</label>
          <input
            type="text"
            name="consultingTime"
            id="consultingTime"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Consulting Time"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">{FormError.consultingTimeErr}</span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block ">Service Areas</label>
          <input
            type="text"
            name="serviceAreas"
            id="serviceAreas"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">{FormError.serviceAreasErr}</span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block ">Contact Number</label>
          <input
            type="number"
            name="number"
            id="number"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">{FormError.phoneErr}</span>
        </div>
        <div className="flex justify-end items-center mt-8">

        <button
              type="button"
              className="py-[9px]  font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px] ml-auto"
              onClick={handleSubmit}
            >
              Add Service
            </button>
        </div>
      </div>
    </div>
  );
};

AddServies.getLayout = (page) => <Layout>{page}</Layout>;

export default AddServies;
