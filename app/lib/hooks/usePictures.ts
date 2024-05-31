import { useEffect } from "react";
import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { removePreview } from "@/app/lib/utils/array";

export function usePictures() {
  const { pictures, ...store } = usePictureStore();

  useEffect(() => {
    return () => {
      removePreview(pictures);
    };
  }, []);

  return { pictures, ...store };
}
