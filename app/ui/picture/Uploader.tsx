import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { setPreview } from "@/app/lib/utils/array";

export default function Uploader() {
  const { addPictures } = usePictureStore();

  const handleAddPictures = (files: FileList) => {
    const newFiles = setPreview(files);
    addPictures(newFiles);
  };

  return (
    <label>
      +
      <input
        id="file"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => e.target?.files && handleAddPictures(e.target.files)}
      />
    </label>
  );
}
