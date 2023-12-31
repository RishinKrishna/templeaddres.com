import Layout from "@/Layout/admin";
import EditIcon from "@/components/icons/EditIcon";
import { useState } from "react";
import { post } from "@/config/axiosConfig";



const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};


const AddServies = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);


  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
    address: "",
    bookingAvailable: "",
    email: "",
    service: "",
    location: "",
    consultingTime: "",
    serviceAreas: "",
    phone: "",
    termsConditions: "",
  });

  const [FormError, setFormError] = useState({
    imageErr: "",
    nameErr: "",
    descriptionErr: "",
    addressErr: "",
    bookingAvailableErr: "",
    emailErr: "",
    serviceErr: "",
    locationErr: "",
    consultingTimeErr: "",
    serviceAreasErr: "",
    phoneErr: "",
    termsConditionsErr: "",
  });
  const formDataToSend = convertToFormData(formData);
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    if (type === "checkbox") {
      setIsTermsChecked(checked);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      let errorKey = `${name}Err`;
      setFormError({
        ...FormError,
        [errorKey]: "",
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let imageErr = "";
    let nameErr = "";
    let descriptionErr = "";
    let addressErr = "";
    let bookingAvailableErr = "";
    let emailErr = "";
    let serviceErr = "";
    let locationErr = "";
    let consultingTimeErr = "";
    let serviceAreasErr = "";
    let phoneErr = "";
    let termsConditionsErr = "";

    if (!formData.image) {
      imageErr = "Please select an image";
    }

    if (!formData.name || formData.name === "") {
      nameErr = "Please enter your name ";
    }
    if (formData.description === "") {
      descriptionErr = "Please enter your description";
    }
    if (formData.address === "") {
      addressErr = "Please enter your Address";
    }
    if (formData.bookingAvailable === "") {
      bookingAvailableErr = "Please enter your Booking Available";
    }
    if (!isValidEmail(formData.email)) {
      emailErr = "Please enter a valid email address";
    }
    if (formData.service === "") {
      serviceErr = "Please enter your service";
    }
    if (formData.location === "") {
      locationErr = "Please enter your location";
    }
    if (formData.consultingTime === "") {
      consultingTimeErr = "Please enter your consulting Time";
    }
    if (formData.serviceAreas === "") {
      serviceAreasErr = "Please enter your service Areas ";
    }

    if (formData.phone === "") {
      phoneErr = "Please enter your phone number";
    } else if (formData.phone.length !== 10) {
      phoneErr = "Phone should have 10 digits";
    }
    if (!formData.termsConditions) {
      termsConditionsErr = "Please agree to the Terms & Conditions";
    }

    if (
      imageErr !== "" ||
      nameErr !== "" ||
      descriptionErr !== "" ||
      addressErr !== "" ||
      bookingAvailableErr !== "" ||
      emailErr !== "" ||
      serviceErr !== "" ||
      locationErr !== "" ||
      consultingTimeErr !== "" ||
      serviceAreasErr !== "" ||
      phoneErr !== "" ||
      !isTermsChecked
    ) {
      setFormError({
        ...FormError,
        imageErr,
        nameErr,
        descriptionErr,
        addressErr,
        bookingAvailableErr,
        emailErr,
        serviceErr,
        locationErr,
        consultingTimeErr,
        serviceAreasErr,
        phoneErr,
        termsConditionsErr,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
  
    const requestData = {
      name: formData.name,
      description: formData.description,
      address: formData.address,
      booking_available: formData.bookingAvailable,
      email: formData.email,
      service: formData.service,
      location: formData.location,
      consultingTime: formData.consultingTime,
      serviceAreas: formData.serviceAreas,
      contact_number: formData.phone,
    };
  
    const formDataToSend = convertToFormData(requestData);
  
    post({
      api: "/service/add",
      data: formDataToSend, 
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "You have successfully added a new service",
          error: "Something went wrong",
        },
      },
    }).then((response) => {
     
    });
  };
  
  return (
    <div className="bg-white rounded-[20px]">
      <h3 className="text-[20px] font-semibold mb-3 pl-6 pt-3">
        Add New Servies
      </h3>
      <div className="border-b-2 border-gray-100 " />
      <div className="w-full bg-white lg:p-6 grid lg:grid-cols-2 md:grig-cols-1 gap-6 mt-3 p-6">
        <div className="w-full">
          <div className="text-center">
            {/* <label className="mb-2 block text-center">Temple Image</label> */}
            <div className="flex justify-center items-end">
              <div className="flex justify-center items-center w-[40%] h-[120px] object-cover  border-2 border-[#FF6B07] rounded-lg">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-[120px] p-1  object-cover rounded-lg"
                  />
                )}

                <div className="flex items-center">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="py-3 pl-4 outline-none border hidden border-[#00000052] text-[#000] rounded-full mr-3"
                  />
                </div>
              </div>
              <EditIcon
                className="cursor-pointer ml-5"
                onClick={() => document.getElementById("image").click()}
              />
            </div>
            <span className="text-red-500 text-[13px]">
              {FormError.imageErr}
            </span>
          </div>

          <form action="" className="">
            <div className="mt-3">
              <label className="mb-2 block ">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
              <span className="text-red-500 text-[13px]">
                {FormError.nameErr}
              </span>
            </div>
            <div className="mt-3">
              <label className="mb-2 block ">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter Your Description"
                onChange={handleChange}
              />
              <span className="text-red-500 text-[13px]">
                {FormError.descriptionErr}
              </span>
            </div>
            <div className="mt-3">
              <label className="mb-2 block ">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter Your Address"
                onChange={handleChange}
              />
              <span className="text-red-500 text-[13px]">
                {FormError.addressErr}
              </span>
            </div>
            <div className="mt-3">
              <label className="mb-2 block">Booking Available</label>
              <select
                name="bookingAvailable"
                id="bookingAvailable"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                onChange={handleChange}
              >
                <option value="">-- Select Booking Availability --</option>
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
              </select>
              <span className="text-red-500 text-[13px]">
                {FormError.bookingAvailableErr}
              </span>
            </div>

            <div className="mt-3">
              <label className="mb-2 block ">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
              <span className="text-red-500 text-[13px]">
                {FormError.emailErr}
              </span>
            </div>
          </form>
        </div>

        <div className="w-full">
          <div className="">
            <label className="mb-2 block ">Service</label>
            <input
              type="text"
              name="service"
              id="service"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Service"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.serviceErr}
            </span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Location"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.locationErr}
            </span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Consulting Time</label>
            <input
              type="text"
              name="consultingTime"
              id="consultingTime"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Consulting Time"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.consultingTimeErr}
            </span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Service Areas</label>
            <input
              type="text"
              name="serviceAreas"
              id="serviceAreas"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.serviceAreasErr}
            </span>
          </div>
          <div className="mt-3">
            <label className="mb-2 block ">Contact Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.phoneErr}
            </span>
          </div>
          <div className="mt-2 text-[14px]">
            <label htmlFor="terms-conditions">
              <input
                type="checkbox"
                id="termsConditions"
                name="termsConditions"
                checked={isTermsChecked}
                onChange={handleChange}
              />
              I Agree With Terms & Conditions of Service
            </label>
            <br />
            <span className="text-red-500 text-[13px]">
              {FormError.termsConditionsErr}
            </span>
          </div>
          <div className="flex justify-end items-center mt-8">
            <button
              type="button"
              className="py-[9px]  font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px] ml-auto"
              onClick={handleSubmit}
            >
              Add Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddServies.getLayout = (page) => <Layout>{page}</Layout>;

export default AddServies;
