import React, { useState } from 'react';
import { put } from '@/config/axiosConfig';

const EditContactDetails = ({ id, temple_phone, temple_mobile, email, url }) => {
  const [formErrors, setFormErrors] = useState({
    phoneError: '',
    mobileError: '',
  });

  const [templeMobile, setTempleMobile] = useState(temple_mobile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: '',
    });

    if (name === 'mobile') {
      setTempleMobile(value);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      phoneError: '',
      mobileError: '',
    };

    if (!temple_phone || temple_phone.trim() === "") {
      errors.phoneError = "Please enter your phone number";
      isValid = false;
    } else if (temple_phone.length !== 10) {
      errors.phoneError = "Phone should have 10 digits";
      isValid = false;
    }

    if (!templeMobile || templeMobile.trim() === "") {
      errors.mobileError = "Please enter your mobile number";
      isValid = false;
    } else if (templeMobile.length !== 10) {
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
        phone: temple_phone,
        mobile: templeMobile,
        email: email,
        url: url,
      },
      toastConfig: {
        messages: {
          pending: 'Please wait',
          success: 'You have successfully updated contact details',
          error: 'Something went wrong',
        },
      },
    }).then((response) => {

    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Phone</label>
          <input
            type="number"
            name="phone"
            value={temple_phone}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.phoneError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Mobile</label>
          <input
            type="number"
            name="mobile"
            value={templeMobile}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
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
            value={email}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
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
            value={url}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
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
