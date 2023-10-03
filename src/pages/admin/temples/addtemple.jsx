import Layout from "@/Layout/admin";
import EditIcon from "@/components/icons/EditIcon";
import { useState } from "react";
import { post } from "@/config/axiosConfig";


const Addtemple = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    deity: "",
    address: "",
    location: "",
    associationPersonNumber: "",
    subTitle: "",
    deity2: "",
    landmark: "",
    associatedPersonName: "",
    termsConditions: "",
  });

  const [FormError, setFormError] = useState({
    imageErr: "",
    nameErr: "",
    deityErr: "",
    addressErr: "",
    locationErr: "",
    associationPersonNumberErr: "",
    subTitleErr: "",
    deity2Err: "",
    landmarkErr: "",
    associatedPersonNameErr: "",
    termsConditionsErr: "",
  });

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
    } else if (name === "image" && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0], // handle image file
      });
      setFormError({
        ...FormError,
        imageErr: "", // clear image error on change
      });
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

  const validateForm = () => {
    let imageErr = "";
    let nameErr = "";
    let deityErr = "";
    let addressErr = "";
    let locationErr = "";
    let associationPersonNumberErr = "";
    let subTitleErr = "";
    let deity2Err = "";
    let landmarkErr = "";
    let associatedPersonNameErr = "";
    let termsConditionsErr = "";

    if (!formData.image) {
      imageErr = "Please select an image";
    }

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

    if (formData.deity2 === "") {
      deity2Err = "Please enter your second deity";
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
      imageErr !== "" ||
      nameErr !== "" ||
      deityErr !== "" ||
      addressErr !== "" ||
      locationErr !== "" ||
      associationPersonNumberErr !== "" ||
      subTitleErr !== "" ||
      deity2Err !== "" ||
      landmarkErr !== "" ||
      associatedPersonNameErr !== "" ||
      !isTermsChecked
    ) {
      setFormError({
        ...FormError,
        imageErr,
        nameErr,
        deityErr,
        addressErr,
        locationErr,
        associationPersonNumberErr,
        subTitleErr,
        deity2Err,
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

    post({
      api: "/temples/add",
      data: {
        name: formData.name,
        deity: formData.deity,
        address: formData.address,
        location: formData.location,
        created_contact_num: formData.associationPersonNumber,
        created_person_name: formData.associatedPersonName,
      },
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "You have successfully added a new temple",
          error: "Something went wrong",
        },
      },
    }).then((response) => {
      window.location.reload();
    });
  };

  return (
    <div className="bg-white rounded-[20px]">
      <h3 className="text-[20px] font-semibold mb-3 pl-6 pt-3">
        Add New Temple
      </h3>
      <div className="border-b-2 border-gray-100 " />
      <div className="w-full grid lg:grid-cols-2 md:grig-cols-1 gap-6 mt-3 p-6">
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
              Add Temple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Addtemple.getLayout = (page) => <Layout>{page}</Layout>;
export default Addtemple;
