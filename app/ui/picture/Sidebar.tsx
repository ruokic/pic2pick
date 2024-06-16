import PictureFileInput from "@/app/ui/picture/FileInput";
import PictureList from "@/app/ui/picture/List";
import { Container, Text } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";

export default function PictureSidebar() {
  return (
    <Container style="min-w-80 h-full w-80">
      <div className="flex justify-between">
        <Text size="lg" weight="bold">
          사진 목록
        </Text>
        <PictureFileInput />
      </div>
      <PictureList />
    </Container>
  );
}
