import { Picture } from "@/app/types/picture";
import Uploader from "@/app/ui/picture/Uploader";

interface ListProps {
  pictures: Picture[];
  addPictures: (pictures: FileList) => void;
  handleIndexSelect: (index) => void;
}

export default function List({
  pictures,
  addPictures,
  handleIndexSelect,
}: ListProps) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        사진 목록
        <Uploader pictures={pictures} addPictures={addPictures} />
      </div>
      <div className="flex flex-col gap-2 m-2">
        {pictures.map((picture, index) => (
          <button
            key={picture.preview}
            onClick={() => handleIndexSelect(index)}
          >
            {picture.name}
          </button>
        ))}
      </div>
    </div>
  );
}
