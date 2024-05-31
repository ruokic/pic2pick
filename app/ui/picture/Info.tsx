import { Picture } from "@/app/lib/types/picture";
import { setDateString, setByteString } from "@/app/lib/utils/string";

interface InfoProps {
  picture: Picture;
}

export default function Info({ picture }: InfoProps) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div>사진 정보</div>
      {picture ? (
        <div>
          <div>이름 : {picture.name}</div>
          <div>수정일자 : {setDateString(picture.lastModified)}</div>
          <div>사진 크기 : {setByteString(picture.size)}</div>
          <div>사진 타입 : {picture.type}</div>
        </div>
      ) : null}
    </div>
  );
}
