import styles from "../style";
import circular_pattern_img from "../assets/circular_pattern_img.png";
import Image from "next/image";
import Styles from "@/styles/navbar.module.css";
import React, { useEffect, useState } from "react";
import { get } from "@/config/axiosConfig";
import Search from "@/components/Home/Search";
import TempleCards from "@/components/Home/TempleCards";
import GalaryRow from "@/components/Home/GalaryRow";
import Events from "@/components/Home/Events";
import Articles from "@/components/Home/Articles";
import Navbar from "@/Layout/Navbar";
import Footer from "@/Layout/Footer";
import { modal } from "@/components/Modal";

const Home = () => {
  const [tempelsServices, setTempelsServices] = useState([]);
  const [selectedOption, setSelectedOption] = useState("temples");

  const getTemple = () => {
    get({
      api: "/temples/list",
    }).then((response) => {
      setTempelsServices(response.data.data);
    });
  };

  useEffect(() => {
    getTemple();

    modal({
      show: true,
      containerClassName: "bg-secondory-black max-w-[500px]",
      header: {
        heading: "Add New Input",
      },
      component: () => <div>asdas</div>, // <ComponentName/>
    });
  }, []);
  return (
    <main>
      <Navbar containerClassName="text-white" />
      <section className={`${Styles["banner"]}`}></section>
      <div className={`flex justify-center items-start sm:px-12 px-6`}>
        <div className={`${styles.boxWidth}`}>
          <Search
            setTempelsServices={setTempelsServices}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className={`flex justify-center items-start sm:px-12 px-12`}>
        <div className={`${styles.boxWidth}`}>
          <TempleCards
            serviceCard={tempelsServices}
            selectedOption={selectedOption}
          />
        </div>
      </div>
      <div
        className={`bg-[#fff] flex justify-center items-start sm:px-12 px-6`}
      >
        <div className={`${styles.boxWidth}`}>
          <div className="lg:p-10">
            <h2 className="text-[#ff6b07] font-semibold text-[25px]">GALARY</h2>
            <GalaryRow gallery={[]} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className={`flex justify-center items-start sm:px-12 px-6`}>
          <div className={`${styles.boxWidth}`}>
            <Events />
          </div>
        </div>
        <Image
          alt=""
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

      <Footer />
    </main>
  );
};

export default Home;
