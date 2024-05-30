import Image from "next/image";
import { Picture } from "@/app/lib/types/picture";

interface PreviewImageProps {
  picture: Picture;
}

export default function PreviewImage({ picture }: PreviewImageProps) {
  return (
    <div>
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
