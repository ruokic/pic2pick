import Uploader from "@/app/ui/picture/Uploader";
import ListItem from "@/app/ui/picture/ListItem";
import { Container } from "@/app/ui/common/Container";
import { Picture } from "@/app/lib/types/picture";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function List() {
  const { pictures, selectedIndex, changeSelectedIndex } = usePictures();

  return (
    <Container style="min-w-80">
      <div className="flex justify-between text-lg font-bold">
        사진 목록
        <Uploader />
      </div>
      <div className="flex flex-col m-2 overflow-y-auto">
        {pictures.map((picture, index) => (
          <ListItem
            key={picture.preview}
            picture={picture}
            selected={index === selectedIndex}
            handleClick={() => changeSelectedIndex(index)}
          />
        ))}
      </div>
    </Container>
  );
}
