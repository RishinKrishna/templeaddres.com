import signup_img from "../assets/signup_img.jpg";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/login.module.css";

const signup = () => {
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
        className={`${Styles[""]} flex w-full md:w-[80%] h-[100%] bg-[#fff] justify-center items-center `}
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
            <div className="mb-2 font-semibold">
              <span>Name</span>
              <input
                type="text"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2 font-semibold">
              <span>Mobile Number</span>
              <input
                type="number"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2 font-semibold">
              <span>Password</span>
              <input
                type="password"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-1"
                placeholder=" Enter your password"
              />
            </div>
            <div className="mb-2 font-semibold">
              <span>Confirm Password</span>
              <input
                type="password"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-1"
                placeholder=" Enter your password"
              />
            </div>
            <div className="font-semibold">
              <span>Referral ID</span>
              <input
                type="text"
                className="w-full py-3 pl-4 outline-none border border-[#00000052] text-[#000] rounded-[6px] mt-1"
                placeholder="Full name without special characters"
              />
            </div>
            <div className="mt-3 font-semibold text-[14px]">
              <label htmlFor="">
                <input type="checkbox" /> I have read and agree to the Terms &
                Conditions
              </label>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <Link
                href="/#"
                className="py-[9px] font-semibold text-[#fff] px-[150px] bg-[#ff6b07] rounded-[10px]"
              >
                Register
              </Link>
            </div>
            <div className="mt-1 text-center font-semibold ">
            Already a member? <Link href="/login" className="underline text-blue-500">&nbsp;Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default signup;
