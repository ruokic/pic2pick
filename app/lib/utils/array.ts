import { Picture } from "@/app/lib/types/picture";

export function setPreview(files: FileList) {
  return Array.from(files).map((file) =>
    Object.assign(file, { preview: URL.createObjectURL(file) })
  );
}

export function removePreview(files: Picture[]) {
  files.map((picture) => URL.revokeObjectURL(picture.preview));
}
