"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "./PreviewImage";

export default function Uploader() {
  const [picture, setPicture] = useState();

  const handleChangePicture = useCallback((file) => {
    setPicture({ file, preview: URL.createObjectURL(file) });
  }, []);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(picture);
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
        onChange={(e) => handleChangePicture(e.target.files[0])}
      ></input>
    </>
  );
}
