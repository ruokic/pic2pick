import { usePictureStore } from "@/app/lib/store/usePictureStore";

export default function Uploader() {
  const { addPictures } = usePictureStore();

  const handleAddPictures = (files: FileList) => {
    const newFiles = Array.from(files).map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );

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
