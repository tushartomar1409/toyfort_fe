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
      
  return (
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
  )
}

export default BtsBanner
