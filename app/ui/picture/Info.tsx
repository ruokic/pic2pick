import { setDateString, setByteString } from "@/app/lib/utils/string";
import { downloadFile } from "@/app/lib/utils/file";
import { Button } from "@/app/ui/common/Button";
import { Container } from "@/app/ui/common/Container";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function Info() {
  const { pictures, selectedIndex } = usePictures();
  const picture = pictures[selectedIndex];

  return (
    <Container style="min-w-80">
      <div>사진 정보</div>
      {picture ? (
        <div className="flex flex-col w-full gap-2">
          <div>이름 : {picture.name}</div>
          <div>수정일자 : {setDateString(picture.lastModified)}</div>
          <div>사진 크기 : {setByteString(picture.size)}</div>
          <div>사진 타입 : {picture.type}</div>
          <Button
            primary
            label="다운로드"
            size="small"
            onClick={() => downloadFile(picture)}
          />
        </div>
      ) : null}
    </Container>
  );
}
