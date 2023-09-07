import Styles from "../styles/articles.module.css";
import Image from "next/image";
import Link from "next/link";

export const serviceCard = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2013/08/19/11/37/thai-temple-173999_1280.jpg",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2017/04/26/11/15/theyyam-2262364_1280.jpg",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2021/06/04/05/45/god-6308823_1280.jpg",
  },
];
const Articles = () => {
  return (
    <>
    <h2 className="text-[#ff6b07] font-semibold text-[25px] ml-4 lg:mt-10 mt-5" >Latest Articles</h2>
    <div className={`${Styles["articles_container"]} grid mt-3 lg:pb-[100px] pb-10`}>
      
      {serviceCard.map(({ id, image },index) => {
        
        return (
          <div
          key={index}
            className={`${Styles["articles_images"]} ${Styles[id]} flex flex-col justify-start items-center mb-6`}
          >
            <Image
              src={image}
              width={1000}
              height={1000}
              alt="Articles"
              className="w-full items-center h-[280px] object-cover"
            />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Articles;
