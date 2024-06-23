import { Divider } from "@/app/ui/components";
import PictureInfo from "@/app/ui/picture/Info";
import PicturePreview from "@/app/ui/picture/Preview";
import { useResizer } from "@/app/lib/hooks";

export default function PictureDetail() {
  const { containerRef, handleMouseDown } = useResizer("horizontal");

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      <PicturePreview />
      <Divider type="horizontal" resizable onMouseDown={handleMouseDown} />
      <PictureInfo />
    </div>
  );
}
