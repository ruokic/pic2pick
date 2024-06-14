import { setDateString, setByteString } from "@/app/lib/utils";
import { downloadFile } from "@/app/lib/utils";
import { Button, Container, Text } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";
import Link from "next/link";
export default function PictureInfo() {
  const { pictures, selectedKey, deletePicture, updatePicture } =
    usePictureStore();
  const picture = pictures.find(({ key }) => key === selectedKey);

  return (
    <Container style="w-full min-h-60 h-1/3">
      {picture ? (
        <>
          <div className="flex justify-between w-full">
            <Text size="lg" weight="bold">
              {picture.name}
            </Text>
            <div className="flex gap-2">
              <Link
                href={picture.preview}
                target="_blank"
                download={picture.name}
              >
                <Button primary label="다운로드" />
              </Link>
              <Button
                warning
                label="삭제"
                onClick={() => deletePicture(selectedKey)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-2">
            <Text>사진 크기</Text>
            <Text>{setByteString(picture.size)}</Text>
            <Text>사진 타입</Text>
            <Text>{picture.type}</Text>
            <Text>수정 일자</Text>
            <Text>{setDateString(picture.lastModified)}</Text>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
