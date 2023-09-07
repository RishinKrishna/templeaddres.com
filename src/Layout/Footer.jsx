import Styles from "../styles/footer.module.css";
import { footerLinks } from "@/constants";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <section className={`${Styles[""]} flex justify-center items-center sm:py-12 py-6 flex-col`}     >
    <div className={`${Styles[""]} flex justify-center items-start md:flex-row flex-col mb-8 w-full`}  >
      <div className="flex-1 flex flex-col justify-start mr-10">
        <h2 className="text-[#ff6b07] font-semibold text-[25px] font-Montserrat">TEMPLE ADDRESS</h2>
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        /> */}
  
        <div className="flex gap-3 text-[#ffff] ">
          <a href="#" className="flex mt-6">
            <FontAwesomeIcon
              icon={faFacebook}
              className="social_icons_footer py-2 px-2  rounded-[5px] hover:text-[#ff6b07] text-[20px]"
            />
          </a>
          <a href="#" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faInstagram}
              className="social_icons_footer py-2 px-2  rounded-[5px] hover:text-[#ff6b07] text-[20px]"
            />
          </a>

          <a href="#" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social_icons_footer py-2 px-2  rounded-[5px] hover:text-[#ff6b07] text-[20px]"
            />
          </a>
          
          <a href="#" target="_blank" className="flex mt-6">
            <FontAwesomeIcon
              icon={faYoutube}
              className="social_icons_footer py-2 px-2  rounded-[5px] hover:text-[#ff6b07] text-[20px]"
            />
          </a>
          
          
        </div>
      </div>

      <div className="flex-[2.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLinks) => (
          <div
            key={footerLinks.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLinks.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLinks.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#ff6b07] cursor-pointer ${
                    index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-center md:flex-row flex-col text-center pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-[#ccc]">
      Copyright © 2023 TempleAddress.com.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        
      </div>
    </div>
  </section>
);

export default Footer;
