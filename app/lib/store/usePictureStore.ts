import { create, SetState } from "zustand";
import { ImmutableSet, Picture } from "@/app/lib/classes";
import { convertFileListToPictures } from "@/app/lib/utils";

interface IPictureState {
  pictures: Picture[];
  selectedKey: symbol;
  checkedKeySet: ImmutableSet<symbol>;
}

interface IPictureActions {
  addPictures: (fileList: FileList) => void;

  deletePicture: (targetKey: symbol) => void;
  deleteCheckedPictures: () => void;
  deleteAllPictures: () => void;
}

interface IKeyActions {
  changeSelectedKey: (targetKey: symbol) => void;

  checkKey: (targetKey: symbol) => void;
  checkAllKey: (pictures: Picture[]) => void;

  uncheckKey: (targetKey: symbol) => void;
  uncheckAllKey: () => void;
}

interface IPictureStore extends IPictureState, IPictureActions, IKeyActions {}

const pictureActions = (set: SetState<IPictureState>): IPictureActions => ({
  addPictures: (fileList) =>
    set((state) => ({
      pictures: state.pictures.concat(convertFileListToPictures(fileList)),
    })),
  deletePicture: (targetKey) =>
    set((state) => ({
      pictures: state.pictures.filter((picture) => targetKey !== picture.key),
    })),
  deleteCheckedPictures: () =>
    set((state) => ({
      pictures: state.pictures.filter(
        ({ key }) => !state.checkedKeySet.has(key)
      ),
      checkedKeySet: state.checkedKeySet.toCleared(),
    })),
  deleteAllPictures: () =>
    set((state) => ({
      pictures: [],
      checkedKeySet: state.checkedKeySet.toCleared(),
    })),
});

const keyActions = (set: SetState<IPictureState>): IKeyActions => ({
  changeSelectedKey: (targetKey) =>
    set((state) => ({ selectedKey: targetKey })),
  checkKey: (targetKey) =>
    set((state) => ({
      checkedKeySet: state.checkedKeySet.toAdded(targetKey),
    })),
  checkAllKey: (pictures) =>
    set((state) => ({
      checkedKeySet: state.checkedKeySet.toFilled(
        pictures.map(({ key }) => key)
      ),
    })),
  uncheckKey: (targetKey) =>
    set((state) => ({
      checkedKeySet: state.checkedKeySet.toDeleted(targetKey),
    })),
  uncheckAllKey: () =>
    set((state) => ({ checkedKeySet: state.checkedKeySet.toCleared() })),
});

export const usePictureStore = create<IPictureStore>((set) => ({
  pictures: [],
  selectedKey: Symbol(),
  checkedKeySet: new ImmutableSet(),
  ...pictureActions(set),
  ...keyActions(set),
}));
