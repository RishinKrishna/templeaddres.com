import login_img from "../assets/login_img.jpg";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/login.module.css";
import { useState } from "react";
import { post } from "../config/axiosConfig";
import router from "next/router";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);

    let errorKey = `${[e.target.name]}`;
    setLoginError({
      ...loginError,
      [errorKey]: "",
    });
  };

  const validateForm = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!loginForm.email && loginForm.email == "") {
      emailErr = "Please enter your email ";
    }

    if (loginForm.password == "" || loginForm.password.length < 6) {
      passwordErr = "Please enter your password";
    }

    if (emailErr || passwordErr) {
      setLoginError({
        ...loginError,
        emailErr,
        passwordErr,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) return;
    post({
      api: "/auth/login",
      data: {
        identifier: loginForm.email,
        password: loginForm.password,
      },
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "Login Successful",
          error: "Incorrect email or password",
        },
      },
    }).then((response) => {
      if (response.data.success) {
        router.push("/admin");
      }
    });
  };

  return (
    <section className="flex relative w-full h-[100vh] ">
      <div className="relative w-full h-[20%] md:h-[100vh] hidden md:block">
        <Image
          alt="Login"
          src={login_img}
          width={1000}
          height={1000}
          className={`${Styles["img-box"]} absolute top-0 left-0 w-full h-full object-cover`}
        />
      </div>
      <div
        className={`flex w-full md:w-[80%] h-[100%] bg-[#fff] justify-center items-center `}
      >
        <div className="w-full lg:px-[50px]">
          <div
            className={`${Styles["form-box"]} flex flex-col justify-center items-center m-auto`}
          >
            <h1 className="text-[30px] font-bold text-[#ff6b07] mb-5">
              TempleAddress
            </h1>
            <h2 className="text-[30px] font-bold text-[#000] mb-4 ">Login</h2>
          </div>
          <form action="" className="px-5">
            <div className="mb-5 font-semibold">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-2"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
              <span className="text-[red] text-[13px]">
                {loginError.emailErr}
              </span>
            </div>
            <div className="font-semibold">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-2"
                placeholder=" Enter your password"
                required
                onChange={handleChange}
              />
              <span className="text-[red] text-[13px]">
                {loginError.passwordErr}
              </span>
            </div>
            <div className="mt-1 font-semibold">
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" name="rememberMe" />{" "}
                Remember me
              </label>
            </div>

            <div className="mt-8 flex justify-center items-center">
              <button
                type="submit"
                className="py-[9px] font-semibold text-[#fff] px-[150px] bg-[#ff6b07] rounded-[10px]"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="mt-2 text-center text-blue-500 font-semibold underline">
              <Link href="/signup">Create an Account?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
