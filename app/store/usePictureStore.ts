import { create } from "zustand";
import { Picture } from "@/app/types/picture";

interface PictureStore {
  pictures: Picture[];
  selectedIndex: number;
  addPictures: (newPictures: Picture[]) => void;
  changeSelectedIndex: (index: number) => void;
}

export const usePictureStore = create<PictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  addPictures: (newPictures) =>
    set((state) => ({ pictures: state.pictures.concat(newPictures) })),
  changeSelectedIndex: (index) => set((state) => ({ selectedIndex: index })),
}));
