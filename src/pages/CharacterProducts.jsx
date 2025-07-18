import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const CharacterProducts = () => {
  const character = new URLSearchParams(location.search).get("character");
  // console.log("character", character);

  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  const navigate = useNavigate();

  const postsPerPage = 24;

  useEffect(() => {
    const fetchProductsByCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/characterProducts/products?character=${character}`
        );

        setProduct(response.data);

        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductsByCharacters();
  }, [character]);

  const handleProduct = (productSlug) => {
    navigate(`/${productSlug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="p-4">
          {Array.isArray(product) && product.length > 0 ? (
            <div className="w-full ml-5 mt-5">
              <div className="w-full grid grid-cols-4 gap-4">
                {currentProduct.map((item, index) => (
                  <Card
                    className="border border-black cursor-pointer"
                    key={index}
                    discount={item.discount_rate}
                    imageUrl={item.image_default}
                    //   imageUrl={`${imgUrl}${item.image_default}`}
                    title={item.title}
                    originalPrice={item.price / 100}
                    discountedPrice={
                      Math.ceil(
                        (item.price / 100) * (1 - item.discount_rate / 100)
                      ) - 1
                    }
                    onClick={() => handleProduct(item.slug)}
                    slug={item.slug}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>No items.</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <Pagination
          totalPages={Math.ceil(product.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CharacterProducts;
