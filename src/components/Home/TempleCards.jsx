import Styles from "@/styles/templrCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import NoDataIcon from "@/components/icons/NoDataIcon";
import TemplesIcon from "../icons/TemplesIcon";
import { useRouter } from "next/router";
import Loader from "../Loader";

const TempleCards = ({ serviceCard, selectedOption, query }) => {
  let pathname = useRouter().pathname;
  if (serviceCard && serviceCard.length > 0) {
    return (
      <div className="lg:py-10 md:py-6 mt-10 font-poppins">
        <div
          className={`${Styles["temple_container"]} grid `}
          id="temple-cards"
        >
          {serviceCard
            .slice(0, 6)
            .map(({ id, thumbnail, name, location, description }, index) => {
              return (
                <div
                  key={index}
                  className={`${Styles["services_card"]}  flex flex-col justify-start items-center mb-6`}
                >
                  {thumbnail ? (
                    thumbnail != "" && (
                      <Image
                        width={2000}
                        height={2000}
                        src={thumbnail}
                        alt={name}
                        className="w-full items-center h-[230px] object-cover rounded-[20px]"
                      />
                    )
                  ) : (
                    <div className="w-full h-[230px] flex justify-center items-center  rounded-[20px] border">
                      <TemplesIcon
                        width="200"
                        height="150"
                        className="opacity-50"
                      />
                    </div>
                  )}
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
                  <div className="w-full py-2 border-t-2 border-primary border-opacity-10 mt-5 ">
                    <Link
                      href={`/${selectedOption}/${id}`}
                      className={`block w-full py-2 text-[#ff6b07] font-semibold text-[16px]  hover:bg-primary hover:bg-opacity-10 rounded-[10px]`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {pathname == "/" && serviceCard && serviceCard.length > 6 && (
          <div className="w-full text-center my-4">
            <Link
              href={{
                pathname: `/searchfilter`,
                query: { option: selectedOption, searchQuery: query },
              }}
              className="bg-primary text-white px-5 py-3 rounded-[10px] font-poppins font-semibold"
            >
              View Full Result
            </Link>
          </div>
        )}
      </div>
    );
  }
  return <Loader />;
};

export default TempleCards;
