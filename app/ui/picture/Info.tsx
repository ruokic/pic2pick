import { setDateString, setByteString } from "@/app/lib/utils";
import { downloadFile } from "@/app/lib/utils";
import { Button, Container, Text } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";

export default function PictureInfo() {
  const { pictures, selectedIndex, deletePicture } = usePictureStore();
  const picture = pictures[selectedIndex];

  return (
    <Container style="w-full min-h-60 h-1/3">
      <Text size="lg" weight="bold">
        사진 정보
      </Text>
      {picture ? (
        <>
          <div className="grid grid-cols-2 w-full gap-2">
            <div className="grid grid-cols-2">
              <Text>이름</Text>
              <Text>{picture.name}</Text>
              <Text>수정일자</Text>
              <Text>{setDateString(picture.lastModified)}</Text>
            </div>
            <div className="grid grid-cols-2">
              <Text>사진 크기</Text>
              <Text>{setByteString(picture.size)}</Text>
              <Text>사진 타입</Text>
              <Text>{picture.type}</Text>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-2">
            <Button
              primary
              label="다운로드"
              onClick={() => downloadFile(picture)}
            />
            <Button
              warning
              label="삭제"
              onClick={() => deletePicture(selectedIndex)}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
