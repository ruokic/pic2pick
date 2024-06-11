import { create } from "zustand";
import { Picture } from "@/app/lib/classes/Picture";
import { IPicture } from "@/app/lib/types/picture";
import { setPreview } from "@/app/lib/utils/array";

interface IPictureStore {
  pictures: IPicture[];
  selectedIndex: number;
  checkedIndexSet: Set<number>;

  addPictures: (fileList: FileList) => void;

  deletePicture: (targetIndex: number) => void;
  deleteCheckedPictures: () => void;
  deleteAllPictures: () => void;

  changeSelectedIndex: (targetIndex: number) => void;

  checkIndex: (targetIndex: number) => void;
  checkAllIndex: () => void;

  uncheckIndex: (targetIndex: number) => void;
  uncheckAllIndex: () => void;
}

const pictureActions = (set) => ({
  addPictures: (fileList) =>
    set((state) => ({
      selectedIndex: state.pictures.length + fileList.length - 1,
      pictures: state.pictures.concat(
        Array.from(fileList).map((newPicture) => new Picture(newPicture))
      ),
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
});

const indexActions = (set) => ({
  changeSelectedIndex: (targetIndex) =>
    set((state) => ({ selectedIndex: targetIndex })),
  checkIndex: (targetIndex) =>
    set((state) => {
      const newSet = new Set(state.checkedIndexSet);
      newSet.add(targetIndex);
      return { checkedIndexSet: newSet };
    }),
  checkAllIndex: () =>
    set((state) => ({
      checkedIndexSet: new Set(
        Array.from({ length: state.picture.length }, (_, index) => index)
      ),
    })),
  uncheckIndex: (targetIndex) =>
    set((state) => {
      const newSet = new Set(state.checkedIndexSet);
      newSet.delete(targetIndex);
      return { checkedIndexSet: newSet };
    }),
  uncheckAllIndex: () => set((state) => ({ checkedIndexSet: new Set() })),
});

export const usePictureStore = create<IPictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  checkedIndexSet: new Set(),
  ...pictureActions(set),
  ...indexActions(set),
}));
