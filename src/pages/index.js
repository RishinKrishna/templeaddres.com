import { Navbar, Footer } from "@/Layout";
import styles from "../style";
import { Search, TempleCards, GalaryRow, Events, Articles } from "@/components";
import circular_pattern_img from "../assets/circular_pattern_img.png";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { get } from "@/config/axiosConfig";

const Home = () => {
  const [tempelsServices, setTempelsServices] = useState([]);
  const getTemple = () => {
    get({
      api: "/temples/list",
    }).then((response) => {
      setTempelsServices(response.data.data);
    });
  };

  useEffect(() => {
    getTemple();
  }, []);
  return (
    <main>
      <Navbar />
      <div className={`flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <Search setTempelsServices={setTempelsServices} />
        </div>
      </div>
      <div className={`flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <TempleCards serviceCard={tempelsServices} />
        </div>
      </div>
      <div
        className={`bg-[#fff] flex justify-center items-start sm:px-12 px-6`}
      >
        <div className={`${styles.boxWidth}`}>
          <GalaryRow />
        </div>
      </div>
      <div className="relative">
        <div className={`flex justify-center items-start sm:px-12 px-6`}>
          <div className={`${styles.boxWidth}`}>
            <Events />
          </div>
        </div>
        <Image
          alt="sa"
          src={circular_pattern_img}
          width={320}
          height={320}
          className="left-0 bottom-0 hidden md:block absolute"
        />
      </div>
      <div
        className={`bg-[#fff] flex justify-center items-start sm:px-12 px-6`}
      >
        <div className={`${styles.boxWidth}`}>
          <Articles />
        </div>
      </div>
      <div
        className={`bg-[#270d0d] flex justify-center items-start sm:px-12 px-6`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
