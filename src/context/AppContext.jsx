import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api/api";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const storedUser = localStorage.getItem("user");

  const [profile, setProfile] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [sidebarProducts, setSidebarProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productByAge, setProductByAge] = useState([]);
  const [productByGender, setProductByGender] = useState([]);
  const [productByPrice, setProductByPrice] = useState([]);
  const [productOutOfStock, setProductOutOfStock] = useState([]);
  const [productInStock, setProductInStock] = useState([]);
  const [subcategoryProduct, setSubcategoryProduct] = useState([]);
  const [outdoorProduct, setOutdoorProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [user, setUser] = useState(() => {
    try {
      return storedUser ? JSON.parse(storedUser) : "Sign In";
    } catch (error) {
      return "Sign In";
    }
  });

  useEffect(() => {
    if (user && user !== "Sign In") {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Auth API methods
  const loginUser = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
      const { data, token } = response.data;
      
      console.log(data);
      
      setUser(data);
      if (token) {
        localStorage.setItem("token", token);
      }
      
      return { data, token };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post(API_ENDPOINTS.AUTH.LOGOUT, {}, { headers: getAuthHeaders() });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear local storage and reset state
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser("Sign In");
      setProfile(false);
      setWishlist([]);
      setCart([]);
    }
  };

  // Product API methods
  const fetchProductsByAge = async (age) => {
    setLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.PRODUCTS.BY_AGE(age));
      setProductByAge(response.data);
    } catch (error) {
      console.error("Error fetching products by age:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByGender = async (gender) => {
    setLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.PRODUCTS.BY_GENDER(gender));
      setProductByGender(response.data);
    } catch (error) {
      console.error("Error fetching products by gender:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByPrice = async (min, max) => {
    setLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.PRODUCTS.BY_PRICE(min, max));
      setProductByPrice(response.data);
    } catch (error) {
      console.error("Error fetching products by price:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cart API methods
  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        API_ENDPOINTS.CART.ADD,
        item,
        { headers: getAuthHeaders() }
      );
      setCart(response.data.result);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError(error.message);
    }
  };

  const updateCartQuantity = async (productId, action) => {
    try {
      const response = await axios.put(
        API_ENDPOINTS.CART.UPDATE_QUANTITY(productId),
        { action },
        { headers: getAuthHeaders() }
      );
      setCart(response.data.result);
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      setError(error.message);
    }
  };

  // Wishlist API methods
  const addToWishlist = async (item) => {
    try {
      const response = await axios.post(
        API_ENDPOINTS.WISHLIST.ADD,
        item,
        { headers: getAuthHeaders() }
      );
      setWishlist(response.data.result);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      setError(error.message);
    }
  };

  const removeFromWishlist = async (slug) => {
    try {
      const response = await axios.delete(
        API_ENDPOINTS.WISHLIST.REMOVE(slug),
        { headers: getAuthHeaders() }
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      setError(error.message);
    }
  };

  // SideBar filters

  const sidebarFilter = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/category/${category}`
      );
      // console.log("Response",response)
      setSidebarProducts(response.data);
    } catch (error) {
      console.error("Error in updating quantity of product:", error);
    }
  };

  // Filter to fetch discounted products

  const fetchDiscountProduct = async (discount) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/products/discount?discount=${discount}`
      );

      // console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductOutStock = async (out) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/stock-products/out-stock?stock=${out}`
      );

      // console.log("Out of stock", response.data);
      setProductOutOfStock(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductInStock = async (out) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/stock-products/in-stock?stock=${out}`
      );

      // console.log("In stock", response.data);
      setProductInStock(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchSubCategoryProduct = async (cat, subCat) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/category/${cat}/${subCat}`
      );

      // console.log("sub-cat",response.data);

      setSubcategoryProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const outdoorProducts = async (toys) => {
    console.log("Toys: ", toys);

    try {
      const response = await axios.get(
        `http://localhost:5001/api/toys/${toys}`
      );

      setOutdoorProduct(response.data);
    } catch (error) {
      console.error("Error in fetching product:", error);
    }
  };

  const value = {
    // Auth
    user,
    setUser,
    loginUser,
    logoutUser,
    
    // Profile
    profile,
    setProfile,
    
    // Wishlist
    wishlist,
    addToWishlist,
    removeFromWishlist,
    
    // Cart
    cart,
    addToCart,
    updateCartQuantity,
    
    // Products
    product,
    productByAge,
    productByGender,
    productByPrice,
    productOutOfStock,
    productInStock,
    fetchProductsByAge,
    fetchProductsByGender,
    fetchProductsByPrice,
    
    // UI State
    loading,
    error,
    
    // Other existing methods...
    sidebarProducts,
    setSidebarProducts,
    subcategoryProduct,
    outdoorProduct,
    setOutdoorProduct
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
