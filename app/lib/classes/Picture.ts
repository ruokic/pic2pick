export class Picture extends File {
  preview: string;
  key: symbol;

  constructor(file: File) {
    super([file], file.name, {
      type: file.type,
      lastModified: file.lastModified,
    });
    this.preview = URL.createObjectURL(file);
    this.key = Symbol("key");
  }

  revokePreview() {
    URL.revokeObjectURL(this.preview);
  }
}
