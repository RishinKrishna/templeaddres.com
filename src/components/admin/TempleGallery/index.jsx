import React, { useEffect, useRef, useState } from "react";
import Styles from "@/styles/galaryRow.module.css";
import Image from "next/image";
import { get } from "@/config/axiosConfig";
const TempleGallery = () => {
  const containerRef = useRef(null);
  const [galleryData, setGalleryData] = useState({});

  const fetchGalleryData = () => {
    get({ api: `/temples/gallery-view/1/${id}` }).then((response) => {
      if (response.data.success) {
        setGalleryData(response.data.data);
      }
    });
  };
  useEffect(() => {
    fetchGalleryData();
  }, []);

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
    <div className="pt-10">
      <h4 className="text-[19px] font-poppins font-semibold py-3">Gallery</h4>
      <div
        ref={containerRef}
        className={`${Styles["galary-row"]} flex pr-5 overflow-x-scroll`}
      >
        {galleryData.map((image, index) => (
          <Image
            key={index}
            width={2000}
            height={2000}
            src={image.url}
            alt="Gallery"
            className="w-[220px] h-[220px] rounded-[20px] mr-7 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default TempleGallery;
