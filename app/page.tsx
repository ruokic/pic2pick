"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { Picture } from "@/app/types/picture";
import PictureList from "@/app/ui/picture/List";
import PictureInfo from "@/app/ui/picture/Info";
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

  const handleIndexSelect = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    return () => {
      pictures.map((picture) => URL.revokeObjectURL(picture.preview));
    };
  }, []);

  return (
    <main className="flex divide-x h-[calc(100vh-66px)]">
      <PictureList
        pictures={pictures}
        addPictures={addPictures}
        handleIndexSelect={handleIndexSelect}
      />
      <PictureInfo picture={pictures[selectedIndex]} />
      <PreviewImage picture={pictures[selectedIndex]} />
    </main>
  );
}
