import React, { useState } from "react";
import { put } from "@/config/axiosConfig";

const EditServiceContactDetails = ({ id, email, contact_number, mobile }) => {
  const [formErrors, setFormErrors] = useState({
    emailError: "",
    mobileError: "",
  });
  const [inputEmail, setInputEmail] = useState(email);
  const [inputMobile, setInputMobile] = useState(mobile || "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setInputEmail(value);
    } else if (name === "mobile") {
      setInputMobile(value);
    }

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      emailError: "",
      mobileError: "",
    };

    if (!inputEmail || inputEmail.trim() === "") {
      errors.emailError = "Please enter your email address";
      isValid = false;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail) 
    ) {
      errors.emailError = "Invalid email address";
      isValid = false;
    }

    if (!inputMobile || inputMobile.trim() === "") {
      errors.mobileError = "Please enter your mobile number";
      isValid = false;
    } else if (inputMobile.length !== 10) {
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

    let formData = new FormData();
    formData.append("email_address", inputEmail);
    formData.append("contact_number", inputMobile);

    put({
      api: `/temples/edit/${id}`,
      data: formData,
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
          <label className="mb-2 block">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={inputMobile}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.mobileError}
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

export default EditServiceContactDetails;
