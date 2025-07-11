import React, { useContext, useState,useEffect } from "react";
import "@fontsource/open-sans";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WishList = () => {
  const { setUser } = useContext(AppContext)

  const [wishlist, setWishlist] = useState([])

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const slug = user.name

  useEffect(() => {
    const fetchWishlist = async () => {
      // const token = localStorage.getItem('token');
      // console.log("Fetching wishlist... User:", user, "Token:", token);
  
      try {
        
          const response = await axios.get("http://localhost:5001/api/user/wishlist", {
            headers: { Authorization: `Bearer ${token}` },
          })
  
          console.log("Fetched response", response.data);
          setWishlist(response.data)
        
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setWishlist([])
      }
    };
  
    fetchWishlist();
  }, [slug]);
  


  const handleDetails = (productSlug) => {
    navigate(`/${productSlug}`)
  }

  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="text-gray-600 text-sm mt-6 ml-10">
        <a className="hover:text-red-500 mr-1 cursor-pointer text-gray-400" href="/">
          Home /
        </a>
        <span className="mr-1 text-gray-600">Wishlist</span>
      </div>
      <div className="p-4">
      {Array.isArray(wishlist) && wishlist.length > 0 ? (

          <div className="w-full ml-5 mt-5">
            <div className="w-full grid grid-cols-4 gap-4">
              {wishlist.map((item, index) => (
                           
                <Card
                  className="border border-black cursor-pointer"
                  key={index}
                  discount={item.discount}
                  imageUrl={item.image}
                  title={item.title}
                  originalPrice={item.original_price}
                  discountedPrice={item.discounted_price}
                  onClick={() => handleDetails(item.slug)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>No items in wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
