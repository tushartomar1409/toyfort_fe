import { useRef, useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../style/ShopByAge.css";

function ShopByAge() {
    
 const { fetchProduct } = useContext(AppContext);
 const navigate = useNavigate();

  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  

  useEffect(() => {
    const updateVisibility = () => {
      setShowArrows(window.innerWidth < 1024);
    };
    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleSidebarByAge = (age) => {
    fetchProduct(age);
    navigate(`/products/age?age=${age}`);
  };

  const images = [
    { age: "0-18M", img: "1.png" },
    { age: "18-36M", img: "2.png" },
    { age: "3-5Y", img: "3.png" },
    { age: "5-8Y", img: "4.png" },
    { age: "8-12Y", img: "5.png" },
    { age: "12Y", img: "6.png" },
  ];

  return (
    <div className="relative w-full">
      <h1 className="flex justify-center items-center font-bold text-2xl mt-20 font-sans tracking-widest">
        SHOP BY AGE
      </h1>

      <div className="flex items-center mt-5 px-4">
        {showArrows && (
          <button
            onClick={() => scroll("left")}
            className="text-3xl px-2 font-bold hover:text-gray-500"
          >
            ‹
          </button>
        )}

        <div
          ref={scrollRef}
          className={`scroll-container flex-1 ${
            showArrows ? "overflow-x-auto" : "overflow-x-hidden"
          } whitespace-nowrap`}
        >
          <div className="flex">
            {images.map(({ age, img }) => (
              <img
                key={age}
                onClick={() => handleSidebarByAge(age)}
                className={`h-48 mx-6 cursor-pointer transform transition hover:scale-105 flex-shrink-0 ${
                  showArrows ? "w-1/3" : "w-[13.5%]"
                }`}
                src={`https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/${img}`}
                alt={age}
              />
            ))}
          </div>
        </div>

        {showArrows && (
          <button
            onClick={() => scroll("right")}
            className="text-3xl px-2 font-bold hover:text-gray-500"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}

export default ShopByAge;
