import { Picture } from "@/app/lib/classes";

export function downloadFile(file: Picture) {
  const a = document.createElement("a");
  a.href = file.preview;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function convertFileListToPictures(fileList: FileList) {
  return Array.from(fileList).map((file) => new Picture(file));
}
