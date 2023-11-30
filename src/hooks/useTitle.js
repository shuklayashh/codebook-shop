
import {useEffect} from "react";
export const useTitle = (title) => {

    useEffect(() => {
      document.title = `${title}-codebook`;
    },[title]);
  return null;
}
