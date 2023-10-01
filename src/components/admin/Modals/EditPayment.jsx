import { put } from "@/config/axiosConfig";
import React, { useState } from "react";



const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};


const EditPayment = ({ id,  account_number, ifsc_code, bank_name, upi_id }) => {
  const [formData, setFormData] = useState({
    account_number: account_number || "",
    ifsc_code: ifsc_code || "",
    bank_name: bank_name || "",
    upi_id: upi_id || "",
  });

  const [formErrors, setFormErrors] = useState({
    accountNumberError: "",
    ifscCodeError: "",
    bankNameError: "",
    upiIdError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      accountNumberError: "",
      ifscCodeError: "",
      bankNameError: "",
      upiIdError: "",
    };

    if (!formData.account_number || formData.account_number.trim() === "") {
      errors.accountNumberError = "Please enter your account number";
      isValid = false;
    }

    if (!formData.ifsc_code || formData.ifsc_code.trim() === "") {
      errors.ifscCodeError = "Please enter your IFSC code";
      isValid = false;
    }

    if (!formData.bank_name || formData.bank_name.trim() === "") {
      errors.bankNameError = "Please enter your bank name";
      isValid = false;
    }

    if (!formData.upi_id || formData.upi_id.trim() === "") {
      errors.upiIdError = "Please enter your UPI ID";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

      
      const formDataToSend = convertToFormData(formData);

      put({
        api: `/temples/edit/${id}`,
        data: formDataToSend,
        toastConfig: {
          messages: {
            pending: "Please wait",
            success: "Payment details updated successfully",
            error: "Something went wrong",
          },
        },
      })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('PUT request error:', error);
      
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Account Number</label>
          <input
            type="text"
            name="account_number"
            value={formData.account_number}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.accountNumberError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">IFSC Code</label>
          <input
            type="text"
            name="ifsc_code"
            value={formData.ifsc_code}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter IFSC code"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.ifscCodeError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Bank Name</label>
          <input
            type="text"
            name="bank_name"
            value={formData.bank_name}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter bank name"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.bankNameError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">UPI ID</label>
          <input
            type="text"
            name="upi_id"
            value={formData.upi_id}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter UPI ID"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.upiIdError}
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

export default EditPayment;
