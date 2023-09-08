import Styles from "../styles/articles.module.css";
import Image from "next/image";
import Link from "next/link";
import articles_img_01 from '../assets/articles_img_01.jpg'
import articles_img_02 from '../assets/articles_img_02.jpg'
import articles_img_03 from '../assets/articles_img_03.jpg'

export const serviceCard = [
  {
    id: 1,
    image:
    articles_img_01,
      description:
      "Kerala's Padmanabhaswamy Temple to Open for Devotees from August 26, Covid Protocol to Be Followed",
  },
  {
    id: 2,
    image:
    articles_img_02,
      description:
      "Ensure children aren't part of temple ritual Thee Chamundi Theyyam",
  },
  {
    id: 3,
    image:
    articles_img_03,
      description:
      "Supreme Court refuses early hearing in Sabarimala temple case",
  },
];
const Articles = () => {
  return (
    <>
    <h2 className="text-[#ff6b07] font-semibold text-[25px] ml-4 lg:mt-10 mt-5" >Latest Articles</h2>
    <div className={`${Styles["articles_container"]} grid mt-3 lg:pb-[100px] pb-10`}>
      
      {serviceCard.map(({ id, image, description },index) => {
        
        return (
          <div
          key={index}
            className={`${Styles["articles_images"]} ${Styles[id]} flex flex-col justify-start items-end mb-6`}
          >
            <Image
              src={image}
              width={1000}
              height={1000}
              alt="Articles"
              className="w-full items-center h-[280px] object-cover"
            />
            <p className="services_description text-[15px] mt-3 lg:pb-7 px-2 font-semibold ">
              {description}
            </p>
            <Link href="" className="font-semibold px-6 pb-5 text-[#ff6b07] items-end">view more</Link>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Articles;
