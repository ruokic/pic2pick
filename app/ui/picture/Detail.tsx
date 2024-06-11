import { Divider } from "@/app/ui/components";
import PictureInfo from "@/app/ui/picture/Info";
import PicturePreview from "@/app/ui/picture/Preview";
import { useHeightResizer } from "@/app/lib/hooks";

export default function PictureDetail() {
  const { containerRef, handleMouseDown } = useHeightResizer();

  return (
    <div ref={containerRef} className="flex flex-col w-2/3">
      <PicturePreview />
      <Divider type="horizontal" resizable onMouseDown={handleMouseDown} />
      <PictureInfo />
    </div>
  );
}
