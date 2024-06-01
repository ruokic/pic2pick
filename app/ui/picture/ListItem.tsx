import { Picture } from "@/app/lib/types/picture";

interface ListItemProps {
  picture: Picture;
  selected?: boolean;
  handleClick: () => void;
  handleDelete: () => void;
}

export default function ListItem({
  picture,
  selected = false,
  handleClick,
  handleDelete,
}) {
  return (
    <div
      className={[
        "rounded-full p-1 px-4 hover:bg-blue-100 flex justify-between",
        selected ? "bg-blue-300" : "",
      ].join(" ")}
    >
      <button onClick={handleClick}>{picture.name}</button>
      <button className="text-red-600" onClick={handleDelete}>
        x
      </button>
    </div>
  );
}
