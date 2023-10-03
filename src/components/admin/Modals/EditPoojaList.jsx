import React, { useState } from 'react';
import { post } from '@/config/axiosConfig';







const EditPoojaList = ({ id, pooja_name, pooja_uuid, pooja_code, pooja_desc, price, remarks, types }) => {

  
  
  const [formData, setFormData] = useState({
    pooja_name: pooja_name || '',
    pooja_code: pooja_code || '',
    pooja_desc: pooja_desc || '',
    price: price || '',
    remarks: remarks || '',
    types: types || '',
  });

  const [formErrors, setFormErrors] = useState({
    poojaNameError: '',
    poojaCodeError: '',
    poojaDescriptionError: '',
    priceError: '',
    remarkError: '',
    typeError: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      poojaCodeError: '',
      poojaNameError: '',
      poojaDescriptionError: '',
      priceError: '',
      remarkError: '',
      typeError: '',
    };

    if (!formData.pooja_code || formData.pooja_code.trim() === '') {
      errors.poojaCodeError = 'Please enter Pooja Code';
      isValid = false;
    }

    if (!formData.pooja_name || formData.pooja_name.trim() === '') {
      errors.poojaNameError = 'Please enter Pooja Name';
      isValid = false;
    }

    if (!formData.pooja_desc || formData.pooja_desc.trim() === '') {
      errors.poojaDescriptionError = 'Please enter Pooja Description';
      isValid = false;
    }

    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      errors.priceError = 'Please enter a valid Price';
      isValid = false;
    }

    if (!formData.remarks || formData.remarks.trim() === '') {
      errors.remarkError = 'Please enter Remark';
      isValid = false;
    }

    if (!formData.types || formData.types.trim() === '') {
      errors.typeError = 'Please enter Type';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    post({
      api: `/temple/${id}/pooja/${pooja_uuid}/edit`,
      data: {
        pooja_name: formData.pooja_name,
        pooja_code: formData.pooja_code,
        pooja_desc: formData.pooja_desc,
        price: formData.price,
        remarks: formData.remarks,
        types: formData.types

      },
      toastConfig: {
        messages: {
          pending: 'Please wait',
          success: 'Pooja List updated successfully',
          error: 'Something went wrong',
        },
      },
    });
  };

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Name</label>
          <input
            type="text"
            name="pooja_name"
            value={formData.pooja_name}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Name"
          />
          <span className="text-red-500 text-[13px]">{formErrors.poojaNameError}</span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Code</label>
          <input
            type="text"
            name="pooja_code"
            value={formData.pooja_code}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Code"
          />
          <span className="text-red-500 text-[13px]">{formErrors.poojaCodeError}</span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Description</label>
          <textarea
            name="pooja_desc"
            rows="4"
            value={formData.pooja_desc}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Description"
          />
          <span className="text-red-500 text-[13px]">{formErrors.poojaDescriptionError}</span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Price"
          />
          <span className="text-red-500 text-[13px]">{formErrors.priceError}</span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Remarks</label>
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Remarks"
          />
          <span className="text-red-500 text-[13px]">{formErrors.remarkError}</span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Type</label>
          <input
            type="text"
            name="types"
            value={formData.types}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Type"
          />
          <span className="text-red-500 text-[13px]">{formErrors.typeError}</span>
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

export default EditPoojaList;
