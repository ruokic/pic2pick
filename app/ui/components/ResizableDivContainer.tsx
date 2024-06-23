import classNames from "classnames";
import { useResizer } from "@/app/lib/hooks";
import { Divider } from "@/app/ui/components";

interface ResizableDivContainerProps {
  style?: string;
  direction?: "vertical" | "horizontal";
  top?: JSX.Element;
  bottom?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
}

export function ResizableDivContainer({
  style = "",
  direction = "vertical",
  top,
  bottom,
  left,
  right,
}: ResizableDivContainerProps) {
  const { containerRef, handleMouseDown } = useResizer(direction);

  return (
    <div
      ref={containerRef}
      className={classNames(
        "flex",
        {
          "flex-col": direction === "horizontal",
        },
        style
      )}
    >
      {direction === "vertical" ? left : top}
      <Divider type={direction} resizable onMouseDown={handleMouseDown} />
      {direction === "vertical" ? right : bottom}
    </div>
  );
}
