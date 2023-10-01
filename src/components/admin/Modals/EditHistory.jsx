import React, { useState } from "react";
import { put } from "@/config/axiosConfig";

const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

const EditHistory = ({ id, other_image, history_details }) => {
  const [imageError, setImageError] = useState("");
  const [history, setHistory] = useState(history_details || "");
  const [historyError, setHistoryError] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!history || history.trim() === "") {
      setHistoryError("Please enter the temple history");
      isValid = false;
    } else {
      setHistoryError("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isHistoryValid = validateHistory();
    const isImageValid = selectedImage !== null;

    if (isHistoryValid && isImageValid) {
      const formDataToSend = convertToFormData({
        history: history,
        other_image: other_image,
      });

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
          console.log(response);
        })
        .catch((error) => {
          console.error("PUT request error:", error);
        });
    } else {
      if (!isHistoryValid) {
        setHistoryError("Please enter the temple history.");
      } else {
        setHistoryError("");
      }

      if (!isImageValid) {
        setImageError("Please select an image.");
      } else {
        setImageError("");
      }
    }
  };

  const validateHistory = () => {
    return !!history.trim();
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md shadow-md text-center">
          {selectedImage && (
            <div className="mt-6">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full rounded-md"
              />
            </div>
          )}

          <input
            type="file"
            id="file"
            name=""
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />

          <label
            htmlFor="file"
            className="block mt-4 cursor-pointer bg-[#ff6b07] text-white py-2 px-4 rounded-md"
          >
            Add Temple Image
          </label>
        </div>

        {imageError && (
          <span className="text-red-500 text-[13px]">{imageError}</span>
        )}
        <div className="mt-3">
          <label className="mb-2 block">Edit History</label>
          <textarea
            name="history"
            id="history"
            rows="4"
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px] ${
              historyError ? "border-red-500" : ""
            }`}
            placeholder="Enter the temple history"
            value={history}
            onChange={(e) => {
              setHistory(e.target.value);
              setHistoryError("");
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
