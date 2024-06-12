import { Picture } from "@/app/lib/classes";

export function downloadFile(file: Picture) {
  const reader = new FileReader();
  reader.onload = function (e: ProgressEvent<FileReader>) {
    const arrayBuffer = e.target!.result as ArrayBuffer;
    const blob = new Blob([arrayBuffer], { type: file.type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  reader.readAsArrayBuffer(file);
}

export function convertFileListToPictures(fileList: FileList) {
  return Array.from(fileList).map((file) => new Picture(file));
}
