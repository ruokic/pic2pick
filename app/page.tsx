"use client";
import { useEffect } from "react";
import { Divider } from "@/app/ui/common/Divider";
import PictureList from "@/app/ui/picture/List";
import PictureDetail from "@/app/ui/picture/Detail";
import { useWidthResizer } from "@/app/lib/hooks/useWidthResizer";
import { useHeightResizer } from "@/app/lib/hooks/useHeightResizer";
import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { removePreview } from "@/app/lib/utils/array";

export default function Home() {
  const { containerRef, handleMouseDown } = useWidthResizer();
  const { pictures } = usePictureStore();

  useEffect(() => {
    return () => {
      removePreview(pictures);
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
