import NonAdminLayout from "@/Layout";
import { CustomDropdown } from "@/components/CustomDropdown";
import Loader from "@/components/Loader";
import TempleView from "@/components/Temples/View";
import DisableIcon from "@/components/icons/DisableIcon";
import EditIcon from "@/components/icons/EditIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { get } from "@/config/axiosConfig";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TempleViewPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [temple, setTemple] = useState({});
  const [gallery, setGallery] = useState([]);
  const [poojaList, setPoojaList] = useState([]);
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

  useEffect(() => {
    const fetchTempleId = () => {
      get({ api: `/temples/view/${id}` }).then((response) => {
        setTemple(response.data.data);
      });
    };

    const getGallary = () => {
      get({ api: `/temples/gallery-view/${id}` }).then((response) => {
        let galleryObj = response.data.data;
        const galleryArr = Object.keys(galleryObj)
          .filter((imgObj) => !imgObj.includes("gallery"))
          .map((imgKey) => galleryObj[imgKey]);
        setGallery(galleryArr);
      });
    };
    const getPoojaList = () => {
      get({ api: `/temples/pooja-list/${id}` }).then((response) => {
        setPoojaList(response.data.data);
      });
    };

    if (id) {
      fetchTempleId();
      getGallary();
      getPoojaList();
    }
  }, [id]);

  if (Object.keys(temple).length > 0) {
    return <TempleView {...temple} gallery={gallery} poojaList={poojaList} />;
  }
  return <Loader />;
};

TempleViewPage.getLayout = (page) => (
  <NonAdminLayout navbar={{ containerClassName: "bg-white text-[#666666]" }}>
    {page}
  </NonAdminLayout>
);
export default TempleViewPage;
