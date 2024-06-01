import { Picture } from "@/app/lib/types/picture";

interface ListItemProps {
  picture: Picture;
  selected?: boolean;
  handleClick: () => void;
}

export default function ListItem({ picture, selected = false, handleClick }) {
  return (
    <button
      className={[
        "rounded-full p-1 hover:bg-blue-100",
        selected ? "bg-blue-300" : "",
      ].join(" ")}
      onClick={handleClick}
    >
      {picture.name}
    </button>
  );
}
