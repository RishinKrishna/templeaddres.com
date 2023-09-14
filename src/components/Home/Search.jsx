import Styles from "@/styles/articles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { get } from "@/config/axiosConfig";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime/runtime";
const Search = ({ setTempelsServices }) => {
  const [selectedOption, setSelectedOption] = useState("temples");
  const [query, setQuery] = useState("");
  const fetchTemples = useAsyncDebounce((value = "") => {
    get({
      api: "/temples/list",
      config: {
        params: {
          search_query: value,
        },
      },
    }).then((response) => {
      setTempelsServices(response.data.data);
    });
  }, 500);

  const fetchServices = useAsyncDebounce((value = "") => {
    get({
      api: "/services/list",
      config: {
        params: {
          search_query: value,
        },
      },
    }).then((response) => {
      setTempelsServices(response.data.data.services);
    });
  }, 500);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    fetchTemples(e.target.value);
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);

    if (e.target.value == "temples") {
      fetchTemples();
    } else if (e.target.value == "service") {
      fetchServices();
    }
  };

  return (
    <div className="w-full h-[45px] my-16 lg:px-[100px] ">
      <div className={`flex`}>
        <input
          className={`flex relative outline-none border border-[#00000052]  font-outfit  rounded-[10px] mr-4  px-5 w-full   ${Styles["search-input"]}`}
          type="text"
          name="searchBox"
          placeholder="Find Your Temple here..."
          value={query}
          onChange={(e) => handleQuery(e)}
        />

        <FontAwesomeIcon
          icon={faSearch}
          className="social_icons mr-3 text-[#fff] rounded-[10px] px-5 py-[15px] bg-[#ff6b07] text-[25px]"
        />
      </div>
      <div className="flex justify-center lg:gap-[200px] my-7 ">
        <div className="flex justify-center text-[18px] font-semibold text-[#666666]">
          <input
            type="radio"
            id="temples"
            value="temples"
            checked={selectedOption === "temples"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="temples"
            className="font-semibold text-[18px] text-[#666666] ml-2"
          >
            Temples
          </label>
        </div>
        <div className="flex  justify-center">
          <input
            type="radio"
            id="service"
            value="service"
            className="ml-5"
            checked={selectedOption === "service"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="service"
            className="font-semibold text-[18px] text-[#666666] ml-2"
          >
            Service
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
