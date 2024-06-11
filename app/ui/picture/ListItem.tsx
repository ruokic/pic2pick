import { IPicture } from "@/app/lib/types/picture";
import { ListItem } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store/usePictureStore";

interface PictureListItemProps {
  picture: IPicture;
  index: number;
}

export default function PictureListItem({
  picture,
  index,
}: PictureListItemProps) {
  const {
    selectedIndex,
    changeSelectedIndex,
    checkedIndexSet,
    checkIndex,
    uncheckIndex,
  } = usePictureStore();

  const handleToggleCheckIndex = () =>
    checkedIndexSet.has(index) ? uncheckIndex(index) : checkIndex(index);

  return (
    <ListItem selected={index === selectedIndex}>
      <input
        type="checkbox"
        checked={checkedIndexSet.has(index)}
        onChange={handleToggleCheckIndex}
      />
      <button className="truncate" onClick={() => changeSelectedIndex(index)}>
        {picture.name}
      </button>
    </ListItem>
  );
}
