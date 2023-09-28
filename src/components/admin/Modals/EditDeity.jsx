import React, { useState } from 'react';

const EditDeity = ({ id, deity, deity_2, deity_3, deity_4, deity_5, deity_6, deity_7 }) => {
  const [deities, setDeities] = useState([
    deity || '',
    deity_2 || '',
    deity_3 || '',
    deity_4 || '',
    deity_5 || '',
    deity_6 || '',
    deity_7 || '',
  ]);
  const [deityErrors, setDeityErrors] = useState(['', '', '', '', '', '', '']);

  const handleChange = (e, index) => {
    const newDeities = [...deities];
    newDeities[index] = e.target.value;
    setDeities(newDeities);

    const newErrors = [...deityErrors];
    newErrors[index] = '';
    setDeityErrors(newErrors);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = [...deityErrors];

   
    if (!deities[0] || deities[0].trim() === '') {
      newErrors[0] = 'Please enter Deity 1';
      isValid = false;
    }

    setDeityErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {deities.map((deity, index) => (
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
        ))}
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
