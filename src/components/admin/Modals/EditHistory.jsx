import React, { useState } from 'react';

const EditHistory = () => {
  const [history, setHistory] = useState('');
  const [historyError, setHistoryError] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (!history || history.trim() === '') {
      setHistoryError('Please enter the temple history');
      isValid = false;
    } else {
      setHistoryError('');
    }
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
        <div className="mb-3">
          <label className="mb-2 block">Edit History</label>
          <textarea
            name="history"
            id="history"
            rows="4" 
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px] ${
              historyError ? 'border-red-500' : ''
            }`}
            placeholder="Enter the temple history"
            value={history}
            onChange={(e) => {
              setHistory(e.target.value);
              setHistoryError('');
            }}
          />
          {historyError && (
            <span className="text-red-500 text-[13px]">{historyError}</span>
          )}
        </div>
        <div className="flex justify-end items-center mt-8">
          <button
            type="submit"
            className="py-[9px] font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px]"
          >
            Save History
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditHistory;
