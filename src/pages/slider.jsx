import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

// Custom hook to get the current window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [autoplayIntervalId, setAutoplayIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  // Determine the number of slides to show at once based on screen width
  useEffect(() => {
    setSlidesPerView(width < 768 ? 1 : width < 1024 ? 2 : 3);
  }, [width]);

  // useEffect to fetch slider data from the API
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get("http://localhost:5001/api");
        const validAndLimitedSlides = data
          .filter((slide) => slide && slide.image)
          .slice(2, 11);
        setSlides(validAndLimitedSlides);
      } catch (err) {
        console.error("Error fetching slider data:", err.message);
        setError("Failed to load slider data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlider();
  }, []);

  // Conditionally group slides only for desktop/tablet view
  const itemsToRender =
    slidesPerView > 1
      ? slides.reduce((acc, item, index) => {
          const groupIndex = Math.floor(index / slidesPerView);
          if (!acc[groupIndex]) {
            acc[groupIndex] = [];
          }
          acc[groupIndex].push(item);
          return acc;
        }, [])
      : slides;

  // Reset currentIndex if the number of items changes (e.g., on resize)
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  // Logic for automatic slide transition
  useEffect(() => {
    if (autoplayIntervalId) {
      clearInterval(autoplayIntervalId);
    }

    if (itemsToRender.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsToRender.length);
      }, 5000);
      setAutoplayIntervalId(intervalId);
    }

    return () => {
      if (autoplayIntervalId) {
        clearInterval(autoplayIntervalId);
      }
    };
  }, [itemsToRender.length]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      resetTimeout();
      if (!isHovered) {
        goToNextSlide();
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isHovered]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleProducts = (productLink) => {
    if (productLink) {
      try {
        const url = new URL(productLink);
        if (url.origin === window.location.origin) {
          navigate(url.pathname + url.search);
        } else {
          window.open(productLink, "_blank", "noopener,noreferrer");
        }
      } catch (e) {
        navigate(productLink);
      }
    }
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + itemsToRender.length) % itemsToRender.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsToRender.length);
  };

  if (loading) {
    return (
      <div className="w-full my-8">
        <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
          <div className="text-xl text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full my-8">
        <div className="w-full h-96 bg-red-100 p-3 flex items-center justify-center rounded-lg shadow-md">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="w-full my-8">
        <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
          <div className="text-xl text-gray-700">No slides available</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full my-8 mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold uppercase tracking-wide text-center">
        Hot New Arrivals – Be the First to Own Them!
      </h2>
      <div className="w-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            height: "450px" // Adjusted height for slider container to contain fixed-size images
          }}
        >
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link || `/products/${slide.id}`}
              className="flex-grow-0 flex-shrink-0 cursor-pointer flex justify-center items-center"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <img
                src={slide.image}
                alt={slide.title || `Slide ${slide.id}`}
                style={{ height: "430px", width: "480px", borderRadius: "20px", objectFit: "contain", padding: "8px" }}
              />
            </a>
          ))}
        </div>

        {slidesPerView === 3 && itemsToRender.length > 1 && (
          <>
            <div
              onClick={goToPrevSlide}
              className="absolute z-10 left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              onClick={goToNextSlide}
              className="absolute z-10 right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </>
        )}

        {slidesPerView === 1 && itemsToRender.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {itemsToRender.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-red-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
