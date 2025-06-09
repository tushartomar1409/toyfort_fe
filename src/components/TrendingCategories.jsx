import React from "react";

const TrendingCategories = () => {
  const products = [
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives1.png",
      alt: "Baby Diaper Care",
      link: "https://toyfort.in/infants/baby-diaper-care",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives2.png",
      alt: "Pram Strollers",
      link: "https://toyfort.in/baby-gear/pram-strollers",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives3.png",
      alt: "Dolls",
      link: "https://toyfort.in/doll-doll-houses/dolls",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives4.png",
      alt: "Kitchen Set",
      link: "https://toyfort.in/pretend-play/kitchen-set",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives5.png",
      alt: "Cameras",
      link: "https://toyfort.in/electronics/camera",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives6.png",
      alt: "Guns",
      link: "https://toyfort.in/toys/guns",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives7.png",
      alt: "Board Games",
      link: "https://toyfort.in/games/board-games",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives8.png",
      alt: "Kids Watch",
      link: "https://toyfort.in/electronics/kids-watch",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives9.png",
      alt: "Building Sets",
      link: "https://toyfort.in/toys/blocks-building-sets",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives10.png",
      alt: "Doll Houses",
      link: "https://toyfort.in/doll-doll-houses/doll-houses",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives11.png",
      alt: "Video Games",
      link: "https://toyfort.in/electronics/video-games",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/creatives12.png",
      alt: "Sports",
      link: "https://toyfort.in/sports",
    },
  ];

  return (
    <div className="creatives mt-20">
      <h1 className="flex justify-center items-center font-bold text-2xl font-sans tracking-widest">
        Trending Categories
      </h1>
      <div className="flex flex-wrap justify-center gap-2 max-w-full mt-6">
        {products.map((item, index) => (
          <a
            href={item.link}
            className="flex-1 basis-0 min-w-[calc(100%/6-10px)] max-w-[calc(100%/6-10px)] text-center no-underline md:flex-none"
          >
            <div className="text-center">
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
