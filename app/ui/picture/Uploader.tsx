import { Picture } from "@/app/types/picture";

interface UploaderProps {
  pictures: Picture[];
  addPictures: (pictures: FileList) => void;
}

export default function Uploader({ pictures, addPictures }: UploaderProps) {
  return (
    <label>
      +
      <input
        id="file"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => e.target?.files && addPictures(e.target.files)}
      />
    </label>
  );
}
