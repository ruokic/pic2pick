"use client";
import { useRef } from "react";

interface IResizer {
  direction?: "vertical" | "horizontal";
}

export function useResizer<IResizer>(direction = "vertical") {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const [div1, resizer, div2] = Array.from(
      containerRef.current.childNodes
    ) as HTMLDivElement[];

    const containerRect = containerRef.current.getBoundingClientRect();
    const div2Rect = div2.getBoundingClientRect();

    if (direction === "vertical") {
      const div1minWidth = parseFloat(window.getComputedStyle(div1).minWidth);
      const div2minWidth = parseFloat(window.getComputedStyle(div2).minWidth);

      const newDiv1Width = e.clientX - containerRect.left;
      const newDiv2Width = div2Rect.right - e.clientX;
      if (newDiv1Width < div1minWidth) return;
      if (newDiv2Width < div2minWidth) return;
      div1.style.width = `${newDiv1Width}px`;
      div2.style.width = `${newDiv2Width}px`;
    } else {
      const div1minHeight = parseFloat(window.getComputedStyle(div1).minHeight);
      const div2minHeight = parseFloat(window.getComputedStyle(div2).minHeight);

      const newDiv1Height = e.clientY - containerRect.top;
      const newDiv2Height = div2Rect.bottom - e.clientY;
      if (newDiv1Height < div1minHeight) return;
      if (newDiv2Height < div2minHeight) return;
      div1.style.height = `${newDiv1Height}px`;
      div2.style.height = `${newDiv2Height}px`;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { containerRef, handleMouseDown };
}
