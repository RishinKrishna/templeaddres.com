import Layout from "@/Layout/admin";
import TempleView from "@/components/Temples/View";
import TampleDescription from "@/components/admin/TampleDescription";
import TempleContactDetails from "@/components/admin/TempleContactDetails";
import TempleDeity from "@/components/admin/TempleDeity";
import TempleGallery from "@/components/admin/TempleGallery";
import TempleHistory from "@/components/admin/TempleHistory";
import EditIcon from "@/components/icons/EditIcon";
import LandmarkIcon from "@/components/icons/LandmarkIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import TimerIcon from "@/components/icons/TimerIcon";
import { get } from "@/config/axiosConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TempleInfo = () => {
  const router = useRouter();
  const id = router.query.id;
  const [temple, setTemple] = useState({});
  const [poojaList, setTempleList] = useState([]);

  const fetchTempleId = () => {
    get({ api: `/temples/view/${id}` }).then((response) => {
      setTemple(response.data.data);
    });
  };
  useEffect(() => {
    if (id) fetchTempleId();
  }, [id]);

  return (
    <>
      <TempleView {...temple} />
    </>
  );
};

TempleInfo.getLayout = (page) => <Layout>{page}</Layout>;

export default TempleInfo;
