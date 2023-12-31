import React, { useState } from "react";
import { post } from "@/config/axiosConfig";

const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

const AddPoojaList = ({ id }) => {
  const [formData, setFormData] = useState({
    poojaCode: "",
    poojaName: "",
    poojaDescription: "",
    price: "",
    remark: "",
    type: "",
  });

  const [formErrors, setFormErrors] = useState({
    poojaCodeError: "",
    poojaNameError: "",
    poojaDescriptionError: "",
    priceError: "",
    remarkError: "",
    typeError: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [`${e.target.name}Error`]: "",
    });
  };

  const validateForm = () => {
    const errors = {
      poojaCodeError: "",
      poojaNameError: "",
      poojaDescriptionError: "",
      priceError: "",
      remarkError: "",
      typeError: "",
    };

    if (!formData.poojaCode || formData.poojaCode.trim() === "") {
      errors.poojaCodeError = "Please enter Pooja Code";
    }

    if (!formData.poojaName || formData.poojaName.trim() === "") {
      errors.poojaNameError = "Please enter Pooja Name";
    }

    if (!formData.poojaDescription || formData.poojaDescription.trim() === "") {
      errors.poojaDescriptionError = "Please enter Pooja Description";
    }

    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      errors.priceError = "Please enter a valid Price";
    }

    if (!formData.remark || formData.remark.trim() === "") {
      errors.remarkError = "Please enter Remark";
    }

    if (!formData.type || formData.type.trim() === "") {
      errors.typeError = "Please enter Type";
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      post({
        api: `/temple/pooja/add/${id}`,
        data: {
          pooja_name: formData.poojaName,
          pooja_code: formData.poojaCode,
          pooja_desc: formData.poojaDescription,
          remarks: formData.remark,
          types: formData.type,
          price: formData.price,
        },
        toastConfig: {
          messages: {
            pending: "Please wait",
            success: "Your Pooja List Successfully Added",
            error: "Something went wrong",
          },
        },
      }).then((response) => {});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Code</label>
          <input
            type="text"
            name="poojaCode"
            id="poojaCode"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Code"
            value={formData.poojaCode}
            onChange={(e) =>
              setFormData({ ...formData, poojaCode: e.target.value })
            }
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.poojaCodeError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Name</label>
          <input
            type="text"
            name="poojaName"
            id="poojaName"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Name"
            value={formData.poojaName}
            onChange={(e) =>
              setFormData({ ...formData, poojaName: e.target.value })
            }
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.poojaNameError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Pooja Description</label>
          <input
            type="text"
            name="poojaDescription"
            id="poojaDescription"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Pooja Description"
            value={formData.poojaDescription}
            onChange={(e) =>
              setFormData({ ...formData, poojaDescription: e.target.value })
            }
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.poojaDescriptionError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.priceError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Remark</label>
          <input
            type="text"
            name="remark"
            id="remark"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Remark"
            value={formData.remark}
            onChange={(e) =>
              setFormData({ ...formData, remark: e.target.value })
            }
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.remarkError}
          </span>
        </div>
        <div className="mb-3">
          <label className="mb-2 block">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            className="w-full py-2 pl-3 outline-none border border-[#00000052] text-secondary-gray bg-white bg-opacity-10 rounded-[6px]"
            placeholder="Enter Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          />
          <span className="text-red-500 text-[13px]">
            {formErrors.typeError}
          </span>
        </div>
        <div className="flex justify-end items-center mt-8">
          <button
            type="submit"
            className="py-[9px] font-semibold text-[#fff] px-[50px] bg-[#ff6b07] rounded-[10px]"
          >
            Add Pooja List
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPoojaList;
