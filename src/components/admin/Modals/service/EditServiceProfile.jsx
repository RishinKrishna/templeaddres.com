import React, { useState } from "react";
import { put } from "@/config/axiosConfig";
import Image from "next/image";
import EditIcon from "@/components/icons/EditIcon";

const EditServiceProfile = ({
  id,
  profileImage = "",
  name: initialName,
  address: initialAddress,
  location: initialLocation,
  consulting_time: initialconsulting_time,
}) => {
  const [name, setName] = useState(initialName || "");
  const [consultingTime, setConsultingTime] = useState(initialconsulting_time || "");
  const [address, setAddress] = useState(initialAddress || "");
  const [location, setLocation] = useState(initialLocation || "");

  const [nameError, setNameError] = useState("");
  const [consultingTimeError, setConsultingTimeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [imageError, setImageError] = useState("");

  const [selectedImage, setSelectedImage] = useState({
    preview: profileImage,
    image: null,
  });

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!consultingTime.trim()) {
      setConsultingTimeError("Please enter consulting time");
      isValid = false;
    } else {
      setConsultingTimeError("");
    }

    if (!address.trim()) {
      setAddressError("Please enter your address");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (!location.trim()) {
      setLocationError("Please enter your location");
      isValid = false;
    } else {
      setLocationError("");
    }

    if (!selectedImage.image && selectedImage.preview === "") {
      setImageError("Please select an image");
      isValid = false;
    } else {
      setImageError("");
    }

    return isValid;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
          ...selectedImage,
          preview: reader.result,
          image: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("consulting_time", consultingTime.trim());
      formData.append("address", address.trim());
      formData.append("location", location.trim());
      formData.append("profileImage", selectedImage.image);

      put({
        api: `/service/edit/${id}`,
        data: formData,
        toastConfig: {
          messages: {
            pending: "Please wait",
            success: "You have successfully updated Service",
            error: "Something went wrong",
          },
        },
      })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          
        });
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
                  width={200}
                  height={200}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            )}
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                name="profileImage"
                className="py-3 pl-4 outline-none border hidden border-[#00000052] text-[#000] rounded-full mr-3"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <EditIcon
            className="cursor-pointer ml-5"
            onClick={() => document.getElementById("file").click()}
          />
        </div>
        {imageError && (
          <span className="text-red-500 text-[13px]">{imageError}</span>
        )}

        <div className="mt-3">
          <label className="mb-2 block">Name</label>
          <input
            name="name"
            id="name"
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]`}
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />
          {nameError && (
            <span className="text-red-500 text-[13px]">{nameError}</span>
          )}
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Address</label>
          <input
            name="address"
            id="address"
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]`}
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError("");
            }}
          />
          {addressError && (
            <span className="text-red-500 text-[13px]">{addressError}</span>
          )}
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Location</label>
          <input
            name="location"
            id="location"
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]`}
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setLocationError("");
            }}
          />
          {locationError && (
            <span className="text-red-500 text-[13px]">{locationError}</span>
          )}
        </div>

        <div className="mt-3">
          <label className="mb-2 block">Consulting Time</label>
          <input
            name="consulting_time"
            id="consulting_time"
            className={`w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]`}
            placeholder="Enter Consulting Time"
            value={consultingTime}
            onChange={(e) => {
              setConsultingTime(e.target.value);
              setConsultingTimeError("");
            }}
          />
          {consultingTimeError && (
            <span className="text-red-500 text-[13px]">
              {consultingTimeError}
            </span>
          )}
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

export default EditServiceProfile;
