import { useRef } from "react";

export function useWidthResizer() {
  const containerRef = useRef<HTMLElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const [div1, resizer, div2] = Array.from(
      containerRef.current.childNodes
    ) as HTMLElement[];

    const containerRect = containerRef.current.getBoundingClientRect();
    const div2Rect = div2.getBoundingClientRect();
    const div1minWidth = parseFloat(window.getComputedStyle(div1).minWidth);
    const div2minWidth = parseFloat(window.getComputedStyle(div2).minWidth);

    const newDiv1Width = e.clientX - containerRect.left;
    const newDiv2Width = div2Rect.right - e.clientX;
    if (newDiv1Width < div1minWidth) return;
    if (newDiv2Width < div2minWidth) return;
    div1.style.width = `${newDiv1Width}px`;
    div2.style.width = `${newDiv2Width}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { containerRef, handleMouseDown };
}
