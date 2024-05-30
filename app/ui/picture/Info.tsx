import { Picture } from "@/app/types/picture";

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
          <div>
            마지막 수정일자 : {new Date(picture.lastModified).toLocaleString()}
          </div>
          <div>사진 크기 : {picture.size}</div>
          <div>사진 타입 : {picture.type}</div>
        </div>
      ) : null}
    </div>
  );
}
