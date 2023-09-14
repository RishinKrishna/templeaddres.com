import Styles from "@/styles/templrCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import NoDataIcon from "@/components/icons/NoDataIcon";

const TempleCards = ({ serviceCard }) => {
  if (serviceCard && serviceCard.length > 0) {
    return (
      <div className="lg:py-10 md:py-6 mt-10 font-poppins">
        <div className={`${Styles["temple_container"]} grid `}>
          {serviceCard
            .slice(0, 6)
            .map(
              (
                { temple_id, thumbnail, name, location, description },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className={`${Styles["services_card"]}  flex flex-col justify-start items-center mb-6`}
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
                      href={`/temples/${temple_id}`}
                      className={`text-[#ff6b07] font-semibold text-[16px] mt-5`}
                    >
                      View Details
                    </Link>
                  </div>
                );
              }
            )}
        </div>

        {serviceCard && serviceCard.length > 0 && (
          <div className="w-full text-center my-4">
            <Link
              href=""
              className="bg-primary text-white px-5 py-3 rounded-[10px] font-poppins font-semibold"
            >
              View Full Result
            </Link>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="w-full h-[50vh] flex justify-center items-center flex-col">
      <NoDataIcon width="100" fill="#666666" className="opacity-50" />
      <h1 className="text-3xl mt-4 font-bold text-[#666666] opacity-50">
        No Data Found
      </h1>
    </div>
  );
};

export default TempleCards;
