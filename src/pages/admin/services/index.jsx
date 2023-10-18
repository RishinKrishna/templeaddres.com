import Layout from "@/Layout/admin";
import { CustomDropdown } from "@/components/CustomDropdown";
import DataTable from "@/components/DataTable";
import DisableIcon from "@/components/icons/DisableIcon";
import EditIcon from "@/components/icons/EditIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import UserIcon from "@/components/icons/UserIcon";
import { deleteData, get } from "@/config/axiosConfig";
import Image from "next/image";
import { useEffect, useState } from "react";
import router from "next/router";
const Services = () => {
  const [servicesList, setServicesList] = useState([]);
  let serviceListHeaders = [
    {
      Header: "Temple ID",
      accessor: "Service Id",
    },
    {
      Header: "Image",
      className: "text-white",
      accessor: "thumbnail",
      Cell: (data) => {
        let profileImage = data.row.original.profile_image;
        if (profileImage !== null) {
          return (
            <Image
              src={profileImage}
              alt="thumbnail"
              className="rounded-[4px]"
              width={100}
              height={100}
            />
          );
        }
        return (
          <div className="w-[70px] h-[70px] rounded-[10px] bg-secondary-gray bg-opacity-40 flex justify-center items-center">
            <UserIcon fill="white" width={30} height={40} />
          </div>
        );
      },
    },
    {
      Header: "Description",
      accessor: "description",
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
    // {
    //   Header: "Pincode",
    //   accessor: "pin_code",
    // },
    // {
    //   Header: "Status",
    //   accessor: "status",
    // },
    {
      Header: "  ",
      accessor: "",
      Cell: (data) => {
        const id = data.row.original.id;
        return (
          <button
            type="button"
            className="bg-primary px-4 py-3 rounded-lg"
            onClick={() => router.push(`/admin/services/${id}`)}
          >
            <EyeIcon />
          </button>
        );
      },
    },
    {
      Header: " ",
      accessor: "",
      Cell: (data) => {
        let serviceDetails = data.row.original;
        // console.log(serviceDetails);
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
                  "flex items-center w-full text-[16px] text-[#A9A9A9] border-b-2 border-[#A9A9A9] ",
                onClick: () =>
                  router.push(
                    `/admin/services/addservice/${serviceDetails.id}`
                  ),
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
                onClick: () => {
                  handleDelete(serviceDetails.id);
                },
              },
            ]}
          />
        );
      },
    },
  ];

  const handleDelete = (id) => {
    deleteData({
      api: `/service/delete/${id}`,
      toastConfig: {
        messages: {
          pending: "Please wait",
          success: "Delete Successful",
          error: "Something went wrong",
        },
      },
    }).then((response) => {
      if (response) {
        getTempleList();
      }
    });
  };

  const getTempleList = () => {
    get({
      api: "/services/list",
    }).then((resposne) => {
      setServicesList(resposne.data.data.services);
    });
  };

  useEffect(() => {
    getTempleList();
  }, []);
  return (
    <div>
      <h1 className="font-outfit text-xl text-[#666666] font-semibold">
        Services List
      </h1>
      <DataTable
        columnDef={{
          tableHeaders: serviceListHeaders,
        }}
        className="t-table bordered"
        tableData={servicesList}
        search={false}
      />
    </div>
  );
};

Services.getLayout = (page) => <Layout>{page}</Layout>;
export default Services;
