import { useRef, useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function ShopByAge() {
  const { fetchProduct } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSidebarByAge = (age) => {
    fetchProduct(age);
    navigate(`/products/age?age=${age}`);
  };

  const images = [
    { age: "0-18M", img: "1.png", text: "0-18 MONTHS" },
    { age: "18-36M", img: "2.png", text: "18-36 MONTHS" },
    { age: "3-5Y", img: "3.png", text: "3-5 YEARS" },
    { age: "5-8Y", img: "4.png", text: "5-8 YEARS" },
    { age: "8-12Y", img: "5.png", text: "8-12 YEARS" },
    { age: "12Y", img: "6.png", text: "12+ YEARS" },
  ];

  return (
    <div className="creatives mt-20">
      <h1 className="flex justify-center items-center font-bold text-2xl font-sans tracking-widest">
        SHOP BY AGE
      </h1>
      <div className="flex flex-wrap justify-center gap-2 max-w-full mt-6">
        {images.map(({ age, img, text }) => (
          <div
            key={age}
            onClick={() => handleSidebarByAge(age)}
            className="flex-1 basis-0 min-w-[calc(100%/6-10px)] max-w-[calc(100%/6-10px)] text-center no-underline md:flex-none cursor-pointer"
          >
            <div className="text-center">
              <img
                src={`https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/${img}`}
                alt={age}
                className="w-full h-auto block rounded-[20px] hover:scale-105 transition-transform duration-300" style={{height: "100%"}}
              />
              <p className="text-[6px] md:text-sm mt-2">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByAge;
