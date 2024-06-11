import { useState } from "react";
import Image from "next/image";
import { Container, Modal } from "@/app/ui/components";
import PictureEnlargedPreview from "@/app/ui/picture/EnlargedPreview";
import { usePictureStore } from "@/app/lib/store";

export default function PicturePreview() {
  const { pictures, selectedIndex } = usePictureStore();
  const [showModal, setShowModal] = useState(false);
  const picture = pictures[selectedIndex];

  return (
    <Container style="relative w-full min-h-80 h-2/3 bg-gray-200">
      {picture ? (
        <>
          <button
            className="relative h-full"
            onClick={() => setShowModal(true)}
          >
            <Image
              src={picture.preview}
              className="object-contain"
              fill
              quality={100}
              alt={picture.name}
            />
          </button>
          <PictureEnlargedPreview
            picture={picture}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
