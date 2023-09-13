import Layout from "@/Layout/admin";
import { CustomDropdown } from "@/components/CustomDropdown";
import DataTable from "@/components/DataTable";
import DisableIcon from "@/components/icons/DisableIcon";
import EditIcon from "@/components/icons/EditIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { get } from "@/config/axiosConfig";
import Image from "next/image";
import { useEffect, useState } from "react";

const Temples = () => {
  const [templeList, setTempleList] = useState([]);
  let templeListHeaders = [
    {
      Header: "Temple ID",
      accessor: "temple_id",
    },
    {
      Header: "Image",
      className: "text-white",
      accessor: "thumbnail",
      Cell: (data) => {
        let thumbnail = data.row.original.thumbnail;
        return (
          <Image
            src={thumbnail}
            alt="thumbnail"
            className="rounded-[4px]"
            width={100}
            height={100}
          />
        );
      },
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Deity",
      accessor: "deity",
    },
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Landmark",
      accessor: "landmark",
    },
    {
      Header: "Address",
      accessor: "address",
      className: "w-[15ch]",
    },
    {
      Header: "Pincode",
      accessor: "pin_code",
    },
    // {
    //   Header: "Status",
    //   accessor: "status",
    // },
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

  const getTempleList = () => {
    get({
      api: "/temples/list",
    }).then((resposne) => {
      setTempleList(resposne.data.data);
    });
  };

  useEffect(() => {
    getTempleList();
  }, []);
  return (
    <div>
      <h1 className="font-outfit text-xl text-[#666666] font-semibold">
        Temple List
      </h1>
      <DataTable
        columnDef={{
          tableHeaders: templeListHeaders,
        }}
        className="t-table bordered"
        tableData={templeList}
        search={false}
      />
    </div>
  );
};

Temples.getLayout = (page) => <Layout>{page}</Layout>;
export default Temples;
