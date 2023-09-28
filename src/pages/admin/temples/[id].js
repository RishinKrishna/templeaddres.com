import Layout from "@/Layout/admin";
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

  useEffect(() => {
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
          .map((imgKey) => galleryObj[imgKey]);
        setGallery(galleryArr);
      });
    };
    const getPoojaList = () => {
      get({ api: `/temples/pooja-list/${id}` }).then((response) => {
        setPoojaList(response.data.data);
      });
    };
    if (id && Object.keys(temple).length === 0) {
      fetchTempleId();
      getGallary();
      getPoojaList();
    }
  }, [id]);

  return (
    <>
      <TempleView
        {...temple}
        id={id}
        gallery={gallery}
        admin={true}
        poojaList={poojaList}
      />
    </>
  );
};

TempleInfo.getLayout = (page) => <Layout>{page}</Layout>;

export default TempleInfo;
