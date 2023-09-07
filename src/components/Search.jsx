import Styles from '../styles/articles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className='w-full h-[45px] my-16 lg:px-[100px] '>
    <div className= {`flex`}>
        <input
          className={`flex relative outline-none border-none h-[43px] font-semibold rounded-[10px] mr-4 py-7 px-5 w-full h-[45px]  ${Styles["search-input"]}`}
          type="text"
          name="serchBox"
          placeholder="Find Your Temple here..."
        />
       
       <FontAwesomeIcon
              icon={faSearch}
              className="social_icons mr-3 text-[#fff] rounded-[10px] px-5 py-[15px] bg-[#ff6b07] text-[25px]"
            />
      </div>
      <div className="flex justify-center lg:gap-[200px] mt-6">
        <div className="flex text-[18px] font-semibold text-[#666666]">
        <input type="radio"/>
        <p className=''>Tempels</p>
        </div>
        <div className="flex ">
        <input type="radio" className='ml-5' />
        <p className='font-semibold text-[18px] text-[#666666]'>Service</p>
        </div>
        
      </div>
      
      </div>
  )
}

export default Search