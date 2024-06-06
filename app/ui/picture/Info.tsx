import { setDateString, setByteString } from "@/app/lib/utils/string";
import { downloadFile } from "@/app/lib/utils/file";
import { Button } from "@/app/ui/common/Button";
import { Container } from "@/app/ui/common/Container";
import { Text } from "@/app/ui/common/Text";
import { usePictureStore } from "@/app/lib/store/usePictureStore";

export default function Info() {
  const { pictures, selectedIndex } = usePictureStore();
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
          <Button
            primary
            label="다운로드"
            onClick={() => downloadFile(picture)}
          />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
