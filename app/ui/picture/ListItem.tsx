import { Picture } from "@/app/lib/types/picture";
import { ListItem as Li } from "@/app/ui/common/ListItem";
import { usePictureStore } from "@/app/lib/store/usePictureStore";

interface ListItemProps {
  picture: Picture;
  index: number;
}

export default function ListItem({ picture, index }: ListItemProps) {
  const { selectedIndex, changeSelectedIndex, deletePicture } =
    usePictureStore();
  return (
    <Li selected={index === selectedIndex}>
      <button className="truncate" onClick={() => changeSelectedIndex(index)}>
        {picture.name}
      </button>
      <button className="text-red-600" onClick={() => deletePicture(index)}>
        x
      </button>
    </Li>
  );
}
