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
  const defaultStyle = "bg-gray-200";
  const styleByType = type === "vertical" ? "w-1" : "h-1";
  const styleByResizable = resizable
    ? "hover-bg-blue-300 " +
      (type === "vertical" ? "cursor-col-resize" : "cursor-row-resize")
    : "";
  return (
    <div
      className={[defaultStyle, styleByType, styleByResizable].join(" ")}
      onMouseDown={onMouseDown}
    />
  );
}
