import React, { useState } from 'react';

const EditDescription = () => {
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (!description || description.trim() === '') {
      setDescriptionError('Please enter the description');
      isValid = false;
    } else {
      setDescriptionError('');
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

  

    console.log('Description:', description);
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
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px] ${
              descriptionError ? 'border-red-500' : ''
            }`}
            placeholder="Enter the description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionError('');
            }}
          />
          {descriptionError && (
            <span className="text-red-500 text-[13px]">{descriptionError}</span>
          )}
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
  );
};

export default EditDescription;
