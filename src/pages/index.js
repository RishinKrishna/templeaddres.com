import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Navbar, Footer } from "@/Layout";
import styles from "../style";
import { Search, TempleCards, GalaryRow, Events, Articles } from "@/components";
import circular_pattern_img from "../assets/circular_pattern_img.png";
import Image from "next/image";

import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className={`flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <Search />
        </div>
      </div>
      <div className={`flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <TempleCards />
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
        src={circular_pattern_img}
        width={300}
        height={300}
        className="left-0 bottom-0 absolute"
      />
      </div>
      <div className={`bg-[#fff] flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <Articles />
        </div>
      </div>
      <div className={`bg-[#270d0d] flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
