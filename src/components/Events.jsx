import Styles from "../styles/events.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import events_img_01 from '../assets/events_img_01.jpg'
import events_img_02 from '../assets/events_img_02.jpg'
import events_img_03 from '../assets/events_img_03.jpg'

const Events = () => {
  return (
    <section className={`${Styles["event-container"]}  grid py-10`}>
      <h2 className="text-[#ff6b07] font-semibold text-[25px]">
        Latest Events
      </h2>
      <div className="">
        <p className="max-w-[700px] mb-6">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
        </p>
        <div className="">
        <div className={`${Styles["events-list-container"]}  flex py-7 `} >
          <div className="">
            <h3 className="text-[60px]">11</h3>
            <span className="text-[30px] text-[#666666]">Jan,2023</span>
          </div>
          <Image
          width={2000}
          height={2000}
            src={events_img_01}
            alt=""
            className="w-[550px] h-[150px] object-cover ml-10"
          />
          <div className="ml-5">
            <h3 className="text-[24px] font-semibold">Rameshwaram temple</h3>
            <h5 className="text-[15px] font-semibold text-[#666666] mt-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="social_icons mr-3 text-[#666666] text-[20px]"
            />
              Jan 11, 2024 13:30-Mar 28, 2024 17:00
            </h5>
            <p className="mt-2">
              {" "}
              
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-400"></div>
        <div className={`${Styles["events-list-container"]}  flex py-7 `} >
          <div className="">
            <h3 className="text-[60px]">11</h3>
            <span className="text-[30px] text-[#666666]">Jan,2023</span>
          </div>
          <Image
          width={2000}
          height={2000}
            src={events_img_02}
            alt=""
            className="w-[550px] h-[150px] object-cover ml-10"
          />
          <div className="ml-5">
            <h3 className="text-[24px] font-semibold">Budha temple</h3>
            <h5 className="text-[15px] font-semibold text-[#666666] mt-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="social_icons mr-3 text-[#666666] text-[20px]"
            />
            Sep 16, 2023 13:30-Oct 28, 2023 18:00
            </h5>
            <p className="mt-2">
              {" "}
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-400"></div>
        <div className={`${Styles["events-list-container"]}  flex py-7 `} >
          <div className="">
            <h3 className="text-[60px]">11</h3>
            <span className="text-[30px] text-[#666666]">Jan,2023</span>
          </div>
          <Image
          width={2000}
          height={2000}
            src={events_img_03}
            alt=""
            className="w-[550px] h-[150px] object-cover ml-10"
          />
          <div className="ml-5">
            <h3 className="text-[24px] font-semibold">Budha temple</h3>
            <h5 className="text-[15px] font-semibold text-[#666666] mt-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="social_icons mr-3 text-[#666666] text-[20px]"
            />
            Sep 16, 2023 13:30-Oct 28, 2023 18:00
            </h5>
            <p className="mt-2">
              {" "}
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-400"></div>
        </div>
      </div>
    </section>
  );
};
{
  `${Styles["temple_container"]} grid lg:py-10 md:py-6 `;
}

export default Events;
