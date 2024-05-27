import Image from "next/image";

export default function PreviewImage({ picture }) {
  return (
    <div>
      <Image
        src={picture.preview}
        width="500"
        height="300"
        quality={100}
        alt="uploaded picture"
      />
    </div>
  );
}
