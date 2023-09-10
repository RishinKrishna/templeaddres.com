import signup_img from "../assets/signup_img.jpg";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/login.module.css";
import { useState } from "react";
import axios from "axios";
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

    if (nameErr || emailErr || phoneErr || passwordErr || confirmpasswordErr) {
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
    axios
      .post("auth/register", {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        password: formData.password,
      })
      .then((response) => {
        router.push("/login");
      })
      .catch((error) => {
        
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
      <div
        className={`${Styles[""]} flex w-full md:w-[80%] h-[100%] bg-[#fff] justify-center items-center overfloew-auto`}
      >
        <div className="w-full lg:px-[50px]">
          <div
            className={`${Styles["form-box"]} flex flex-col justify-center items-center m-auto`}
          >
            <h1 className="text-[27px] font-bold text-[#ff6b07]">
              TempleAddress
            </h1>
            <h2 className="text-[25px] font-bold text-[#000]">Register</h2>
          </div>
          <form action="" className="px-5">
            <div className=" font-semibold">
              <span>Name</span>
              <input
                type="name"
                name="name"
                id="name"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <span className="text-[red] text-[13px]">
                {FormError.nameErr}
              </span>
            </div>

            <div className="mb-1 font-semibold">
              <span>Mobile Number</span>
              <input
                type="number"
                name="phone"
                id="phone"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.phone}
              />
              <span className="text-[red] text-[13px]">
                {FormError.phoneErr}
              </span>
            </div>
            <div className="mb-1 font-semibold">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder=" Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
              <span className="text-[red] text-[13px]">
                {FormError.passwordErr}
              </span>
            </div>

            <div className="mb-1 font-semibold">
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder=" Enter your password"
                onChange={handleChange}
                value={formData.confirmpassword}
              />
              <span className="text-[red] text-[13px]">
                {FormError.confirmpasswordErr}
              </span>
            </div>
            <div className="font-semibold">
              <span>Referral ID</span>
              <input
                type="text"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px]"
                placeholder="Full name without special characters"
              />
            </div>
            <div className="mt-1 font-semibold text-[14px]">
              <label htmlFor="">
                <input type="checkbox" required /> I have read and agree to the
                Terms & Conditions
              </label>
            </div>
            <div className="mt-2 flex justify-center items-center">
              <button
                href="/#"
                className="py-[9px] font-semibold text-[#fff] px-[150px] bg-[#ff6b07] rounded-[10px]"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <div className="mt-1 text-center font-semibold ">
              Already a member?{" "}
              <Link href="/login" className="underline text-blue-500">
                {" "}
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
