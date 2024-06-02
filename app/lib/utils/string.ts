export function setByteString(byte: number) {
  const K = 1024;
  const pre = ["B", "KB", "MB", "GB"];
  let step = 0;
  let convertedByte = byte;
  while (convertedByte >= K && step < 3) {
    step++;
    convertedByte /= K;
  }
  return Number(convertedByte.toFixed(2)).toString() + pre[step];
}

export function setDateString(date: number) {
  return new Date(date).toLocaleString();
}
