import { IPicture } from "@/app/lib/types/picture";

export function setPreview(fileList: FileList) {
  return Array.from(fileList).map((file) =>
    Object.assign(file, { preview: URL.createObjectURL(file) })
  );
}

export function removePreview(pictures: IPicture[]) {
  pictures.map((picture) => URL.revokeObjectURL(picture.preview));
}
