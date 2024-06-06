"use client";
import { Divider } from "@/app/ui/common/Divider";
import PictureList from "@/app/ui/picture/List";
import PictureDetail from "@/app/ui/picture/Detail";
import { useWidthResizer } from "@/app/lib/hooks/useWidthResizer";
import { useHeightResizer } from "@/app/lib/hooks/useHeightResizer";

export default function Home() {
  const { containerRef, handleMouseDown } = useWidthResizer();

  return (
    <main ref={containerRef} className="flex h-[calc(100vh-66px)]">
      <PictureList />
      <Divider resizable onMouseDown={handleMouseDown} />
      <PictureDetail />
    </main>
  );
}
