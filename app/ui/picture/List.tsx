import PictureUploader from "@/app/ui/picture/Uploader";
import PictureListItem from "@/app/ui/picture/ListItem";
import { Button, Container, List, Text } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";
import { downloadFile } from "@/app/lib/utils";

export default function PictureList() {
  const {
    pictures,
    deleteCheckedPictures,
    checkedIndexSet,
    checkAllIndex,
    uncheckAllIndex,
  } = usePictureStore();

  const handleClickDownload = () => {
    pictures.forEach((picture, index) => {
      if (checkedIndexSet.has(index)) downloadFile(picture);
    });
  };

  const handleToggleCheckAllIndex = () =>
    checkedIndexSet?.size < pictures?.length
      ? checkAllIndex()
      : uncheckAllIndex();

  return (
    <Container style="min-w-80 h-full">
      <div className="flex justify-between">
        <Text size="lg" weight="bold">
          사진 목록
        </Text>
        <PictureUploader />
      </div>
      {pictures.length > 0 ? (
        <>
          <div className="flex px-2 gap-2">
            <input
              id="checkall"
              type="checkbox"
              checked={pictures?.length === checkedIndexSet?.size}
              onChange={handleToggleCheckAllIndex}
            />
            <label htmlFor="checkall">
              <Text>전체 선택</Text>
            </label>
          </div>

          <List>
            {pictures.map((picture, index) => (
              <PictureListItem
                key={picture.preview}
                picture={picture}
                index={index}
              />
            ))}
          </List>
          <div className="flex flex-col gap-2 justify-self-end">
            <Button
              label="선택 다운로드"
              primary
              onClick={handleClickDownload}
              disabled={checkedIndexSet.size === 0}
            />
            <Button
              label="선택 삭제"
              warning
              onClick={deleteCheckedPictures}
              disabled={checkedIndexSet.size === 0}
            />
          </div>
        </>
      ) : (
        <div className="h-full flex flex-col justify-center items-center">
          <Text>사진이 없습니다</Text>
          <Text>새로 추가해 보세요</Text>
        </div>
      )}
    </Container>
  );
}
