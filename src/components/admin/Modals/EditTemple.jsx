import { useState } from "react";
import { put } from "@/config/axiosConfig";
import Image from "next/image";
import EditIcon from "@/components/icons/EditIcon";

const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

const EditTemple = ({
  id,
  thumbnail,
  name,
  location,
  landmark,
  wh_1,
  wh_2,
  wh_3,
  local_place,
  town,
  district,
  state,
  country,
}) => {
  const [selectedImage, setSelectedImage] = useState({
    preview: thumbnail,
    image: null,
  });
  const [formData, setFormData] = useState({
    // thumbnail: thumbnail || "",
    name: name || "",
    location: location || "",
    landmark: landmark || "",
    wh_1: wh_1 || "",
    wh_2: wh_2 || "",
    wh_3: wh_3 || "",
    local_place: local_place || "",
    town: town || "",
    district: district || "",
    state: state || "",
    country: country || "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    locationError: "",
    landmarkError: "",
    wh_1Error: "",
    wh_2Error: "",
    wh_3Error: "",
    local_placeError: "",
    townError: "",
    districtError: "",
    stateError: "",
    countryError: "",
  });

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
      nameError: "",
      locationError: "",
      landmarkError: "",
      wh_1Error: "",
      wh_2Error: "",
      wh_3Error: "",
      local_placeError: "",
      townError: "",
      districtError: "",
      stateError: "",
      countryError: "",
    };

    if (!formData.name || formData.name.trim() === "") {
      errors.nameError = "Please Enter Temple Name";
      isValid = false;
    }
    if (!formData.location || formData.location.trim() === "") {
      errors.locationError = "Please Enter Your Location";
      isValid = false;
    }
    if (!formData.landmark || formData.landmark.trim() === "") {
      errors.landmarkError = "Please Enter Your Landmark";
      isValid = false;
    }
    if (!formData.wh_1 || formData.wh_1.trim() === "") {
      errors.wh_1Error = "Please Enter Morning Working Time";
      isValid = false;
    }
    if (!formData.wh_2 || formData.wh_2.trim() === "") {
      errors.wh_2Error = "Please Enter Noon Working Time";
      isValid = false;
    }
    if (!formData.wh_3 || formData.wh_3.trim() === "") {
      errors.wh_3Error = "Please Enter Evening Working Time";
      isValid = false;
    }
    if (!formData.local_place || formData.local_place.trim() === "") {
      errors.local_placeError = "Please Enter Your Local Place";
      isValid = false;
    }
    if (!formData.town || formData.town.trim() === "") {
      errors.townError = "Please Enter Your Town";
      isValid = false;
    }
    if (!formData.district || formData.district.trim() === "") {
      errors.districtError = "Please Enter Your District";
      isValid = false;
    }
    if (!formData.state || formData.state.trim() === "") {
      errors.stateError = "Please Enter Your State";
      isValid = false;
    }
    if (!formData.country || formData.country.trim() === "") {
      errors.countryError = "Please Enter Your Country";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    // if (formData.imageRequired && !selectedImage) {

    //   alert("Please select an image");
    //   return;
    // }
    const formDataToSend = convertToFormData(formData);

    put({
      api: `/temples/edit/${id}`,
      data: formDataToSend,
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "Temple updated successfully",
          error: "Something went wrong",
        },
      },
    }).then((response) => {});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({ preview: reader.result, image: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-start items-end">
          <div className="flex justify-center items-center w-[200px] h-[200px] object-cover border-2 border-[#FF6B07] rounded-lg">
            {selectedImage.preview !== "" && selectedImage.preview !== null && (
              <div className="object-cover w-full h-full p-1">
                <Image
                  src={selectedImage.preview}
                  alt="Preview"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            )}

            <input
              type="file"
              id="file"
              name="thumbnail"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <EditIcon
            className="cursor-pointer ml-5"
            onClick={() => document.getElementById("file").click()}
          />
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Temple Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.nameError}
          </span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block"> Town</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.townError}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Local Place</label>
          <input
            type="text"
            name="local_place"
            value={formData.local_place}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.local_placeError}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.districtError}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.stateError}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.countryError}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Working Time Morning</label>
          <input
            type="text"
            name="wh_1"
            value={formData.wh_1}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.wh_1Error}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Working Time Noon</label>
          <input
            type="text"
            name="wh_2"
            value={formData.wh_2}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.wh_2Error}
          </span>
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Working Time Evening</label>
          <input
            type="text"
            name="wh_3"
            value={formData.wh_3}
            onChange={handleChange}
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.wh_3Error}
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
