import Image from "next/image";
import { Modal } from "@/app/ui/components";
import { Picture } from "@/app/lib/types/picture";

interface EnlargedPreviewProps {
  picture: Picture;
  showModal: boolean;
  setShowModal: (nextShowModal: boolean) => void;
}

export default function EnlargedPreview({
  picture,
  showModal,
  setShowModal,
}: EnlargedPreviewProps) {
  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      style="max-w-[90vw] max-h-[90vh] justify-center relative"
    >
      <Image
        src={picture.preview}
        className="max-h-[calc(90vh-4rem)] h-full w-auto object-contain"
        width={1920}
        height={1080}
        alt={picture.name}
      />
    </Modal>
  );
}
