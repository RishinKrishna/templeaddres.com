import NonAdminLayout from "@/Layout";
import Search from "@/components/Home/Search";
import { useRouter } from "next/router";
import React from "react";

const SearchFilter = () => {
  const { query } = useRouter();
  const { id } = query;


  return (
    <div>
      <Search />
    </div>
  );
};
SearchFilter.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default SearchFilter;
