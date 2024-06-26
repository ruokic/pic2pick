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

  editName(newName: string): Picture {
    const newFile = new File([this], newName, {
      type: this.type,
      lastModified: Number(new Date()),
    }) as Picture;
    Object.setPrototypeOf(newFile, Picture.prototype);
    return Object.assign(newFile, { preview: this.preview, key: this.key });
  }
}
