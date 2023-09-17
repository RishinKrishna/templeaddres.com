import Layout from "@/Layout/admin";
import EditIcon from "@/components/icons/EditIcon";
import { useState } from "react";

const AddTemple = () => {
  const [formData, setFormData] = useState({
    name: "",
    deity: "",
    address: "",
    location: "",
    associationPersonNumber: "",
    subTitle: "",
    landmark: "",
    associatedPersonName: "",
    termsConditions: "",
  });

  const [FormError, setFormError] = useState({
    nameErr: "",
    deityErr: "",
    addressErr: "",
    locationErr: "",
    associationPersonNumberErr: "",
    subTitleErr: "",
    landmarkErr: "",
    associatedPersonNameErr: "",
    termsConditionsErr: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    let errorKey = `${[e.target.name]}Err`;
    setFormError({
      ...FormError,
      [errorKey]: "",
    });
  };

  const validateForm = () => {
    let nameErr = "";
    let deityErr = "";
    let addressErr = "";
    let locationErr = "";
    let associationPersonNumberErr = "";
    let subTitleErr = "";
    let landmarkErr = "";
    let associatedPersonNameErr = "";
    let termsConditionsErr = "";

    if (!formData.name || formData.name == "") {
      nameErr = "Please enter your name ";
    }
    if (formData.deity === "") {
      deityErr = "Please enter your deity";
    }
    if (formData.address === "") {
      addressErr = "Please enter your sddress with pin code";
    }
    if (formData.location === "") {
      locationErr = "Please enter your location";
    }

    if (formData.associationPersonNumber === "") {
      associationPersonNumberErr =
        "Please enter your association person number";
    } else if (formData.associationPersonNumber.length !== 10) {
      associationPersonNumberErr = "Phone should have 10 digits";
    }

    if (formData.subTitle === "") {
      subTitleErr = "Please enter your sub title";
    }

    
    if (formData.landmark === "") {
      landmarkErr = "Please enter your landmark";
    }

    if (
      !formData.associatedPersonName ||
      formData.associatedPersonName === ""
    ) {
      associatedPersonNameErr = "Please enter your associated person name";
    }
    if (!formData.termsConditions) {
      termsConditionsErr = "Please agree to the Terms & Conditions";
    }

   

    if (
      nameErr !== "" ||
      deityErr !== "" ||
      addressErr !== "" ||
      locationErr !== "" ||
      associationPersonNumberErr !== "" ||
      subTitleErr !== "" ||
      deity2Err !== "" ||
      landmarkErr !== "" ||
      associatedPersonNameErr !== "" || 
      termsConditionsErr !== ""
    ) {
      setFormError({
        ...FormError,
        nameErr,
        deityErr,
        addressErr,
        locationErr,
        associationPersonNumberErr,
        subTitleErr,
        landmarkErr,
        associatedPersonNameErr,
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

    // post({ api: ""})
  };

  return (
    <div className="w-full bg-white lg:p-6 grid lg:grid-cols-2 md:grig-cols-1 gap-6 rounded-[20px]">
      <div className="w-full">
        <div className="flex justify-start items-center">
          <div className="w-[82px] h-[82px] bg-green-200 rounded-full border-2 border-[#FF6B07]"></div>
          <div className="ml-8">
            <EditIcon />
          </div>
        </div>

        <div action="" className="">
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
            <label className="mb-2 block ">Deity</label>
            <input
              type="text"
              name="deity"
              id="deity"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Deity"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.deityErr}
            </span>
          </div>
          <div className="mt-3">
          <label className="mb-2 block ">Deity 2</label>
          <input
            type="text"
            name="deity2"
            id="deity2"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Second Deity"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">
            {FormError.deity2Err}
          </span>
        </div>
          <div className="mt-3">
            <label className="mb-2 block ">Address with Pin code</label>
            <input
              type="text"
              name="address"
              id="address"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Address with Pin code"
              onChange={handleChange}
            />
            <span className="text-red-500 text-[13px]">
              {FormError.addressErr}
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
          
        </div>
      </div>

      <div className="w-full">
      <div className="">
            <label className="mb-2 block ">Association Person Number</label>
            <input
              type="number"
              name="associationPersonNumber"
              id="associationPersonNumber"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Association Person Number"
              onChange={handleChange}
            />

            <span className="text-red-500 text-[13px]">
              {FormError.associationPersonNumberErr}
            </span>
          </div>
        <div className="mt-3">
          <label className="mb-2 block ">Sub Title</label>
          <input
            type="text"
            name="subTitle"
            id="subTitle"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Sub Title"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">
            {FormError.subTitleErr}
          </span>
        </div>
        
        <div className="mt-3">
          <label className="mb-2 block ">Landmark</label>
          <input
            type="text"
            name="landmark"
            id="landmark"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Landmark"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">
            {FormError.landmarkErr}
          </span>
        </div>
        <div className="mt-3">
          <label className="mb-2 block ">Associated Person Name</label>
          <input
            type="text"
            name="associatedPersonName"
            id="associatedPersonName"
            className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
            placeholder="Enter Your Associated Person Name"
            onChange={handleChange}
          />
          <span className="text-red-500 text-[13px]">
            {FormError.associatedPersonNameErr}
          </span>
        </div>
        <div className="mt-2 text-[14px]">
          <label htmlFor="terms-conditions">
            <input
              type="checkbox"
              id="termsConditions"
              name="termsConditions"
              onChange={handleChange}
            />{" "}
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
  );
};
AddTemple.getLayout = (page) => <Layout>{page}</Layout>;
export default AddTemple;
