import { Picture } from "@/app/lib/types/picture";

interface ListItemProps {
  picture: Picture;
  selected?: boolean;
  handleClick: () => void;
  handleRemove: () => void;
}

export default function ListItem({
  picture,
  selected = false,
  handleClick,
  handleRemove,
}) {
  return (
    <div
      className={[
        "rounded-full p-1 px-4 hover:bg-blue-100 flex justify-between",
        selected ? "bg-blue-300" : "",
      ].join(" ")}
    >
      <button onClick={handleClick}>{picture.name}</button>
      <button className="text-red-600" onClick={handleRemove}>
        x
      </button>
    </div>
  );
}
