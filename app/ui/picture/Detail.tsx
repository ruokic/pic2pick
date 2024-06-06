import { Divider } from "@/app/ui/common/Divider";
import PictureInfo from "@/app/ui/picture/Info";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { useHeightResizer } from "@/app/lib/hooks/useHeightResizer";

export default function Detail() {
  const { containerRef, handleMouseDown } = useHeightResizer();

  return (
    <div ref={containerRef} className="flex flex-col w-2/3">
      <PreviewImage />
      <Divider type="horizontal" resizable onMouseDown={handleMouseDown} />
      <PictureInfo />
    </div>
  );
}
