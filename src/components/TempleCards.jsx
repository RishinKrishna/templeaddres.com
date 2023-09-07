import Styles from "../styles/templrCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const serviceCard = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2021/06/04/05/45/god-6308823_1280.jpg",
    title: "Sree Padmanabhaswamy Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 2,
    image:
      "https://cdn.siasat.com/wp-content/uploads/2021/04/Guruvayoor-temple-Kerala-1024x768.jpg",
    title: "Guruvayur temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2017/04/18/11/03/traditional-2238582_1280.jpg",
    title: "Isha Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2020/03/17/11/29/temple-4939831_1280.jpg",
    title: "Isha Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg",
    title: "Isha Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2021/10/14/03/46/arul-mihu-navasakthi-vinayagar-6708016_1280.jpg",
    title: "Isha Temple",
    location: "India, Kerala",
    description:
      "The Sree Padmanabhaswamy Temple, situated in Thiruvananthapuram, the capital city of Kerala, India, is a remarkable testament to both architectural splendor and profound spirituality.",
  },
];

const TempleCards = () => {
  return (
    <div className={`${Styles["temple_container"]} grid lg:py-10 md:py-6 `}>
      {serviceCard.map(({ id, image, title, location, description }) => {
        return (
          <div
            className={`${Styles["services_card"]} ${Styles[id]} flex flex-col justify-start items-center mb-6`}
          >
            <img src={image} alt="" className="w-full items-center h-[230px] object-cover rounded-[20px]" />
            <h3
              className={`${Styles["services_title"]} text-[22px] mt-4 font-semibold text-[#141824] hover:text-[#ff6b07] `}
            >
              {title}
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

            <p className={`text-[#ff6b07] text-[18px] mt-5`}>view more</p>
          </div>
        );
      })}
    </div>
  );
};

export default TempleCards;
