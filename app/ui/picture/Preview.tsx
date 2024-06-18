/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import { Container, Modal } from "@/app/ui/components";
import PictureEnlargedPreview from "@/app/ui/picture/EnlargedPreview";
import { usePictureStore } from "@/app/lib/store";

export default function PicturePreview() {
  const { pictures, selectedKey } = usePictureStore();
  const [showModal, setShowModal] = useState(false);
  const picture = pictures.find(({ key }) => key === selectedKey);

  return (
    <Container style="relative w-full min-h-80 h-2/3 bg-gray-200">
      {picture ? (
        <>
          <button
            className="relative h-full m-auto"
            onClick={() => setShowModal(true)}
          >
            <img
              src={picture.preview}
              className="object-contain h-full"
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
