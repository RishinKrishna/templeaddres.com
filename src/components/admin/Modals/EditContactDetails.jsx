import React, { useState } from "react";
import { put } from "@/config/axiosConfig";

const EditContactDetails = ({
  id,
  temple_phone = "",
  temple_mobile,
  email,
  url,
}) => {
  const [formErrors, setFormErrors] = useState({
    phoneError: "",
    mobileError: "",
    emailError: "",
    urlError: "",
  });

  console.log("working", temple_phone);

  const [inputTemplePhone, setInputTemplePhone] = useState(temple_phone);
  const [inputTempleMobile, setInputTempleMobile] = useState(temple_mobile);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputUrl, setInputUrl] = useState(url);
  // const

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "temple_phone") {
      setInputTemplePhone(value);
    } else if (name === "temple_mobile") {
      setInputTempleMobile(value);
    } else if (name === "email") {
      setInputEmail(value);
    } else if (name === "url") {
      setInputUrl(value);
    }

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      phoneError: "",
      mobileError: "",
    };

    if (!inputTemplePhone || inputTemplePhone.trim() === "") {
      errors.phoneError = "Please enter your phone number";
      isValid = false;
    } else if (inputTemplePhone.length !== 10) {
      errors.phoneError = "Phone should have 10 digits";
      isValid = false;
    }

    if (!inputTempleMobile || inputTempleMobile.trim() === "") {
      errors.mobileError = "Please enter your mobile number";
      isValid = false;
    } else if (inputTempleMobile.length !== 10) {
      errors.mobileError = "Mobile should have 10 digits";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    put({
      api: `/contact/edit/${id}`,
      data: {
        temple_phone: inputTemplePhone,
        temple_mobile: inputTempleMobile,
        email: inputEmail,
        url: inputUrl,
      },
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "You have successfully updated contact details",
          error: "Something went wrong",
        },
      },
    }).then((response) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Phone</label>
          <input
            type="text"
            name="temple_phone"
            value={inputTemplePhone}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.phoneError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Mobile</label>
          <input
            type="text"
            name="temple_mobile"
            value={inputTempleMobile}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.mobileError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Email</label>
          <input
            type="email"
            name="email"
            value={inputEmail}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.emailError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">URL</label>
          <input
            type="text"
            name="url"
            value={inputUrl}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.urlError}
          </span>
        </div>
        <div className="flex justify-end items-center mt-8">
          <button
            type="submit"
            className="py-[9px] font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactDetails;
