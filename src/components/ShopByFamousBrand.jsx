import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const brandImages = [
  "https://toyfort.s3.ap-south-1.amazonaws.com/smartivity-8.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/scentos-2.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/electrobotic-9.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/chicco-3.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/lego-4.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/barbie-5.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/experience-1.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/hot-wheel-6.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/smiggle-7.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/fujifilm-10.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/nua-11.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/r-for-rabbit-18.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/funskool-12.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/mustela-13.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imc-toys-14.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/kriiddaank-15.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imagi-make-16.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/step-2-17.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/joie-19.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/graco-20.png",
];

const brandNames = [
  "smartivity",
  "scentos",
  "Electrobotic",
  "chicco",
  "lego",
  "barbie",
  "Crayola",
  "Hot+Wheels",
  "Smiggle",
  "Fujifilm",
  "Nuna",
  "R+for+Rabbit",
  "Funskool",
  "Mustela",
  "IMC+Toys",
  "Kriiddaank",
  "Imagi+Make",
  "Step+2",
  "Joie",
  "Graco"
];

function ShopByFamousBrand() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { fetchProduct } = useContext(AppContext);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const firstItem = scrollContainer.querySelector('div.flex-shrink-0');
    if (firstItem) {
      setItemWidth(firstItem.offsetWidth);
    }

    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - (itemWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += itemWidth;
        }
      }, 3000);
    };

    if (itemWidth > 0) {
      startAutoScroll();
    }

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => {
      if (itemWidth > 0) {
        startAutoScroll();
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [itemWidth]);

  const rightSlide = () => {
    if (scrollRef.current && itemWidth > 0) {
      scrollRef.current.scrollLeft += itemWidth;
    }
  };

  const leftSlide = () => {
    if (scrollRef.current && itemWidth > 0) {
      scrollRef.current.scrollLeft -= itemWidth;
    }
  };

  const handleSidebarByBrand = (brand) => {
    fetchProduct(brand);
    navigate(`/products?brand=${brand}`);
  };

  return (
    <div className="container mx-auto max-w-[95%] mt-20">
      <h1 className="flex justify-center items-center font-bold text-2xl m-10 mt-20 font-sans tracking-widest">
        SHOP BY FAMOUS BRAND
      </h1>

      <div className="flex flex-row mt-2 items-center">
        <button
          onClick={leftSlide}
          className="bg-slate-300 rounded-full p-2 z-10 hover:bg-slate-400 transition-colors"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll w-full scroll-smooth hide-scrollbar"
        >
          {brandImages.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-1/2 md:w-auto md:min-w-[200px]"
            >
              <div 
                onClick={() => handleSidebarByBrand(brandNames[index])}
                className="cursor-pointer transform scale-90 transition-all duration-400 rounded-[20px] hover:scale-95"
              >
                <img
                  src={image}
                  alt={brandNames[index]}
                  className="w-full rounded-[20px]"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={rightSlide}
          className="bg-slate-300 rounded-full p-2 z-10 hover:bg-slate-400 transition-colors"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default ShopByFamousBrand; 