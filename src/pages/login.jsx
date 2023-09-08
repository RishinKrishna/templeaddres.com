import login_img from "../assets/login_img.jpg";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/login.module.css";

const login = () => {
  return (
    <section className="flex relative w-full h-[100vh] ">
      <div className="relative w-full h-[20%] md:h-[100vh] hidden md:block">
        <Image
          src={login_img}
          width={1000}
          height={1000}
          className={`${Styles["img-box"]} absolute top-0 left-0 w-full h-full object-cover`}
        />
      </div>
      <div
        className={`${Styles[""]} flex w-full md:w-[80%] h-[100%] justify-center items-center `}
      >
        <div className="w-full lg:px-[50px]">
          <div className={`${Styles["form-box"]} flex flex-col justify-center items-center m-auto`}>
            <h1 className="text-[30px] font-bold text-[#ff6b07] mb-10">
              TempleAddress
            </h1>
            <h2 className="text-[30px] font-bold text-[#000] mb-10 ">Login</h2>
          </div>
          <form action="" className="px-5" >
            <div className="mb-5 font-semibold">
              <span>Username</span>
              <input
                type="text"
                className="w-full py-3 pl-4 outline-none border-[#000] text-[#000] rounded-[6px] mt-2"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="font-semibold">
              <span>Password</span>
              <input
                type="password"
                className="w-full py-3 pl-4 outline-none border-[#000] text-[#000] rounded-[6px] mt-2"
                placeholder=" Enter your password"
              />
            </div>
            <div className="mt-5 font-semibold">
              <label htmlFor="">
                <input type="checkbox" />
                {" "}Remember me
              </label>
            </div>
            <div className="mt-10 flex justify-center items-center">
              <Link
                href="/login"
                className="py-[7px] font-semibold text-[#fff] px-[150px] bg-[#ff6b07] rounded-[10px]"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default login;
