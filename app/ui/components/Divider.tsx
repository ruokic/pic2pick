import classNames from "classnames";

interface DividerProps {
  type?: "vertical" | "horizontal";
  resizable?: boolean;
  onMouseDown?: (e: React.MouseEvent) => void;
}

export function Divider({
  type = "vertical",
  resizable = false,
  onMouseDown,
}: DividerProps) {
  return (
    <div
      className={classNames("bg-gray-200", {
        "w-1": type === "vertical",
        "h-1": type === "horizontal",

        "hover-bg-blue-300": resizable,
        "cursor-col-resize": resizable && type === "vertical",
        "cursor-row-resize": resizable && type === "horizontal",
      })}
      onMouseDown={onMouseDown}
    />
  );
}
