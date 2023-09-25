import NonAdminLayout from "@/Layout";
import Search from "@/components/Home/Search";
import TempleCards from "@/components/Home/TempleCards";
import { get } from "@/config/axiosConfig";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchFilter = () => {
  const { option, searchQuery } = useRouter().query;
  const [query, setQuery] = useState(searchQuery);
  const [selectedOption, setSelectedOption] = useState(option);
  const [tempelsServices, setTempelsServices] = useState([]);

  const getTemple = () => {
    get({
      api: "/temples/list",
      config: {
        params: {
          search_query: query,
        },
      },
    }).then((response) => {
      setTempelsServices(response.data.data);
    });
  };

  useEffect(() => {
    getTemple();
  }, []);

  return (
    <div>
      <div className="py-5">
        <h1 className="text-2xl text-center ">Find Your Temples </h1>
      </div>
      <Search
        query={query}
        setQuery={setQuery}
        tempelsServices={tempelsServices}
        setTempelsServices={setTempelsServices}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <div>
        <TempleCards
          serviceCard={tempelsServices}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
};

SearchFilter.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default SearchFilter;
