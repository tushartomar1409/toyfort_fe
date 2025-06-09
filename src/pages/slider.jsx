 import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

function Slider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  // Determine the number of slides to show at once based on screen width
  const getSlidesPerView = () => {
    if (width < 768) { // For phone screens (e.g., less than 768px)
      return 1;
    }
    if (width < 1024) { // For tablet screens (e.g., less than 1024px)
      return 2;
    }
    return 3; // For computer screens
  };

  const slidesPerView = getSlidesPerView();

  // useEffect to fetch slider data from the API
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get("http://localhost:5001/api");
        const validAndLimitedSlides = data.filter(slide => slide && slide.image).slice(2, 11);
        setSlides(validAndLimitedSlides);
        setCurrentIndex(0);
        console.log("Processed slides count:", validAndLimitedSlides.length);
      } catch (err) {
        console.error("Error fetching slider data:", err.message);
        setError("Failed to load slider data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlider();
  }, []);

  // Group slides based on the responsive slidesPerView
  const groupedSlides = [];
  if (slides && slides.length > 0) {
    for (let i = 0; i < slides.length; i += slidesPerView) {
      groupedSlides.push(slides.slice(i, i + slidesPerView));
    }
  }

  // Logic for automatic slide transition
  useEffect(() => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    if (groupedSlides.length > 1) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedSlides.length);
      }, 5000);
    }
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [groupedSlides.length]);

  const handleProducts = (productLink) => {
    if (productLink) {
      try {
        const url = new URL(productLink);
        if (url.origin === window.location.origin) {
          navigate(url.pathname + url.search);
        } else {
          window.open(productLink, '_blank', 'noopener,noreferrer');
        }
      } catch (e) {
        navigate(productLink);
      }
    }
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + groupedSlides.length) % groupedSlides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedSlides.length);
  };

  if (loading) {
    return (
      <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 bg-red-100 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-gray-700">No slides available</div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-slate-200 p-3 relative overflow-hidden rounded-lg shadow-md">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {groupedSlides.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full flex-shrink-0 flex justify-center space-x-3 h-full items-center"
          >
            {group.map((slide) => (
              slide && slide.id && slide.image ? (
                <a
                  onClick={() => handleProducts(slide.link || `/products/${slide.id}`)}
                  key={slide.id}
                  className="flex-1 cursor-pointer flex flex-col justify-center items-center h-full p-2"
                >
                  <img
                    className="w-full h-full object-contain rounded-lg shadow-md min-h-0"
                    src={slide.image}
                    alt={slide.title || `Slide ${slide.id}`}
                    onError={(e) => { e.target.src = 'https://placehold.co/300x200/cccccc/333333?text=Image+Error'; }}
                  />
                </a>
              ) : (
                <div key={`placeholder-${groupIndex}-${slide?.id || Math.random()}`} className="flex-1 flex justify-center items-center h-full p-2 bg-gray-300 rounded-lg shadow-md">
                  <p className="text-gray-600 text-sm text-center">Image unavailable</p>
                </div>
              )
            ))}
          </div>
        ))}
      </div>

      {groupedSlides.length > 1 && (
        <>
        <div
          onClick={goToPrevSlide}
          className="absolute z-10 left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ❮
        </div>
        <div
          onClick={goToNextSlide}
          className="absolute z-10 right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ❯
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {groupedSlides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
        </>
      )}
    </div>
  );
}

export default Slider;