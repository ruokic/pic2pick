import PictureListItem from "@/app/ui/picture/ListItem";
import { Button, List, Text } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";
import { downloadZipFile } from "@/app/lib/utils";

export default function PictureList() {
  const {
    pictures,
    deleteCheckedPictures,
    checkedKeySet,
    checkAllKey,
    uncheckAllKey,
  } = usePictureStore();

  const handleClickDownload = () => {
    downloadZipFile(
      pictures.filter((picture) => checkedKeySet.has(picture.key)),
      "files"
    );
  };

  const handleToggleCheckAllKey = () =>
    checkedKeySet?.size < pictures?.length
      ? checkAllKey(pictures)
      : uncheckAllKey();

  return pictures.length > 0 ? (
    <>
      <div className="flex px-2 gap-2">
        <input
          id="checkall"
          type="checkbox"
          checked={pictures?.length === checkedKeySet?.size}
          onChange={handleToggleCheckAllKey}
        />
        <label htmlFor="checkall">
          <Text>전체 선택</Text>
        </label>
      </div>
      <List>
        {pictures.map((picture) => (
          <PictureListItem key={picture.preview} picture={picture} />
        ))}
      </List>
      <div className="flex flex-col gap-2 justify-self-end">
        <Button
          label="선택 다운로드"
          primary
          onClick={handleClickDownload}
          disabled={checkedKeySet.size === 0}
        />
        <Button
          label="선택 삭제"
          warning
          onClick={deleteCheckedPictures}
          disabled={checkedKeySet.size === 0}
        />
      </div>
    </>
  ) : (
    <div className="h-full flex flex-col justify-center items-center">
      <Text>사진이 없습니다</Text>
      <Text>새로 추가해 보세요</Text>
    </div>
  );
}
