import "../style/Banner.css";
import React, { useState } from "react";

const Banner = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setHasError(true);
  };

  return (
    <div className="banner-container">
      {loading && <div className="loading-text">Loading...</div>}
      {hasError ? (
        <div className="error-text">Failed to load banner.</div>
      ) : (
        <img
          src="https://toyfort.s3.ap-south-1.amazonaws.com/summer.png"
          alt="Banner"
          className="banner-img"
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: loading ? "none" : "block" }}
        />
      )}
    </div>
  );
};

export default Banner;
