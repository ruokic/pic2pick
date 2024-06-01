import PictureInfo from "@/app/ui/picture/Info";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { useHeightResizer } from "@/app/lib/hooks/useHeightResizer";

export default function Detail() {
  const { containerRef, handleMouseDown } = useHeightResizer();

  return (
    <div ref={containerRef} className="flex flex-col w-2/3">
      <PreviewImage />
      <div
        onMouseDown={handleMouseDown}
        className="h-1 bg-gray-200 cursor-row-resize hover:bg-blue-300"
      />
      <PictureInfo />
    </div>
  );
}
