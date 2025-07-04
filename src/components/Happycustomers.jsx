import React, { useRef, useState, useEffect } from "react";

const videos = [
  "https://www.youtube.com/embed/6pTWjAc8Qak",
  "https://www.youtube.com/embed/OpYrZhTljYw",
  "https://www.youtube.com/embed/g6pt7ssWfVU",
  "https://www.youtube.com/embed/7HkpkhPn_Yk",
  "https://www.youtube.com/embed/ePcuHyylCwQ",
  "https://www.youtube.com/embed/TVNj43RClOs",
  "https://www.youtube.com/embed/mjWRoeBkV7c",
];

const Happycustomers = () => {
  const carouselRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (scrollDirection === "right") {
        if (currentScroll >= maxScroll - 10) {
          setScrollDirection("left");
        } else {
          scroll("right");
        }
      } else {
        if (currentScroll <= 10) {
          setScrollDirection("right");
        } else {
          scroll("left");
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollDirection, isPaused]);

  return (
    <div className="relative px-6 py-10 bg-gray-50">
      <h1 className="text-center text-4xl font-bold text-gray-700 mb-6">
        Happy Customers
      </h1>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        aria-label="Scroll Left"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        aria-label="Scroll Right"
      >
        ▶
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-1"
      >
        {videos.map((src, idx) => {
          const cleanSrc = src.trim();
          const isHovered = hoveredIndex === idx;
          const hoverSrc = `${cleanSrc}?autoplay=1&mute=1&playsinline=1`;

          return (
            <div
              key={idx}
              className="min-w-[270px] max-w-[270px] overflow-hidden bg-white rounded-lg shadow-md flex-shrink-0 transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsPaused(false);
              }}
            >
              <iframe
                width="270"
                height="480"
                src={isHovered ? hoverSrc : cleanSrc}
                title={`YouTube Short ${idx}`}
                frameBorder="0"
                allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Happycustomers;
