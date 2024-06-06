import { Picture } from "@/app/lib/types/picture";
import { ListItem as Li } from "@/app/ui/common/ListItem";
import { usePictures } from "@/app/lib/hooks/usePictures";

interface ListItemProps {
  picture: Picture;
  index: number;
}

export default function ListItem({ picture, index }: ListItemProps) {
  const { selectedIndex, changeSelectedIndex, deletePicture } = usePictures();
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
