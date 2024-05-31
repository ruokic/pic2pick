import PictureList from "@/app/ui/picture/List";
import PictureInfo from "@/app/ui/picture/Info";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function Home() {
  return (
    <main className="flex divide-x h-[calc(100vh-66px)]">
      <PictureList />
      <PictureInfo />
      <PreviewImage />
    </main>
  );
}
