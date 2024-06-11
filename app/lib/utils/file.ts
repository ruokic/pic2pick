import { IPicture } from "@/app/lib/types/picture";

export function downloadFile(file: IPicture) {
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
