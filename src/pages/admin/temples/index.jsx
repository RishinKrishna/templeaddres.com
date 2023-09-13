import Layout from "@/Layout/admin";
import DataTable from "react-data-table-component";
const Temples = () => {
  const colums = [
    {
      name: "Temple ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Deity",
      selector: (row) => row.deity,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Landmark",
      selector: (row) => row.landmark,
    },
    {
      name: "Addres",
      selector: (row) => row.addres,
    },
    {
      name: "Pincode",
      selector: (row) => row.pincode,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "View Details",
      selector: (row) => row.details,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Sree Palakoottu Temple ",
      deity: "rishin@gmail.com",
      location: "Loard Vishnu",
      landmark: "Wayanad",
      addres: "Palakkottu Vayal",
      pincode: "25/85/09, Wayanad P.O ,Kozhikode",
      status: 673008,
      details: "Active",
      actions: "icon",
    },
    {
      id: 1,
      name: "Sree Palakoottu Temple ",
      deity: "rishin@gmail.com",
      location: "Loard Vishnu",
      landmark: "Wayanad",
      addres: "Palakkottu Vayal",
      pincode: "25/85/09, Wayanad P.O ,Kozhikode",
      status: 673008,
      details: "Active",
      actions: "icon",
    },
    {
      id: 1,
      name: "Sree Palakoottu Temple ",
      deity: "rishin@gmail.com",
      location: "Loard Vishnu",
      landmark: "Wayanad",
      addres: "Palakkottu Vayal",
      pincode: "25/85/09, Wayanad P.O ,Kozhikode",
      status: 673008,
      details: "Active",
      actions: "icon",
    },
    {
      id: 1,
      name: "Sree Palakoottu Temple ",
      deity: "rishin@gmail.com",
      location: "Loard Vishnu",
      landmark: "Wayanad",
      addres: "Palakkottu Vayal",
      pincode: "25/85/09, Wayanad P.O ,Kozhikode",
      status: 673008,
      details: "Active",
      actions: "icon",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[830px]">
        <DataTable
          columns={colums}
          className="w-full"
          data={data}
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  );
};

Temples.getLayout = (page) => <Layout>{page}</Layout>;

export default Temples;
