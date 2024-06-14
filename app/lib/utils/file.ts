import JSZip from "jszip";
import FileSaver from "file-saver";
import { Picture } from "@/app/lib/classes";

export async function downloadZipFile(
  files: File[],
  folderName: string = "pictures"
) {
  const zip = new JSZip();
  files.forEach((file) => zip.file(file.name, file));
  const result = await zip.generateAsync({ type: "blob" });
  return FileSaver(result, `${folderName}.zip`);
}

export function convertFileListToPictures(fileList: FileList) {
  return Array.from(fileList).map((file) => new Picture(file));
}
