"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { Picture } from "@/app/types/picture";
import PictureList from "@/app/ui/picture/List";
import PictureInfo from "@/app/ui/picture/Info";
import Uploader from "@/app/ui/picture/Uploader";
import { usePictureStore } from "@/app/store/usePictureStore";

export default function Home() {
  const { pictures, selectedIndex } = usePictureStore();

  useEffect(() => {
    return () => {
      pictures.map((picture) => URL.revokeObjectURL(picture.preview));
    };
  }, []);

  return (
    <main className="flex divide-x h-[calc(100vh-66px)]">
      <PictureList />
      <PictureInfo picture={pictures[selectedIndex]} />
      <PreviewImage picture={pictures[selectedIndex]} />
    </main>
  );
}
