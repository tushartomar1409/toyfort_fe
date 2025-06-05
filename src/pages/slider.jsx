 import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage current slide index
  const slideIntervalRef = useRef(null); // Ref to store the interval ID

  const navigate = useNavigate();

  // useEffect to fetch slider data from the API
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        setError(null); // Clear any previous errors

        // Fetch data from the local API endpoint
        const { data } = await axios.get("http://localhost:5000/api");

        // Filter out slides that do not have a valid 'image' URL
        // Then, limit the number of slides to a maximum of 9 (or adjust as needed)
        const validAndLimitedSlides = data.filter(slide => slide && slide.image).slice(2, 11);
        setSlides(validAndLimitedSlides); // Update the slides state with only valid and limited slides
        setCurrentIndex(0); // Reset current index when new slides are loaded
        console.log("Processed slides count:", validAndLimitedSlides.length); // Log the count for debugging
      } catch (err) {
        console.error("Error fetching slider data:", err.message);
        setError("Failed to load slider data. Please try again later."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch attempt (success or failure)
      }
    };

    fetchSlider(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Group slides into sets of three for display in the carousel
  // This is a derived state that updates whenever 'slides' changes
  const groupedSlides = [];
  if (slides && slides.length > 0) { // Ensure slides array is not empty before grouping
    for (let i = 0; i < slides.length; i += 3) {
      groupedSlides.push(slides.slice(i, i + 3));
    }
  }

  // Logic for automatic slide transition
  useEffect(() => {
    // Clear any existing interval to prevent multiple intervals running
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }

    // Only set interval if there are multiple grouped slides to transition between
    if (groupedSlides.length > 1) {
      // Increased interval to 5000ms (5 seconds) for slower transition
      slideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % groupedSlides.length
        );
      }, 5000); // Slide every 5 seconds
    }

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [groupedSlides.length]); // Dependency ensures re-run when the number of grouped slides changes

  // Handler for when a product (slide image) is clicked
  const handleProducts = (productLink) => {
    // Navigate to the product detail page using the productLink
    if (productLink) {
      // Extract path from the full URL if it's an external link, or navigate directly
      try {
        const url = new URL(productLink);
        // If it's a local path, navigate directly. Otherwise, open in new tab.
        if (url.origin === window.location.origin) {
          navigate(url.pathname + url.search);
        } else {
          window.open(productLink, '_blank', 'noopener,noreferrer');
        }
      } catch (e) {
        // Fallback for relative paths or invalid URLs
        navigate(productLink);
      }
    }
  };

  // Navigate to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + groupedSlides.length) % groupedSlides.length
    );
  };

  // Navigate to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % groupedSlides.length
    );
  };

  // Render loading state
  if (loading) {
    return (
      <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="w-full h-96 bg-red-100 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  // Render message if no slides are available after loading
  if (!slides.length) {
    return (
      <div className="w-full h-96 bg-slate-200 p-3 flex items-center justify-center rounded-lg shadow-md">
        <div className="text-xl text-gray-700">No slides available</div>
      </div>
    );
  }

  return (
    // Main container for the custom carousel, with responsive height and relative positioning
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-slate-200 p-3 relative overflow-hidden rounded-lg shadow-md">
      {/* Carousel content container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Apply transform for sliding effect
      >
        {/* Map over grouped slides to create individual carousel items */}
        {groupedSlides.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full flex-shrink-0 flex justify-center space-x-3 h-full items-center" // flex-shrink-0 ensures slides don't shrink
          >
            {/* Map over each slide within the group */}
            {group.map((slide) => (
              // Ensure slide.id and slide.image exist before rendering
              slide && slide.id && slide.image ? (
                <a
                  onClick={() => handleProducts(slide.link || `/products/${slide.id}`)} // Use slide.link if available, otherwise a generic product ID path
                  key={slide.id}
                  className="flex-1 cursor-pointer flex flex-col justify-center items-center h-full p-2" // Added p-2 for internal padding
                >
                  <img
                    // Adjusted image styling for responsiveness and to fit three images per slide
                    className="w-full h-full object-contain rounded-lg shadow-md min-h-0" // Added min-h-0
                    src={slide.image} // Use slide.image as per your API response
                    alt={slide.title || `Slide ${slide.id}`} // Use slide.title for alt text if available
                    onError={(e) => { e.target.src = 'https://placehold.co/300x200/cccccc/333333?text=Image+Error'; }} // Fallback on error
                  />
                </a>
              ) : (
                // This fallback should rarely be hit now due to filtering, but kept for robustness
                <div key={`placeholder-${groupIndex}-${slide?.id || Math.random()}`} className="flex-1 flex justify-center items-center h-full p-2 bg-gray-300 rounded-lg shadow-md">
                  <p className="text-gray-600 text-sm text-center">Image unavailable</p>
                </div>
              )
            ))}
          </div>
        ))}
      </div>

      {/* Left control button */}
      {groupedSlides.length > 1 && (
        <div
          onClick={goToPrevSlide}
          className="absolute z-10 left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ❮
        </div>
      )}

      {/* Right control button */}
      {groupedSlides.length > 1 && (
        <div
          onClick={goToNextSlide}
          className="absolute z-10 right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ❯
        </div>
      )}

      {/* Indicators (dots) */}
      {groupedSlides.length > 1 && (
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
      )}
    </div>
  );
}

export default Slider;
