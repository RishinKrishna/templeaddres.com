import signup_img from "../assets/signup_img.jpg";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/login.module.css";
import { useState } from "react";
import { post } from "../config/axiosConfig";
import router from "next/router";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [FormError, setFormError] = useState({
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
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
    let emailErr = "";
    let phoneErr = "";
    let passwordErr = "";
    let confirmpasswordErr = "";

    if (!formData.name || formData.name == "") {
      nameErr = "Please enter your name ";
    }

    if (!formData.email && formData.email == "") {
      emailErr = "Please enter your email ";
    }

    if (formData.phone == "") {
      phoneErr = "Please enter your phone number";
    } else if (formData.phone.length != 10) {
      phoneErr = "Phone should have 10 digits";
    }

    if (formData.password == "" || formData.password.length < 6) {
      passwordErr = "Please enter your password";
    }
    if (formData.confirmpassword == "" || formData.confirmpassword.length < 6) {
      confirmpasswordErr = "Please re-enter your password";
    }
    if (formData.password !== formData.confirmpassword) {
      confirmpasswordErr = "Passwords do not match";
    }

    if (
      nameErr !== "" ||
      emailErr !== "" ||
      phoneErr !== "" ||
      passwordErr !== "" ||
      confirmpasswordErr !== ""
    ) {
      setFormError({
        ...FormError,
        nameErr,
        emailErr,
        phoneErr,
        passwordErr,
        confirmpasswordErr,
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
      api: "/auth/register",
      data: {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        password: formData.password,
      },
      toastConfig: {
        messages: {
          pending: " Please wait",
          success: "User Registered Successfully",
          error: "Something went wrong",
        },
      },
    }).then((response) => {
      router.push("/login");
    });
  };

  return (
    <section className="flex relative w-full h-[100vh] ">
      <div className="relative w-full h-[20%] md:h-[100vh] hidden md:block">
        <Image
          src={signup_img}
          width={1000}
          height={1000}
          className={`${Styles["img-box"]} absolute top-0 left-0 w-full h-full object-cover`}
        />
      </div>
      <div className={` overflow-auto w-full md:w-[80%]  lg:p-[50px] `}>
        <div className={`${Styles["form-box"]} m-auto `}>
          <h1 className="text-[27px] font-bold text-[#ff6b07] text-center mb-6 lg:mt-0 mt-6">
            TempleAddress
          </h1>
          <h2 className="text-[25px] font-bold text-[#000] text-center mb-4">
            Register
          </h2>
        </div>
        <form action="" className="px-5">
          <div className="mb-3">
            <label className="mb-2 block ">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <span className="text-[red] text-[13px]">{FormError.nameErr}</span>
          </div>
          <div className="mb-3">
            <label className="mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <span className="text-[red] text-[13px]">{FormError.emailErr}</span>
          </div>

          <div className="mb-3">
            <label className="mb-2 block">Mobile Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Phone Number"
              onChange={handleChange}
              value={formData.phone}
            />
            <span className="text-[red] text-[13px]">{FormError.phoneErr}</span>
          </div>
          <div className="mb-3">
            <label className="mb-2 block">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder=" Enter your Password"
              onChange={handleChange}
              value={formData.password}
            />
            <span className="text-[red] text-[13px]">
              {FormError.passwordErr}
            </span>
          </div>

          <div className="mb-3">
            <label className="mb-2 block">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder=" Re-enter Your Password "
              onChange={handleChange}
              value={formData.confirmpassword}
            />
            <span className="text-[red] text-[13px]">
              {FormError.confirmpasswordErr}
            </span>
          </div>
          <div className="mb-1 ">
            <label className="mb-2 block">Referral ID</label>
            <input
              type="text"
              className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
              placeholder="Enter Your Refferal ID"
            />
          </div>
          <div className="font-semibold text-[14px]">
            <label htmlFor="terms-conditions">
              <input
                type="checkbox"
                id="terms-conditions"
                name="terms-conditions"
              />{" "}
              I have read and agree to the Terms & Conditions
            </label>
          </div>

          <div className="mt-5 flex justify-center items-center">
            <button
              type="button"
              className="py-[9px]  font-semibold text-[#fff] px-[150px] bg-[#ff6b07] rounded-[10px]"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className="mt-2 text-center ">
            Already a member?{" "}
            <Link href="/login" className="underline text-blue-500">
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
