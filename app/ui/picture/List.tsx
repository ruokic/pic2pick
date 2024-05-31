import Uploader from "@/app/ui/picture/Uploader";
import { Picture } from "@/app/lib/types/picture";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function List() {
  const { pictures, changeSelectedIndex } = usePictures();

  return (
    <div className="p-4 flex flex-col gap-2 flex-grow">
      <div className="flex justify-between">
        사진 목록
        <Uploader />
      </div>
      <div className="flex flex-col gap-2 m-2">
        {pictures.map((picture, index) => (
          <button
            key={picture.preview}
            onClick={() => changeSelectedIndex(index)}
          >
            {picture.name}
          </button>
        ))}
      </div>
    </div>
  );
}
