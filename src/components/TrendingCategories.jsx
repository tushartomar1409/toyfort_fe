import React from 'react'
import "../style/TrendingCategory.css"

const TrendingCategories = () => {

     const products = [
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives1.png',
      alt: 'Baby Diaper Care',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives2.png',
      alt: 'Pram Strollers',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives3.png',
      alt: 'Dolls',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives4.png',
      alt: 'Kitchen Set',
    },
     {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives5.png',
      alt: 'Cameras',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives6.png',
      alt: 'Guns',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives7.png',
      alt: 'Board Games',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives8.png',
      alt: 'Kids Watch',
    },
     {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives9.png',
      alt: 'Building Sets',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives10.png',
      alt: 'Doll Houses',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives11.png',
      alt: 'Video Games',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/creatives12.png',
      alt: 'Sports',
    },
  ];

  return (
    
       <div className="tc-container">
        <h1 className="heading">Trending Categories</h1>
      <div className="tc-prod">
        {products.map((item, index) => (
          <div className="tc-prodImg" key={index}>
            <img src={item.src} alt={item.alt} />
             <p className="tc-prodLabel">{item.alt}</p>
          </div>
        ))}
          </div>
          </div>

  )
}

export default TrendingCategories
