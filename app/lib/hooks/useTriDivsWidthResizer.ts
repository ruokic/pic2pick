import { useRef } from "react";

export function useTriDivsWidthResizer() {
  const containerRef = useRef<HTMLElement | null>(null);
  const currentResizer = useRef<HTMLElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    currentResizer.current = e.target;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || !currentResizer.current) return;
    const [div1, resizer1, div2, resizer2, div3] = Array.from(
      containerRef.current.childNodes
    ) as HTMLElement[];

    const containerRect = containerRef.current.getBoundingClientRect();
    const div1Rect = div1.getBoundingClientRect();
    const div2Rect = div2.getBoundingClientRect();
    const div3Rect = div3.getBoundingClientRect();
    const div1minWidth = window.getComputedStyle(div1).minWidth;
    const div2minWidth = window.getComputedStyle(div2).minWidth;
    const div3minWidth = window.getComputedStyle(div3).minWidth;

    if (currentResizer.current === resizer1) {
      const newDiv1Width = e.clientX - containerRect.left;
      const newDiv2Width = div2Rect.right - e.clientX;
      if (newDiv1Width < div1minWidth) return;
      if (newDiv2Width < div2minWidth) return;
      div1.style.width = `${newDiv1Width}px`;
      div2.style.width = `${newDiv2Width}px`;
    } else if (currentResizer.current === resizer2) {
      const newDiv2Width =
        e.clientX - div1Rect.width - containerRect.left - resizer1.offsetWidth;
      const newDiv3Width = containerRect.right - e.clientX;
      if (newDiv2Width < div2minWidth) return;
      if (newDiv3Width < div3minWidth) return;
      div2.style.width = `${newDiv2Width}px`;
      div3.style.width = `${newDiv3Width}px`;
    }
  };

  const handleMouseUp = () => {
    currentResizer.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { containerRef, handleMouseDown };
}
