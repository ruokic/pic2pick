import { Picture } from "@/app/lib/classes";
import { ListItem } from "@/app/ui/components";
import { usePictureStore } from "@/app/lib/store";

interface PictureListItemProps {
  picture: Picture;
}

export default function PictureListItem({
  picture: { key, name },
}: PictureListItemProps) {
  const {
    selectedKey,
    changeSelectedKey,
    checkedKeySet,
    checkKey,
    uncheckKey,
  } = usePictureStore();

  const handleToggleCheckKey = () =>
    checkedKeySet.has(key) ? uncheckKey(key) : checkKey(key);

  return (
    <ListItem selected={key === selectedKey}>
      <input
        type="checkbox"
        checked={checkedKeySet.has(key)}
        onChange={handleToggleCheckKey}
      />
      <button className="truncate" onClick={() => changeSelectedKey(key)}>
        {name}
      </button>
    </ListItem>
  );
}
