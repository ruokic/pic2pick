import Image from "next/image";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function PreviewImage() {
  const { pictures, selectedIndex } = usePictures();
  const picture = pictures[selectedIndex];

  return (
    <div className="flex-grow">
      {picture ? (
        <Image
          src={picture.preview}
          width="500"
          height="300"
          quality={100}
          alt="uploaded picture"
        />
      ) : null}
    </div>
  );
}
