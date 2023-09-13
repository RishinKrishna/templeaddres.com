import Styles from "../styles/templrCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import templeCard_01 from "../assets/templeCard_01.jpg";
import templeCard_02 from "../assets/templeCard_02.jpg";
import templeCard_03 from "../assets/templeCard_03.jpg";
import templeCard_04 from "../assets/templeCard_04.jpg";
import templeCard_05 from "../assets/templeCard_05.jpg";
import templeCard_06 from "../assets/templeCard_06.jpg";

export const serviceCard = [
  {
    id: 1,
    image: templeCard_01,
    title: "Sree Padmanabhaswamy Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 2,
    image: templeCard_02,
    title: "Guruvayur temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 3,
    image: templeCard_03,
    title: "Isha Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 4,
    image: templeCard_04,
    title: "Murudeshwar temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 5,
    image: templeCard_05,
    title: "Thanchavoor temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 6,
    image: templeCard_06,
    title: "Pazhani Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
];

const TempleCards = ({ serviceCard }) => {
  return (
    <div
      className={`${Styles["temple_container"]} grid lg:py-10 md:py-6 mt-10`}
    >
      {serviceCard.length > 0 ? (
        serviceCard.map(
          ({ id, thumbnail, name, location, description }, index) => {
            return (
              <div
                key={index}
                className={`${Styles["services_card"]} ${Styles[id]} flex flex-col justify-start items-center mb-6`}
              >
                <Image
                  width={2000}
                  height={2000}
                  src={thumbnail}
                  alt=""
                  className="w-full items-center h-[230px] object-cover rounded-[20px]"
                />
                <h3
                  className={`${Styles["services_title"]} text-[22px] mt-4 font-semibold text-[#141824] `}
                >
                  {name}
                </h3>
                <span
                  className={`text-[15px] font-semibold text-[#666666] mt-2`}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="social_icons mr-3 text-[#666666] text-[16px]"
                  />
                  {location}
                </span>
                <p className="services_description text-[15px] mt-3 ">
                  {description}
                </p>

                <Link
                  href=""
                  className={`text-[#ff6b07] font-semibold text-[16px] mt-5`}
                >
                  view more
                </Link>
              </div>
            );
          }
        )
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default TempleCards;
