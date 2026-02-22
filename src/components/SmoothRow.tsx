import React, { useRef } from "react";

type SmoothRowProps = {
  children: React.ReactNode;
};
const SmoothRow = ({ children }: SmoothRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    const scrollAmount = rowRef.current.clientWidth * 0.8;

    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative group">
      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-0 h-full w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition z-10"
      >
        ◀
      </button>

      {/* SCROLL ROW */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-hidden scroll-smooth scrollbar-hide w-full "
      >
        {children}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-0 h-full w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default SmoothRow;
