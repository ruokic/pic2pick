"use client";
import PictureList from "@/app/ui/picture/List";
import PictureInfo from "@/app/ui/picture/Info";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { useTriDivsWidthResizer } from "@/app/lib/hooks/useTriDivsWidthResizer";

export default function Home() {
  const { containerRef, handleMouseDown } = useTriDivsWidthResizer();

  return (
    <main ref={containerRef} className="flex divide-x h-[calc(100vh-66px)]">
      <PictureList />
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        className="w-2 bg-gray-200 cursor-col-resize hover:bg-blue-300"
      />
      <PictureInfo />
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        className="w-2 bg-gray-200 cursor-col-resize hover:bg-blue-300"
      />
      <PreviewImage />
    </main>
  );
}
