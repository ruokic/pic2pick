import { create, SetState } from "zustand";
import { ImmutableSet, Picture } from "@/app/lib/classes";
import { IPicture } from "@/app/lib/types";

interface IPictureState {
  pictures: IPicture[];
  selectedIndex: number;
  checkedIndexSet: ImmutableSet<number>;
}

interface IPictureActions {
  addPictures: (fileList: FileList) => void;

  deletePicture: (targetIndex: number) => void;
  deleteCheckedPictures: () => void;
  deleteAllPictures: () => void;
}

interface IIndexActions {
  changeSelectedIndex: (targetIndex: number) => void;

  checkIndex: (targetIndex: number) => void;
  checkAllIndex: (length: number) => void;

  uncheckIndex: (targetIndex: number) => void;
  uncheckAllIndex: () => void;
}

interface IPictureStore extends IPictureState, IPictureActions, IIndexActions {}

const pictureActions = (set: SetState<IPictureState>): IPictureActions => ({
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
      checkedIndexSet: state.checkedIndexSet.toCleared(),
    })),
  deleteAllPictures: () =>
    set((state) => ({
      selectedIndex: 0,
      pictures: [],
      checkedIndexSet: state.checkedIndexSet.toCleared(),
    })),
});

const indexActions = (set: SetState<IPictureState>): IIndexActions => ({
  changeSelectedIndex: (targetIndex) =>
    set((state) => ({ selectedIndex: targetIndex })),
  checkIndex: (targetIndex) =>
    set((state) => ({
      checkedIndexSet: state.checkedIndexSet.toAdded(targetIndex),
    })),
  checkAllIndex: (length) =>
    set((state) => ({
      checkedIndexSet: state.checkedIndexSet.fillWithContinuousNumber(length),
    })),
  uncheckIndex: (targetIndex) =>
    set((state) => ({
      checkedIndexSet: state.checkedIndexSet.toDeleted(targetIndex),
    })),
  uncheckAllIndex: () =>
    set((state) => ({ checkedIndexSet: state.checkedIndexSet.toCleared() })),
});

export const usePictureStore = create<IPictureStore>((set) => ({
  pictures: [],
  selectedIndex: 0,
  checkedIndexSet: new ImmutableSet(),
  ...pictureActions(set),
  ...indexActions(set),
}));
