export interface IPicture extends File {
  preview: string;

  revokePreview: () => void;
}
