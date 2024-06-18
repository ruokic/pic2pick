/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { Divider } from "@/app/ui/components";
import PictureSidebar from "@/app/ui/picture/Sidebar";
import PictureDetail from "@/app/ui/picture/Detail";
import { useHeightResizer, useWidthResizer } from "@/app/lib/hooks";
import { usePictureStore } from "@/app/lib/store";

export default function Picture() {
  const { containerRef, handleMouseDown } = useWidthResizer();
  const { pictures } = usePictureStore();

  useEffect(() => {
    return () => {
      pictures.forEach((picture) => picture.revokePreview());
    };
  }, []);

  return (
    <main ref={containerRef} className="flex h-[calc(100vh-66px)]">
      <PictureSidebar />
      <Divider resizable onMouseDown={handleMouseDown} />
      <PictureDetail />
    </main>
  );
}
