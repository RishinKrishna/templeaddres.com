import NonAdminLayout from "@/Layout";
import { CustomDropdown } from "@/components/CustomDropdown";
import DataTable from "@/components/DataTable";
import GalaryRow from "@/components/Home/GalaryRow";
import TempleView from "@/components/Temples/View";
import ClockIcon from "@/components/icons/ClockIcon";
import DisableIcon from "@/components/icons/DisableIcon";
import EditIcon from "@/components/icons/EditIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import LandmarkIcon from "@/components/icons/LandmarkIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { get } from "@/config/axiosConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TempleViewPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [temple, setTemple] = useState({});
  const [poojaList, setTempleList] = useState([]);
  const poojaTableHeaders = [
    {
      Header: "ID",
      accessor: "pooja_id",
    },
    {
      Header: "Pooja Name",
      accessor: "name",
    },
    {
      Header: "Code",
      accessor: "cdoe",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Remarks",
      accessor: "remarks",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "  ",
      accessor: "",
      Cell: () => {
        return (
          <button type="button" className="bg-primary px-4 py-3 rounded-lg">
            <EyeIcon />
          </button>
        );
      },
    },
    {
      Header: " ",
      accessor: "",
      Cell: () => {
        return (
          <CustomDropdown
            button={{
              render: () => <MenuIcon />,
            }}
            optionsContainerClassName="bg-white w-[150px] top-o right-0  py-2 shadow-lg"
            optionsList={[
              {
                icon: <EditIcon height={15} className="mr-4" />,
                name: "Edit",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9] ",
              },
              {
                icon: <DisableIcon height={15} className="mr-4" />,
                name: "Disable",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9] ",
              },
              {
                icon: <TrashIcon height={15} className="mr-4" />,
                name: "Delete",
                className:
                  "flex  items-center w-full text-[16px] text-[#A9A9A9]  ",
              },
            ]}
          />
        );
      },
    },
  ];
  //   let panelActionButtons = {
  //     items: [
  //       {
  //         displayText: "Add Pooja",
  //         className: "px-4 py-2 text-white bg-primary rounded-[10px]",
  //       },
  //     ],
  //   };
  const fetchTempleId = () => {
    get({ api: `/temples/view/${id}` }).then((response) => {
      setTemple(response.data.data);
    });
  };
  useEffect(() => {
    if (id) fetchTempleId();
  }, [id]);

  return <TempleView {...temple} />;
};

TempleViewPage.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default TempleViewPage;
