import { api } from "API";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useTranslate() {
  const [translation, setTranslation] = useState(null);
  const { i18n } = useTranslation();

  const getTranslation = useCallback(
    async (texts) => {
      const params = {
        text: texts,
        targetLanguage: i18n.language,
      };
      
      try {
        const response = await api.post("translate", params);
        if (response.status === 201) {
          const { data } = response;
          setTranslation(data.contents);
        }
      } catch (error) {
        if (error.status === 400) {
          setTranslation(texts);
        }
        console.log(error);
      }
    },
    [i18n.language]
  );

  return { translation, getTranslation };
}
