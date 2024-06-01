import { create } from "zustand";
import { Picture } from "@/app/lib/types/picture";
import { setPreview } from "@/app/lib/utils/array";

interface PictureStore {
  pictures: Picture[];
  selectedIndex: number;
  addPictures: (newPictures: FileList) => void;
  deletePicture: (index: number) => void;
  deleteAllPictures: () => void;
  changeSelectedIndex: (index: number) => void;
}

export const usePictureStore = create<PictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  addPictures: (newPictures) =>
    set((state) => ({
      selectedIndex: state.pictures.length + newPictures.length - 1,
      pictures: state.pictures.concat(setPreview(newPictures)),
    })),
  deletePicture: (targetIndex) =>
    set((state) => ({
      selectedIndex: Math.max(
        targetIndex < state.selectedIndex
          ? state.selectedIndex - 1
          : Math.min(state.selectedIndex, state.pictures.length - 2),
        0
      ),
      pictures: state.pictures.filter((_, index) => targetIndex !== index),
    })),
  deleteAllPictures: () => set(() => ({ selectedIndex: 0, pictures: [] })),
  changeSelectedIndex: (index) => set((state) => ({ selectedIndex: index })),
}));
