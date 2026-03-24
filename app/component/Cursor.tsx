"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[1] mix-blend-difference bg-white"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    >
      <div className={`rounded-full transition-all duration-200 w-4 h-4`} />
    </div>
  );
};

export default CustomCursor;
