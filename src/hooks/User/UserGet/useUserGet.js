import { api } from "API";
import { useCallback, useState } from "react";

export default function useUserGet() {
  const [user, setUser] = useState([]);

  const getUser = useCallback(async (uid) => {
    try {
      const response = await api.get("user/" + uid);
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { user, getUser };
}
