import { Picture } from "@/app/lib/types/picture";
import { ListItem as Li } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store/usePictureStore";

interface ListItemProps {
  picture: Picture;
  index: number;
}

export default function ListItem({ picture, index }: ListItemProps) {
  const {
    selectedIndex,
    changeSelectedIndex,
    checkedIndexSet,
    checkIndex,
    uncheckIndex,
  } = usePictureStore();
  return (
    <Li selected={index === selectedIndex}>
      <input
        type="checkbox"
        checked={checkedIndexSet.has(index)}
        onChange={() =>
          checkedIndexSet.has(index) ? uncheckIndex(index) : checkIndex(index)
        }
      />
      <button className="truncate" onClick={() => changeSelectedIndex(index)}>
        {picture.name}
      </button>
    </Li>
  );
}
