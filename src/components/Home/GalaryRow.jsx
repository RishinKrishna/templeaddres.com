import React, { useEffect, useRef } from "react";
import Styles from "@/styles/galaryRow.module.css";
import Image from "next/image";
import gallary_img_01 from "@/assets/gallary_img_01.jpg";
import gallary_img_02 from "@/assets/gallary_img_02.jpg";
import gallary_img_03 from "@/assets/gallary_img_03.jpg";
import gallary_img_04 from "@/assets/gallary_img_04.jpg";

const GalaryRow = ({ gallery = [] }) => {
  const containerRef = useRef(null);

  const scrollContainer = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += 1;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
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
    <div
      ref={containerRef}
      className={`${Styles["galary-row"]} flex pr-5 overflow-x-scroll lg-mt-12 mt-6`}
    >
      {gallery.map((src, index) => (
        <Image
          key={index}
          width={2000}
          height={2000}
          src={src}
          alt="Galary"
          className="h-[250px] mr-7"
        />
      ))}
    </div>
  );
};

export default GalaryRow;
