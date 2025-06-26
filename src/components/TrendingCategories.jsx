import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const TrendingCategories = () => {

  const { fetchSubCategoryProduct } = useContext(AppContext)

  const navigate = useNavigate()
  const products = [
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives1.png",
      alt: "Baby Diaper Care",
      // link: "https://toyfort.in/infants/baby-diaper-care",
      cat:"infants",
      category:"baby-diaper-care"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives2.png",
      alt: "Pram Strollers",
      // link: "https://toyfort.in/baby-gear/pram-strollers",
      cat:"baby-gear",
      category:"pram-strollers"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives3.png",
      alt: "Dolls",
      // link: "https://toyfort.in/doll-doll-houses/dolls",
      cat:"doll-doll-houses",
      category:"dolls"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives4.png",
      alt: "Kitchen Set",
      // link: "https://toyfort.in/pretend-play/kitchen-set",
      cat:"pretend-play",
      category:"kitchen-set"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives5.png",
      alt: "Cameras",
      // link: "https://toyfort.in/electronics/camera",
      cat:"electronics",
      category:"camera"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives6.png",
      alt: "Guns",
      // link: "https://toyfort.in/toys/guns",
      cat:"toys",
      category:"guns"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives7.png",
      alt: "Board Games",
      // link: "https://toyfort.in/games/board-games",
      cat:"games",
      category:"board-games"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives8.png",
      alt: "Kids Watch",
      // link: "https://toyfort.in/electronics/kids-watch",
      cat:"electronics",
      category:"kids-watch"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives9.png",
      alt: "Building Sets",
      // link: "https://toyfort.in/toys/blocks-building-sets",
      cat:"toys",
      category:"blocks-building-sets"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives10.png",
      alt: "Doll Houses",
      // link: "https://toyfort.in/doll-doll-houses/doll-houses",
      cat:"doll-doll-houses",
      category:"doll-houses"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives11.png",
      alt: "Video Games",
      // link: "https://toyfort.in/electronics/video-games",
      cat:"electronics",
      category:"video-games"
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives12.png",
      alt: "Sports",
      // link: "https://toyfort.in/sports",
      cat:"sports",
      category:"bow-and-arrow"
    },
  ];

  const handleSidebarCategory = (cat, category) => {
    fetchSubCategoryProduct(cat, category);
    navigate(`/category/${cat}/${category}`);
  };

  return (
    <div className="creatives mt-20">
      <h1 className="flex justify-center items-center font-bold text-2xl font-sans tracking-widest">
        Trending Categories
      </h1>
      <div className="flex flex-wrap justify-center gap-2 max-w-full mt-6">
        {products.map((item, index) => (
          <a
            key={item.alt}
            href={item.link}
            className="flex-1 basis-0 min-w-[calc(100%/6-10px)] max-w-[calc(100%/6-10px)] text-center no-underline md:flex-none"
          >
            <div className="text-center hover:text-red-600 cursor-pointer" onClick={() => handleSidebarCategory(item.cat, item.category)}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block"
              />
              <p className="text-[6px] md:text-sm">{item.alt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;
