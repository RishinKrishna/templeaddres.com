import React, { useState } from 'react';
import { put } from '@/config/axiosConfig';

const convertToFormData = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  };
  
  
const EditServiceDescription = ({id, description}) => {
    
  const [formData, setFormData] = useState({
    description: description || "",
  });

  const [formErrors, setFormErrors] = useState({
    descriptionError: "",
   
  });
  const formDataToSend = convertToFormData(formData);

  
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
      descriptionError: "",
    };
  
    if (!formData.description || formData.description.trim() === "") {
      errors.descriptionError = "Please enter Temple Description";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

  

   

    put({
      api: `/service/edit/${id}`,
      data: formDataToSend,
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "Description updated successfully",
          error: "Something went wrong",
        },
      },
    })
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="mb-2 block">Description</label>
        <textarea
          name="description"
          id="description"
          rows="4" 
          className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]           descriptionError ? 'border-red-500' : ''
          `}
          placeholder="Enter the description"
          value={formData.description}
          onChange={handleChange}
        />
       
          <span className="text-red-500 text-[13px]">{formErrors.descriptionError}</span>
      </div>
      <div className="flex justify-end items-center mt-8">
        <button
          type="submit"
          className="py-[9px] font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px]"
        >
          Save Description
        </button>
      </div>
    </form>
  </div>    
  )
}

export default EditServiceDescription