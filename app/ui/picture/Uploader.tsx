import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { setPreview } from "@/app/lib/utils/array";

export default function Uploader() {
  const { addPictures } = usePictureStore();

  return (
    <label className="cursor-pointer">
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
