import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-end items-center m-auto w-full h-[65px] bg-white ">
      <div className="flex justify-center items-center">
      <FontAwesomeIcon
        icon={faAdd}
        className="text-[27px] text-[#ff6b07]"
      />
      <h4 className="px-5 text-[18px] font-semibold">Administrator</h4>
      </div>
      
    </div>
  );
};

export default Header;
