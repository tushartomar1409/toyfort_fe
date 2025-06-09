import React, { useRef, useEffect, useState, useContext} from "react";
import "../style/SpecialPrice.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const discounts = [
  {
    id: "20-30",
    img: "https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Toys_25_off.png",
    label: "UP TO 25% OFF",
  },
  {
    id: "30-40",
    img: "https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Metashot_35_off.png",
    label: "UP TO 35% OFF",
  },
  {
    id: "40-50",
    img: "https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Headphone_45_off.png",
    label: "UP TO 45% OFF",
  },
  {
    id: "50-100",
    img: "https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/Bags_55_off.png",
    label: "UP TO 55% OFF",
  },
];

export default function SpecialPrice() {
  const scrollRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const { fetchDiscountProduct } =useContext(AppContext);
  const navigate = useNavigate();


   const handleSiderbarDiscount = (discount) => {
    fetchDiscountProduct(discount);
    navigate(`/products/discount?discount=${discount}`);
  };

  // Update scrollability based on window width
  const updateScrollable = () => {
    setIsScrollable(window.innerWidth <= 1024);
  };

  useEffect(() => {
    updateScrollable();
    window.addEventListener("resize", updateScrollable);
    return () => window.removeEventListener("resize", updateScrollable);
  }, []);

  // Get card width + margin for scroll calculations
  useEffect(() => {
    if (scrollRef.current && isScrollable) {
      const firstCard = scrollRef.current.querySelector(".discount-card");
      if (firstCard) {
        const style = window.getComputedStyle(firstCard);
        const marginRight = parseInt(style.marginRight) || 0;
        setCardWidth(firstCard.offsetWidth + marginRight);
      }
    }
  }, [isScrollable]);

  // Duplicate items for infinite scroll only if scrollable
  const itemsToShow = isScrollable ? [...discounts, ...discounts] : discounts;

  // Scroll function for infinite effect
  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    if (!cardWidth) return;

    const scrollAmount = cardWidth + 48; // extra gap (3rem = 48px)

    if (direction === "left") {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // On mount or when scrollable changes, reset scroll position for infinite
  useEffect(() => {
    if (scrollRef.current && isScrollable) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    }
  }, [isScrollable, cardWidth]);

  return (
    <>
      <div className="discount-header-container">
        <p className="discount-heading" style={{fontSize: "10px"}}>
          Special Prices, Premium Products, and Free Home Delivery PAN India -
          <span className="highlight">It's All Just a Click Away!</span>
        </p>
      </div>

      <div className="scroll-wrapper">
        {isScrollable && (
          <button
            className="scroll-arrow left"
            aria-label="Scroll Left"
            onClick={() => scrollBy("left")}
          >
            &#8592;
          </button>
        )}

        <div
          className="discount-scroll-container"
          ref={scrollRef}
          onClick={() => handleSiderbarDiscount(discount.id)}
          style={{
            overflowX: isScrollable ? "scroll" : "visible",
            cursor: isScrollable ? "grab" : "default",
          }}
        >
          {itemsToShow.map((discount, i) => (
            <div
              key={`${discount.id}-${i}`}
              className="discount-card"
              onClick={() => handleSiderbarDiscount(discount.id)}
            >
              <img src={discount.img} alt={discount.label} />
              <div className="discount-label">{discount.label}</div>
            </div>
          ))}
        </div>

        {isScrollable && (
          <button
            className="scroll-arrow right"
            aria-label="Scroll Right"
            onClick={() => scrollBy("right")}
          >
            &#8594;
          </button>
        )}
      </div>
    </>
  );
}
