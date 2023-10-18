import NonAdminLayout from "@/Layout";
import Loader from "@/components/Loader";
import ServiceView from "@/components/services/View";
import { get } from "@/config/axiosConfig";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ServiceViewPage = () => {
  const { query } = useRouter();
  const id = query.id;

  const [service, setService] = useState({});

  useEffect(() => {
    const getService = () => {
      get({ api: `/services/view/${id}` }).then((response) => {
        setService(response.data.data);
      });
    };

    if (id) {
      getService();
    }
  }, [id]);
  if (Object.keys(service).length > 0) {
    return <ServiceView id={id} service={service} />;
  }
  return <Loader />;
};

ServiceViewPage.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default ServiceViewPage;
