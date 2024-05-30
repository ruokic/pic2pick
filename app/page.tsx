"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { Picture } from "@/app/types/picture";
import Uploader from "@/app/ui/picture/Uploader";

export default function Home() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addPictures = useCallback((files: FileList) => {
    setPictures((prev) =>
      prev.concat(
        Array.from(files).map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      )
    );
  }, []);

  useEffect(() => {
    return () => {
      pictures.map((picture) => URL.revokeObjectURL(picture.preview));
    };
  }, [pictures]);

  return (
    <main className="flex">
      {/* Picture List */}
      <div>
        {pictures.map((picture) => (
          <div key={picture.preview}>{picture.name}</div>
        ))}
        <Uploader pictures={pictures} addPictures={addPictures} />
      </div>
      {/* MetaData of Selected Picture */}
      <div></div>
      {/* Preview of Selected Picture */}
      <div></div>
    </main>
  );
}
