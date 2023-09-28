import { useState } from 'react';
import { put } from '@/config/axiosConfig';

const EditTemple = ( { id, name,
  landmark,
  location}) => {
  const [formData, setFormData] = useState({
    templeLocation: location, 
    templeLandmark: landmark, 
  });

  const [formErrors, setFormErrors] = useState({
    templeLocationError: '',
    templeLandmarkError: '',
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
      templeLocationError: '',
      templeLandmarkError: '',
    };

    if (!formData.templeLocation.trim()) {
      errors.templeLocationError = 'Enter Temple Location.';
      isValid = false;
    }

    if (!formData.templeLandmark.trim()) {
      errors.templeLandmarkError = 'Enter Temple Landmark.';
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
      api: `/temples/edit/${id}`, 
      data: {
        templeLocation: formData.templeLocation,
        templeLandmark: formData.templeLandmark,
      },
      toastConfig: {
        messages: {
          pending: 'Please wait',
          success: 'You have successfully updated the temple',
          error: 'Something went wrong',
        },
      },
    })
      .then((response) => {
      //  window
      })
      
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Temple Location</label>
          <input
            type="text"
            name="templeLocation"
            value={formData.templeLocation}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.templeLocationError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Temple Landmark</label>
          <input
            type="text"
            name="templeLandmark"
            value={formData.templeLandmark}
            onChange={handleChange}
            className='w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]'
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.templeLandmarkError}
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

export default EditTemple;
