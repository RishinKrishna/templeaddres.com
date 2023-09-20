import NonAdminLayout from "@/Layout";
import Search from "@/components/Home/Search";
import React from "react";

const SearchFilter = () => {
  return <div>
    <Search />
  </div>;
};
SearchFilter.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default SearchFilter;
