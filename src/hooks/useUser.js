import { userServices } from "@/services/userServices";
import { useEffect, useState } from "react";

export default function useUser() {
  const [data, setData] = useState({
    name: "",
    avatar: "/user.jpg",
    about: "",
    interests: [],
  });
  const [loading, setLoading] = useState(true);
  const useUserServices = new userServices();
  let loadLazyTimeout = null;

  useEffect(() => {
    loadLazyData();

    return () => {
      if (loadLazyTimeout) {
        clearTimeout(loadLazyTimeout);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadLazyData = () => {
    setLoading(true);

    if (loadLazyTimeout) {
      clearTimeout(loadLazyTimeout);
    }
    loadLazyTimeout = setTimeout(() => {
        useUserServices.getDataUser().then((data) => {
        setData(data);
        setLoading(false);
      });
    }, Math.random() * 1000 + 250);
  };

  return { data, loading };
}
