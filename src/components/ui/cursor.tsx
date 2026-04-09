"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);
  const backgroundColor = useMotionValue("white");

  const smoothScale = useSpring(scale, { stiffness: 400, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 300, damping: 20 });

  const [zoomEl, setZoomEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const el = target.closest("[data-mouse]") as HTMLElement | null;

      const variant = el?.dataset.mouse;
      const color = el?.dataset.mouseColor;

      if (color) backgroundColor.set(color);
      else backgroundColor.set("white");

      switch (variant) {
        case "hidden":
          opacity.set(0);
          scale.set(1);
          setZoomEl(null);
          break;
        case "clickable":
          opacity.set(1);
          scale.set(1.8);
          setZoomEl(null);
          break;
        case "morph":
          opacity.set(0);
          scale.set(1);
          setZoomEl(null);
          break;
        case "zoom":
          opacity.set(0);
          setZoomEl(el);
          scale.set(1);
          break;
        default:
          opacity.set(1);
          scale.set(1);
          setZoomEl(null);
      }
    };

    const down = () => scale.set(0.4);
    const up = () => scale.set(1);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY, scale, opacity, backgroundColor]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 size-2 overflow-hidden rounded-full"
        style={{
          x,
          y,
          scale: smoothScale,
          opacity: smoothOpacity,
          backgroundColor,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {zoomEl && (
        <CursorZoom hoverEl={zoomEl} mouseX={mouseX} mouseY={mouseY} />
      )}
    </>
  );
};

type CursorZoomProps = {
  hoverEl: HTMLElement;
  mouseX: any;
  mouseY: any;
  zoomScale?: number;
  size?: number;
};

const CursorZoom = ({
  hoverEl,
  mouseX,
  mouseY,
  zoomScale = 2,
  size = 150,
}: CursorZoomProps) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 200, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 200, damping: 20 });

  const updateOffset = () => {
    const rect = hoverEl.getBoundingClientRect();
    const mx = mouseX.get();
    const my = mouseY.get();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = mx - centerX;
    const distY = my - centerY;

    offsetX.set(-distX * (zoomScale - 1));
    offsetY.set(-distY * (zoomScale - 1));
  };

  useMotionValueEffect(mouseX, updateOffset);
  useMotionValueEffect(mouseY, updateOffset);

  return (
    <motion.div
      style={{
        pointerEvents: "none",
        position: "fixed",
        left: mouseX.get() - size / 2,
        top: mouseY.get() - size / 2,
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 999999999,
        transform: "translate3d(0,0,0)",
      }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          scale: zoomScale,
          originX: 0,
          originY: 0,
        }}
        dangerouslySetInnerHTML={{ __html: hoverEl.innerHTML }}
      />
    </motion.div>
  );
};

function useMotionValueEffect(value: any, cb: () => void) {
  useEffect(() => {
    const unsubscribe = value.onChange(cb);
    return () => unsubscribe();
  }, [value, cb]);
}
