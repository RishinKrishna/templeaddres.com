import Layout from "@/Layout/admin";
import DataTable from "@/components/DataTable";
import EyeIcon from "@/components/icons/EyeIcon";
import MenuIcon from "@/components/icons/MenuIcon";
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
          <button type="button">
            <MenuIcon />
          </button>
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
