/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { ResizableDivContainer } from "@/app/ui/components";
import PictureSidebar from "@/app/ui/picture/Sidebar";
import PictureDetail from "@/app/ui/picture/Detail";
import { usePictureStore } from "@/app/lib/store";

export default function Picture() {
  const { pictures } = usePictureStore();

  useEffect(() => {
    return () => {
      pictures.forEach((picture) => picture.revokePreview());
    };
  }, []);

  return (
    <ResizableDivContainer
      style="flex h-[calc(100vh-66px)]"
      left={<PictureSidebar />}
      right={<PictureDetail />}
    />
  );
}
