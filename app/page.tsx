"use client";
import { useEffect } from "react";
import { Divider } from "@/app/ui/components";
import PictureList from "@/app/ui/picture/List";
import PictureDetail from "@/app/ui/picture/Detail";
import { useHeightResizer, useWidthResizer } from "@/app/lib/hooks";
import { usePictureStore } from "@/app/lib/store";
import { removePreview } from "@/app/lib/utils";

export default function Home() {
  const { containerRef, handleMouseDown } = useWidthResizer();
  const { pictures } = usePictureStore();

  useEffect(() => {
    return () => {
      pictures.forEach((picture) => picture.revokePreview());
    };
  }, []);

  return (
    <main ref={containerRef} className="flex h-[calc(100vh-66px)]">
      <PictureList />
      <Divider resizable onMouseDown={handleMouseDown} />
      <PictureDetail />
    </main>
  );
}
