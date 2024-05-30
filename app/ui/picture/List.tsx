import { Picture } from "@/app/types/picture";
import Uploader from "@/app/ui/picture/Uploader";
import { usePictureStore } from "@/app/store/usePictureStore";

export default function List() {
  const { pictures, changeSelectedIndex } = usePictureStore();

  return (
    <div className="p-4 flex flex-col gap-2">
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
