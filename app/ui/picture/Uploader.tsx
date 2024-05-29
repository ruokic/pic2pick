"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { Picture } from "@/app/types/picture";

export default function Uploader() {
  const [picture, setPicture] = useState<Picture | null>();

  const handleChangePicture = useCallback((file: File) => {
    setPicture({ ...file, preview: URL.createObjectURL(file) });
  }, []);

  useEffect(() => {
    return () => {
      picture?.preview && URL.revokeObjectURL(picture.preview);
    };
  }, [picture]);

  return (
    <>
      {picture && <PreviewImage picture={picture} />}
      <input
        id="file"
        type="file"
        accept="image/*"
        className=""
        onChange={(e) =>
          e.target?.files && handleChangePicture(e.target.files[0])
        }
      ></input>
    </>
  );
}
