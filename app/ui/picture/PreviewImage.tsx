import Image from "next/image";
import { Container } from "@/app/ui/common/Container";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function PreviewImage() {
  const { pictures, selectedIndex } = usePictures();
  const picture = pictures[selectedIndex];

  return (
    <Container style="relative w-full min-h-80 h-2/3">
      {picture ? (
        <Image
          src={picture.preview}
          className="object-contain p-4"
          fill
          quality={100}
          alt="uploaded picture"
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
