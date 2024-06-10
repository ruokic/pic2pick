import { useState } from "react";
import Image from "next/image";
import { Container, Modal } from "@/app/ui/components";
import ModalImage from "@/app/ui/picture/ModalImage";
import { usePictureStore } from "@/app/lib/store/usePictureStore";

export default function PreviewImage() {
  const { pictures, selectedIndex } = usePictureStore();
  const [showModal, setShowModal] = useState(false);
  const picture = pictures[selectedIndex];

  return (
    <Container style="relative w-full min-h-80 h-2/3 bg-gray-200">
      {picture ? (
        <>
          <button onClick={() => setShowModal(true)}>
            <Image
              src={picture.preview}
              className="object-contain p-2"
              fill
              quality={100}
              alt={picture.name}
            />
          </button>
          <ModalImage
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
