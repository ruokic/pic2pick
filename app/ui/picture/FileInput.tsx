import { usePictureStore } from "@/app/lib/store";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function PictureFileInput() {
  const { addPictures } = usePictureStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;
    addPictures(e.target.files);
    e.target.value = "";
  };

  return (
    <>
      <label htmlFor="file" className="cursor-pointer">
        <PlusIcon className="size-6 text-black" />
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
