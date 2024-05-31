import { useRef } from "react";

export function useTriDivsWidthResizer() {
  const containerRef = useRef();
  const currentResizer = useRef();

  const handleMouseDown = (e) => {
    currentResizer.current = e.target;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  const handleMouseMove = (e) => {
    if (!currentResizer.current) return;
    const [div1, resizer1, div2, resizer2, div3] = Array.from(
      containerRef.current.childNodes
    );

    const containerRect = containerRef.current.getBoundingClientRect();
    const div1Rect = div1.getBoundingClientRect();
    const div2Rect = div2.getBoundingClientRect();
    const div3Rect = div3.getBoundingClientRect();

    if (currentResizer.current === resizer1) {
      const newWidth = e.clientX - containerRect.left;
      div1.style.width = `${newWidth}px`;
      div2.style.width = `${div2Rect.right - e.clientX}px`;
    } else if (currentResizer.current === resizer2) {
      const newWidth =
        e.clientX - div1Rect.width - containerRect.left - resizer1.offsetWidth;
      div2.style.width = `${newWidth}px`;
      div3.style.width = `${containerRect.right - e.clientX}px`;
    }
  };

  const handleMouseUp = () => {
    currentResizer.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { containerRef, handleMouseDown };
}
