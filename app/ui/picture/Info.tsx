import Link from "next/link";
import { useState, useRef } from "react";
import { setDateString, setByteString } from "@/app/lib/utils";
import {
  Button,
  Container,
  IconButton,
  InputText,
  Text,
} from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";
import { ArrowDownTrayIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function PictureInfo() {
  const [isEditMode, setIsEditMode] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { pictures, selectedKey, deletePicture, updatePicture } =
    usePictureStore();
  const picture = pictures.find(({ key }) => key === selectedKey);

  const handleToggleEditMode = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    }
    const newName = nameInputRef.current?.value;
    if (newName && newName !== picture?.name) {
      updatePicture(picture!.editName(newName));
    }
    setIsEditMode(false);
  };

  return picture ? (
    <Container style="w-full min-h-60 h-1/3">
      <div className="flex justify-between items-center w-full">
        <InputText
          ref={nameInputRef}
          isFocus={isEditMode}
          placeholder={picture.name}
          defaultValue={picture.name}
          onFocus={handleToggleEditMode}
          onBlur={handleToggleEditMode}
        />
        <div className="flex gap-4">
          <Link
            className="flex items-center"
            href={picture.preview}
            target="_blank"
            download={picture.name}
          >
            <IconButton
              icon={<ArrowDownTrayIcon className="size-6 text-black" />}
            />
          </Link>
          <IconButton
            icon={<TrashIcon className="size-6 text-red-500" />}
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
    </Container>
  ) : (
    <></>
  );
}
