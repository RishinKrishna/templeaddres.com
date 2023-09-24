import NonAdminLayout from "@/Layout";
import ServiceView from "@/components/services/View";
import { useRouter } from "next/router";
import React from "react";

const ServiceViewPage = () => {
  const { query } = useRouter();
  const id = query.id;
  return <ServiceView id={id} />;
};

ServiceViewPage.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default ServiceViewPage;
