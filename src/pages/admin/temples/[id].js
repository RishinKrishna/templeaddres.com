import Layout from "@/Layout/admin";
import Loader from "@/components/Loader";
import TempleView from "@/components/Temples/View";
import { get } from "@/config/axiosConfig";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TempleInfo = () => {
  const router = useRouter();
  const id = router.query.id;
  const [temple, setTemple] = useState({});
  const [gallery, setGallery] = useState([]);
  const [poojaList, setPoojaList] = useState([]);

  const fetchTempleId = () => {
    get({ api: `/temples/view/${id}` }).then((response) => {
      setTemple({ ...temple, ...response.data.data });
    });
  };

  const getGallary = () => {
    get({ api: `/temples/gallery-view/${id}` }).then((response) => {
      let galleryObj = response.data.data;
      const galleryArr = Object.keys(galleryObj)
        .filter((imgObj) => !imgObj.includes("gallery"))
        .map((imgKey) => ({
          preview: galleryObj[imgKey],
          file: galleryObj[imgKey],
        }));
      setGallery(galleryArr);
    });
  };
  const getPoojaList = () => {
    get({ api: `/temples/pooja-list/${id}` }).then((response) => {
      setPoojaList(response.data.data);
    });
  };
  const onCloseModal = () => {
    console.log("sopskdfhjwikope");
    fetchTempleId();
    getGallary();
    getPoojaList();
  };

  let props = { ...temple, id, onCloseModal, gallery, admin: true, poojaList };

  useEffect(() => {
    if (id && Object.keys(temple).length === 0) {
      fetchTempleId();
      getGallary();
      getPoojaList();
    }
  }, [id]);

  if (Object.keys(temple).length > 0) {
    return (
      <>
        <TempleView {...props} />
      </>
    );
  }
  return <Loader />;
};

TempleInfo.getLayout = (page) => <Layout>{page}</Layout>;

export default TempleInfo;
