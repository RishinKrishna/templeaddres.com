import Styles from "../styles/events.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import events_img_01 from "../assets/events_img_01.jpg";
import events_img_02 from "../assets/events_img_02.jpg";
import events_img_03 from "../assets/events_img_03.jpg";

const Events = () => {
  return (
    <section className={`${Styles["event-container"]}  grid py-10`}>
      <h2 className="text-[#ff6b07] font-semibold text-[25px]">
        Latest Events
      </h2>
      <div className="">
        <p className="max-w-[750px] lg:mb-6">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/4 lg:mb-0 mb-6">
            <span className="text-[60px] font-semibold">11</span>
            <div className="">
              <span className="text-[35px] leading-5 font-semibold text-[#66666666]">
                Jan, 2023
              </span>
            </div>
          </div>
          <div className="lg:ml-3 md:ml-0 md:w-1/3 ">
            <Image
              width={2000}
              height={2000}
              src={events_img_01}
              alt=""
              className="lg:w-[270px] w-full h-[150px] object-cover"
            />
          </div>
          <div className="lg:ml-3 flex flex-col justify-center md:w-1/2">
            <h3 className="text-[23px] font-semibold my-2">
              Rameshwaram temple
            </h3>
            <div className="">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="social_icons mr-3 text-[#666666] text-[20px]"
              />
              <span className="text-[14px] font-semibold">
              Jan 11, 2024 13:30-Mar 28, 2024 17:00
              </span>
            </div>
            <p className="mt-2 text-[13px]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
          
        </div>
        <div className="border-t-2 border-gray-400 mt-6"></div>

        <div className="flex flex-col md:flex-row mt-5">
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/4 lg:mb-0 mb-6">
            <span className="text-[60px] font-semibold">16</span>
            <div className="">
              <span className="text-[35px] leading-5 font-semibold text-[#66666666]">
              Sep, 2023
              </span>
            </div>
          </div>
          <div className="lg:ml-3 md:ml-0 md:w-1/3 ">
            <Image
              width={2000}
              height={2000}
              src={events_img_02}
              alt=""
              className="lg:w-[270px] w-full h-[150px] object-cover"
            />
          </div>
          <div className="lg:ml-3 flex flex-col justify-center md:w-1/2">
            <h3 className="text-[23px] font-semibold my-2">
            Budha temple
            </h3>
            <div className="">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="social_icons mr-3 text-[#666666] text-[20px]"
              />
              <span className="text-[14px] font-semibold">
              Sep 16, 2023 13:30-Oct 28, 2023 18:00
              </span>
            </div>
            <p className="mt-2 text-[13px]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
          
        </div>
        <div className="border-t-2 border-gray-400 mt-6"></div>

        <div className="flex flex-col md:flex-row mt-5">
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/4 lg:mb-0 mb-6">
            <span className="text-[60px] font-semibold">24</span>
            <div className="">
              <span className="text-[35px] leading-5 font-semibold text-[#66666666]">
              Oct, 2023
              </span>
            </div>
          </div>
          <div className="lg:ml-3 md:ml-0 md:w-1/3 ">
            <Image
              width={2000}
              height={2000}
              src={events_img_03}
              alt=""
              className="lg:w-[270px] w-full h-[150px] object-cover"
            />
          </div>
          <div className="lg:ml-3 flex flex-col justify-center md:w-1/2">
            <h3 className="text-[23px] font-semibold my-2">
            Ganesha temple
            </h3>
            <div className="">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="social_icons mr-3 text-[#666666] text-[20px]"
              />
              <span className="text-[14px] font-semibold">
              Oct 24, 2023 13:30-Dec 11, 2023 17:00
              </span>
            </div>
            <p className="mt-2 text-[13px]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
          
        </div>
        <div className="border-t-2 border-gray-400 mt-6"></div>
      </div>
    </section>
  );
};

export default Events;
