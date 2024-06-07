import { create } from "zustand";
import { Picture } from "@/app/lib/types/picture";
import { setPreview } from "@/app/lib/utils/array";

interface PictureStore {
  pictures: Picture[];
  selectedIndex: number;
  checkedIndexSet: Set<number>;

  addPictures: (newPictures: FileList) => void;

  deletePicture: (index: number) => void;
  deleteCheckedPictures: () => void;
  deleteAllPictures: () => void;

  changeSelectedIndex: (index: number) => void;

  checkIndex: (index: number) => void;
  checkAllIndex: () => void;

  uncheckIndex: (index: number) => void;
  uncheckAllIndex: () => void;
}

export const usePictureStore = create<PictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  checkedIndexSet: new Set(),
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
  deleteCheckedPictures: () =>
    set((state) => ({
      selectedIndex:
        state.selectedIndex -
        state.pictures.reduce(
          (acc, _, index) =>
            acc +
            (state.checkedIndexSet.has(index) && state.selectedIndex >= index
              ? 1
              : 0),
          0
        ),
      pictures: state.pictures.filter(
        (_, index) => !state.checkedIndexSet.has(index)
      ),
      checkedIndexSet: new Set(),
    })),
  deleteAllPictures: () => set(() => ({ selectedIndex: 0, pictures: [] })),
  changeSelectedIndex: (index) => set((state) => ({ selectedIndex: index })),
  checkIndex: (index) =>
    set((state) => {
      const newSet = new Set(state.checkedIndexSet);
      newSet.add(index);
      return { checkedIndexSet: newSet };
    }),
  checkAllIndex: () =>
    set((state) => ({
      checkedIndexSet: new Set(
        Array(state.pictures.length)
          .fill(null)
          .map((_, i) => i)
      ),
    })),
  uncheckIndex: (index) =>
    set((state) => {
      const newSet = new Set(state.checkedIndexSet);
      newSet.delete(index);
      return { checkedIndexSet: newSet };
    }),
  uncheckAllIndex: () => set((state) => ({ checkedIndexSet: new Set() })),
}));
