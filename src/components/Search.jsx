import Styles from '../styles/articles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

const Search = () => {
  const [selectedOption, setSelectedOption] = useState('Tempels');

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='w-full h-[45px] my-16 lg:px-[100px] '>
    <div className= {`flex`}>
    <input
  className={`flex relative outline-none border border-[#00000052] h-[43px]  font-semibold rounded-[10px] mr-4 py-7 px-5 w-full h-[45px]  ${Styles["search-input"]}`}
  type="text"
  name="searchBox"
  placeholder="Find Your Temple here..."
/>

       
       <FontAwesomeIcon
              icon={faSearch}
              className="social_icons mr-3 text-[#fff] rounded-[10px] px-5 py-[15px] bg-[#ff6b07] text-[25px]"
            />
      </div>
      <div className="flex justify-center lg:gap-[200px] my-7 ">
        <div className="flex text-[18px] font-semibold text-[#666666]">
        <input
          type="radio"
          value='Tempels'
          checked={selectedOption === 'Tempels'}
          onChange={handleRadioChange}
        />
        <p className=''>Tempels</p>
        </div>
        <div className="flex ">
        <input
          type="radio"
          value='Service'
          className='ml-5'
          checked={selectedOption === 'Service'}
          onChange={handleRadioChange}
        />
        <p className='font-semibold text-[18px] text-[#666666]'>Service</p>
        </div>
        
      </div>
      
      </div>
  )
}

export default Search