import React from 'react'
import "../style/BtsBanner.css"
import  { useState } from "react";

const BtsBanner = () => {
        const [hasError, setHasError] = useState(false);
       const [loading, setLoading] = useState(true);
    
      const handleLoad = () => setLoading(false);
      const handleError = () => {
        setLoading(false);
        setHasError(true);
      };
      
      const products = [
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-1.png',
      alt: 'School Bags',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-2.png',
      alt: 'Water Bottles',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-3.png',
      alt: 'Pencil Cases',
    },
    {
      src: 'https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-4.png',
      alt: 'Lunch Boxes',
    },
  ];
      
  return (
    <>
   <div className="btsbanner-container">
      {loading && <div className="loading-text">Loading...</div>}
      {hasError ? (
        <div className="error-text">Failed to load banner.</div>
      ) : (
        <img
          src="https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school.png"
          alt="Banner"
          className="btsbanner-img"
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: loading ? "none" : "block" }}
        />
      )}
    
    </div>
     <div className="bts-Prodcontainer">
      <div className="bts-prod">
        {products.map((item, index) => (
          <div className="bts-prodImg" key={index}>
            <img src={item.src} alt={item.alt} />
             <p className="bts-prodLabel">{item.alt}</p>
          </div>
        ))}
      </div>
      
    </div>

    
    
  


    </>
  )
}

export default BtsBanner
