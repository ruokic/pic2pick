import { usePictureStore } from "@/app/lib/store";

export default function PictureUploader() {
  const { addPictures } = usePictureStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;
    addPictures(e.target.files);
    e.target.value = "";
  };

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
        onChange={handleInputChange}
      />
    </>
  );
}
