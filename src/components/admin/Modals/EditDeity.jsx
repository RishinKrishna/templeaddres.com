import React, { useState } from 'react';
import { put } from '@/config/axiosConfig';


const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};




const EditDeity = ({ id, deity, deity_2, deity_3, deity_4, deity_5, deity_6, deity_7 }) => {
  
  

  const [formData, setFormData] = useState({
    deity: deity || "",
    deity_2: deity_2 || "",
    deity_3: deity_3 || "",
    deity_4: deity_4 || "",
    deity_5: deity_5 || "",
    deity_6: deity_6 || "",
    deity_7: deity_7 || "",
  });
  
  const [formErrors, setFormErrors] = useState({
    deityError:  "",
    deity_2Error: "",
    deity_3Error: "",
    deity_4Error: "",
    deity_5Error: "",
    deity_6Error: "",
    deity_7Error: "",
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

  const validateForm = () =>{

    let isValid = true;
    const errors = {
      deityError:  "",
    deity_2Error: "",
    deity_3Error: "",
    deity_4Error: "",
    deity_5Error: "",
    deity_6Error: "",
    deity_7Error: "",
    };

    if (!formData.deity || formData.deity.trim() === "") {
      errors.deityError = "Please enter Deity";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;   
  }



  // const handleChange = (e, index) => {
  //   const newDeities = [...deities];
  //   newDeities[index] = e.target.value;
  //   setDeities(newDeities);

  //   const newErrors = [...deityErrors];
  //   newErrors[index] = '';
  //   setDeityErrors(newErrors);
  // };

  // const validateForm = () => {
  //   let isValid = true;
  //   const newErrors = [...deityErrors];

   
  //   if (!deities[0] || deities[0].trim() === '') {
  //     newErrors[0] = 'Please enter Deity 1';
  //     isValid = false;
  //   }

  //   setDeityErrors(newErrors);
  //   return isValid;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

      

      put({
        api: `/temples/edit/${id}`,
        data: formDataToSend,
        toastConfig: {
          messages: {
            pending: "Please wait",
            success: "Deity updated successfully",
            error: "Something went wrong",
          },
        },
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>


      <div className="mb-3">
          <label className="mb-2 block">Deity</label>
          <input
            type="text"
            name="deity"
            value={formData.deity}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deityError}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deity 2</label>
          <input
            type="text"
            name="deity_2"
            value={formData.deity_2}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_2Error}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deity 3</label>
          <input
            type="text"
            name="deity_3"
            value={formData.deity_3}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_3Error}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deity 4</label>
          <input
            type="text"
            name="deity_4"
            value={formData.deity_4}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_4Error}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deity 5</label>
          <input
            type="text"
            name="deity_5"
            value={formData.deity_5}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_5Error}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deity 6</label>
          <input
            type="text"
            name="deity_6" 
            value={formData.deity_6}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_6Error}
          </span>
        </div>
      <div className="mb-3">
          <label className="mb-2 block">Deit 7</label>
          <input
            type="text"
            name="deity_7"
            value={formData.deity_7}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter account number"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.deity_7Error}
          </span>
        </div>



        {/* {deities.map((deity, index) => (
          <div key={index} className="mb-3">
            <label className="mb-2 block">Deity {index + 1}</label>
            <input
              type="text"
              name={`deity${index}`}
              value={deity}
              onChange={(e) => handleChange(e, index)}
              className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px] ${
                deityErrors[index] ? 'border-red-500' : ''
              }`}
              placeholder={`Enter Deity ${index + 1}`}
            />
            {deityErrors[index] && (
              <span className="text-red-500 text-[13px]">
                {deityErrors[index]}
              </span>
            )}
          </div>
        ))} */}
        <div className="flex justify-end items-center mt-8">
          <button
            type="submit"
            className="py-[9px] font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px]"
          >
            Save Deity
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeity;
