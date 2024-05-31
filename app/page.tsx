"use client";
import { useEffect } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import PictureList from "@/app/ui/picture/List";
import PictureInfo from "@/app/ui/picture/Info";
import Uploader from "@/app/ui/picture/Uploader";
import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { removePreview } from "@/app/lib/utils/array";

export default function Home() {
  const { pictures, selectedIndex } = usePictureStore();

  useEffect(() => {
    return () => {
      removePreview(pictures);
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
