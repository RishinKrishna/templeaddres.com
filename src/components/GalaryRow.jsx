import React, { useEffect, useRef } from "react";
import Styles from "../styles/galaryRow.module.css";
import Image from "next/image";

const GalaryRow = () => {
  const containerRef = useRef(null);

  // Function to handle automatic scrolling
  const scrollContainer = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 1; // Adjust the scroll speed as needed
    }
  };

  // Automatically scroll the container on mount and set an interval
  useEffect(() => {
    const scrollInterval = setInterval(scrollContainer, 50); // Adjust the interval for scrolling speed
    return () => {
      clearInterval(scrollInterval); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div className="lg:p-10 ">
      <h2 className="text-[#ff6b07] font-semibold text-[25px]" >GALARY</h2>
      <div
        ref={containerRef}
        className={`${Styles["galary-row"]} flex pr-5 overflow-x-scroll cursor-pointer lg-mt-12 mt-6`}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2017/05/28/20/06/hindu-2352118_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2017/04/26/11/15/theyyam-2262364_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/08/19/11/37/thai-temple-173999_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2017/07/31/17/19/hill-2559125_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2017/04/18/11/03/traditional-2238582_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2020/03/17/11/29/temple-4939831_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2019/10/27/08/04/temple-4580960_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2018/12/17/08/02/mahadev-3879920_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2021/10/14/03/46/arul-mihu-navasakthi-vinayagar-6708016_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="h-[250px] mr-7"
        />
        {/* Your gallery images */}
      </div>
    </div>
  );
};

export default GalaryRow;
