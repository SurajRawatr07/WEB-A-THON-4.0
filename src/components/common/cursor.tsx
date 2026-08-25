"use client";

import React, { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { CursorContext } from "@/context/cursor-context";

const DystopianCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { damping: 28, stiffness: 260, mass: 0.45 });
  const ringY = useSpring(cursorY, { damping: 28, stiffness: 260, mass: 0.45 });
  const { isHovered, setIsHovered } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setIsHovered(Boolean(target.closest("a, button, [role='button']")));
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerover", handlePointerOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [cursorX, cursorY, setIsHovered]);

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed z-50 h-8 w-8 rounded-full border border-amber-50 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovered ? 2.3 : 1, rotate: isHovered ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute left-1/2 top-[-5px] h-2 w-px -translate-x-1/2 bg-amber-50" />
        <span className="absolute bottom-[-5px] left-1/2 h-2 w-px -translate-x-1/2 bg-amber-50" />
        <span className="absolute left-[-5px] top-1/2 h-px w-2 -translate-y-1/2 bg-amber-50" />
        <span className="absolute right-[-5px] top-1/2 h-px w-2 -translate-y-1/2 bg-amber-50" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovered ? 1.6 : 1 }}
      />
    </>
  );
};

export default DystopianCursor;
