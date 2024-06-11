import { IPicture } from "@/app/lib/types/picture";

export class Picture extends File implements IPicture {
  preview: string;

  constructor(file: File) {
    super([file], file.name, {
      type: file.type,
      lastModified: file.lastModified,
    });
    this.preview = URL.createObjectURL(file);
  }

  revokePreview() {
    URL.revokeObjectURL(this.preview);
  }
}
