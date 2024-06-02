import { useRef } from "react";

export function useHeightResizer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    const div1minHeight = parseFloat(window.getComputedStyle(div1).minHeight);
    const div2minHeight = parseFloat(window.getComputedStyle(div2).minHeight);

    const newDiv1Height = e.clientY - containerRect.top;
    const newDiv2Height = div2Rect.bottom - e.clientY;
    if (newDiv1Height < div1minHeight) return;
    if (newDiv2Height < div2minHeight) return;
    div1.style.height = `${newDiv1Height}px`;
    div2.style.height = `${newDiv2Height}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { containerRef, handleMouseDown };
}
