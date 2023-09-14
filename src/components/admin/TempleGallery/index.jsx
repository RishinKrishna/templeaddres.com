import React, { useEffect, useRef } from "react";
import Styles from "@/styles/galaryRow.module.css";
import Image from "next/image";
import gallary_img_01 from '@/assets/gallary_img_01.jpg'
import gallary_img_02 from '@/assets/gallary_img_02.jpg'
import gallary_img_03 from '@/assets/gallary_img_03.jpg'
import gallary_img_04 from '@/assets/gallary_img_04.jpg'

const TempleGallery = () => {
  const containerRef = useRef(null);

  const scrollContainer = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += 1; 

      
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; 
      }
    }
  };

 
  useEffect(() => {
    const scrollInterval = setInterval(scrollContainer, 50); 
    return () => {
      clearInterval(scrollInterval); 
    };
  }, []);

  return (
    <div className="pt-10">
      <h4 className="text-[19px] font-poppins font-semibold py-3">Gallery</h4>
      <div
        ref={containerRef}
        className={`${Styles["galary-row"]} flex pr-5 overflow-x-scroll`}
      >
        <Image
        width={2000}
        height={2000}
          src={gallary_img_01}
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src={gallary_img_02}
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src={gallary_img_03}
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2013/08/19/11/37/thai-temple-173999_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2017/04/18/11/03/traditional-2238582_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2020/03/17/11/29/temple-4939831_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2019/10/27/08/04/temple-4580960_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2018/12/17/08/02/mahadev-3879920_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2021/10/14/03/46/arul-mihu-navasakthi-vinayagar-6708016_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />
        <Image
        width={2000}
        height={2000}
          src="https://cdn.pixabay.com/photo/2013/11/05/17/41/pura-mandara-giri-semeru-agung-205909_1280.jpg"
          alt="Galary"
          className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
        />    
      </div>
    </div>
  );
};

export default TempleGallery;
