import { create } from "zustand";
import { Picture } from "@/app/lib/types/picture";
import { setPreview } from "@/app/lib/utils/array";

interface PictureStore {
  pictures: Picture[];
  selectedIndex: number;
  addPictures: (newPictures: Picture[]) => void;
  deletePicture: (index: number) => void;
  deleteAllPictures: () => void;
  changeSelectedIndex: (index: number) => void;
}

export const usePictureStore = create<PictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  addPictures: (newPictures) =>
    set((state) => ({
      pictures: state.pictures.concat(setPreview(newPictures)),
    })),
  deletePicture: (targetIndex) =>
    set((state) => ({
      selectedIndex:
        targetIndex === state.selectedIndex
          ? Math.max(state.selectedIndex - 1, 0)
          : state.selectedIndex,
      pictures: state.pictures.filter((_, index) => targetIndex !== index),
    })),
  deleteAllPictures: () => set(() => ({ selectedIndex: 0, pictures: [] })),
  changeSelectedIndex: (index) => set((state) => ({ selectedIndex: index })),
}));
