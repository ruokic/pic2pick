export function downloadFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const arrayBuffer = e.target.result;
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
