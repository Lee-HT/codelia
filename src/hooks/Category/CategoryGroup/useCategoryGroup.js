import { api } from "API";
import { useCallback, useState } from "react";

export default function useCategoryGroup() {
  const [category, setCategory] = useState({});

  const getCategory = useCallback(async () => {
    try {
      const response = await api.get("category");
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setCategory(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCategoryGroup = useCallback(async () => {
    try {
      const response = await api.get("category/parent");
      if (response.status === 200) {
        const { contents } = response.data;
        console.log(contents);
        setCategory(contents);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { category, getCategory, getCategoryGroup };
}
