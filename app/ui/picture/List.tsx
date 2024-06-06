import Uploader from "@/app/ui/picture/Uploader";
import ListItem from "@/app/ui/picture/ListItem";
import { Container } from "@/app/ui/common/Container";
import { List as PictureList } from "@/app/ui/common/List";
import { Text } from "@/app/ui/common/Text";
import { Button } from "@/app/ui/common/Button";
import { Picture } from "@/app/lib/types/picture";
import { usePictures } from "@/app/lib/hooks/usePictures";

export default function List() {
  const { pictures, deleteAllPictures } = usePictures();

  return (
    <Container style="min-w-80">
      <div className="flex justify-between">
        <Text size="lg" weight="bold">
          사진 목록
        </Text>
        <Uploader />
      </div>
      <PictureList>
        {pictures.map((picture, index) => (
          <ListItem key={picture.preview} picture={picture} index={index} />
        ))}
      </PictureList>
      {pictures.length > 0 ? (
        <Button label="전체 삭제" warning onClick={deleteAllPictures} />
      ) : (
        <></>
      )}
    </Container>
  );
}
