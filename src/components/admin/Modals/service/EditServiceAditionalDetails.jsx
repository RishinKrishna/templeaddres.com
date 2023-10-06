import React, { useState } from "react";
import { put } from "@/config/axiosConfig";

const EditServiceAdditionalDetails = ({ id, service_areas, booking_available }) => {
  const [formErrors, setFormErrors] = useState({
    serviceAreasError: "",
    bookingAvailableError: "",
  });
  const [inputServiceAreas, setInputServiceAreas] = useState(service_areas || "");
  const [inputBookingAvailable, setInputBookingAvailable] = useState(booking_available || "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service_areas") {
      setInputServiceAreas(value);
    } else if (name === "booking_available") {
      setInputBookingAvailable(value);
    }

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      serviceAreasError: "",
      bookingAvailableError: "",
    };

    if (!inputServiceAreas || inputServiceAreas.trim() === "") {
      errors.serviceAreasError = "Please enter service areas";
      isValid = false;
    }

    if (!inputBookingAvailable || inputBookingAvailable.trim() === "") {
      errors.bookingAvailableError = "Please enter booking availability details";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    let formData = new FormData();
    formData.append("service_areas", inputServiceAreas);
    formData.append("booking_available", inputBookingAvailable);

    put({
      api: `/temples/edit/${id}`,
      data: formData,
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "You have successfully updated additional details",
          error: "Something went wrong",
        },
      },
    }).then((response) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Service Areas</label>
          <input
            type="text"
            name="service_areas"
            value={inputServiceAreas}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.serviceAreasError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Booking Available</label>
          <select
            name="booking_available"
            value={inputBookingAvailable}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <span className="text-red-500 text-[13px]">
            {formErrors.bookingAvailableError}
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

export default EditServiceAdditionalDetails;
