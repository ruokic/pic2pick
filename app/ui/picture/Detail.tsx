import { ResizableDivContainer } from "@/app/ui/components";
import PictureInfo from "@/app/ui/picture/Info";
import PicturePreview from "@/app/ui/picture/Preview";

export default function PictureDetail() {
  return (
    <ResizableDivContainer
      style="w-full"
      direction="horizontal"
      top={<PicturePreview />}
      bottom={<PictureInfo />}
    />
  );
}
