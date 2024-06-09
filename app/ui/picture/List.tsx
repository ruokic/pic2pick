import Uploader from "@/app/ui/picture/Uploader";
import ListItem from "@/app/ui/picture/ListItem";
import {
  Button,
  Container,
  List as PictureList,
  Text,
} from "@/app/ui/components";
import { Picture } from "@/app/lib/types/picture";
import { usePictureStore } from "@/app/lib/store/usePictureStore";
import { downloadFile } from "@/app/lib/utils/file";

export default function List() {
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

  return (
    <Container style="min-w-80 h-full">
      <div className="flex justify-between">
        <Text size="lg" weight="bold">
          사진 목록
        </Text>
        <Uploader />
      </div>
      <div className="flex px-2 gap-2">
        <input
          id="checkall"
          type="checkbox"
          checked={pictures?.length === checkedIndexSet?.size}
          onChange={() =>
            checkedIndexSet?.size < pictures?.length
              ? checkAllIndex()
              : uncheckAllIndex()
          }
        />
        <label htmlFor="checkall">
          <Text>전체 선택</Text>
        </label>
      </div>
      <PictureList>
        {pictures.map((picture, index) => (
          <ListItem key={picture.preview} picture={picture} index={index} />
        ))}
      </PictureList>
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
    </Container>
  );
}
