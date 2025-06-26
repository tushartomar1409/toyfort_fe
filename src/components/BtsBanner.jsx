import React, { useContext } from "react";
import "../style/BtsBanner.css";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const BtsBanner = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { fetchSubCategoryProduct } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setHasError(true);
  };

  const products = [
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-1.png",
      alt: "School Bags",
      cat: "school-items",
      category: "school-bags",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-2.png",
      alt: "Water Bottles",
      cat: "school-items",
      category: "water-bottles",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-3.png",
      alt: "Pencil Cases",
      cat: "school-items",
      category: "pencil-cases-and-pouches",
    },
    {
      src: "https://toyfort.s3.ap-south-1.amazonaws.com/back-to-school-4.png",
      alt: "Lunch Boxes",
      cat: "school-items",
      category: "lunch-box",
    },
  ];

  const handleSidebarCategory = (cat, category) => {
    fetchSubCategoryProduct(cat, category);
    navigate(`/category/${cat}/${category}`);
  };

  return (
    <>
      <div className="btsbanner-container mt-20">
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
            style={{ display: loading ? "none" : "block", height: "100%" }}
          />
        )}
      </div>
      <div className="bts-Prodcontainer">
        <div className="bts-prod">
          {products.map((item, index) => (
            <div
              className="bts-prodImg cursor-pointer"
              key={index}
              onClick={() => handleSidebarCategory(item.cat, item.category)}
            >
              <img src={item.src} alt={item.alt} />
              <p className="bts-prodLabel">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BtsBanner;
