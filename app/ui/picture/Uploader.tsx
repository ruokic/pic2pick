import { usePictureStore } from "@/app/lib/store";

export default function PictureUploader() {
  const { addPictures } = usePictureStore();

  return (
    <>
      <label htmlFor="file" className="cursor-pointer">
        ➕
      </label>
      <input
        id="file"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => e.target?.files && addPictures(e.target.files)}
      />
    </>
  );
}
