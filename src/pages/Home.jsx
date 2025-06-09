import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import  Banner  from "../components/Banner";
import BtsBanner from "../components/BtsBanner";
import Happycustomers from "../components/Happycustomers";
import TrendingCategories from "../components/TrendingCategories";
import ShopByAge from "../components/ShopByAge";
import SpecialPrice from "../components/SpecialPrice";
import ShopByFamousBrand from "../components/ShopByFamousBrand";

const brandImages = [
  "https://toyfort.s3.ap-south-1.amazonaws.com/smartivity-8.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/scentos-2.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/electrobotic-9.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/chicco-3.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/lego-4.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/barbie-5.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/experience-1.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/hot-wheel-6.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/smiggle-7.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/fujifilm-10.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/nua-11.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/r-for-rabbit-18.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/funskool-12.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/mustela-13.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imc-toys-14.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/kriiddaank-15.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/imagi-make-16.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/step-2-17.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/joie-19.png",
  "https://toyfort.s3.ap-south-1.amazonaws.com/graco-20.png",
];

const categories = [
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Art-&-Craft-caraousal-category-banner.webp",
    title: "Art & Craft",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Action-Figure-caraousal-category-banner.webp",
    title: "Action Figures",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Kitchen-set-caraousal-category-banner.webp",
    title: "Kitchen Sets",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Educational-Toys-caraousal-category-banner.webp",
    title: "Educational Toys",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Blocks-&-Building-Sets-caraousal-category-banner.webp",
    title: "Blocks & Building Sets",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Doll-&-Doll-Houses-caraousal-category-banner.webp",
    title: "Doll & Doll Houses",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Rideon-caraousal-category-banner.webp",
    title: "Rideon",
  },
  {
    src: "https://toyfort.s3.ap-south-1.amazonaws.com/img/Trampoline-caraousal-category-banner.webp",
    title: "Trampoline",
  },
];

function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [showFAQs, setShowFAQs] = useState(false);
  const [fqsa, setFaqs] = useState(false);
  const { fetchProduct, fetchDiscountProduct, outdoorProducts } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [showAnswers, setShowAnswers] = useState({
    q1: true,
    q2: true,
    q3: true,
    q4: true,
    q5: true,
    q6: true,
    q7: true,
    q8: true,
    q9: true,
    q10: true,
    q11: true,
    q12: true,
    q13: true,
    q14: true,
    q15: true,
    q16: true,
  });

  const [isVisible, setIsVisible] = useState(true);
  const scrollRef = useRef(null);

  const handleSidebarByAge = (age) => {
    fetchProduct(age);
    navigate(`/products/age?age=${age}`);
  };

  const handleSiderbarDiscount = (discount) => {
    fetchDiscountProduct(discount);
    navigate(`/products/discount?discount=${discount}`);
  };

  const handleBanner = (toy) => {
    outdoorProducts(toy);
    navigate(`/toys/${toy}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 230;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const toggleAnswer = (question) => {
    setShowAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setIsVisible(false);
    };

    if (isVisible) {
      window.addEventListener("click", handleClickAnywhere);
    }

    return () => {
      window.removeEventListener("click", handleClickAnywhere);
    };
  }, [isVisible]);

  useEffect(() => {
    const today = new Date().toDateString();
    const bannerViews = JSON.parse(localStorage.getItem('bannerViews') || '{}');
    
    if (bannerViews[today] >= 3) {
      setIsVisible(false);
    } else {
      bannerViews[today] = (bannerViews[today] || 0) + 1;
      localStorage.setItem('bannerViews', JSON.stringify(bannerViews));
    }
  }, []);

  const handleBannerClick = () => {
    navigator.clipboard.writeText('TFSILVER50')
      .then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300';
        toast.textContent = 'Coupon code TFSILVER50 copied to clipboard!';
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.style.opacity = '0';
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy coupon code:', err);
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300';
        toast.textContent = 'Failed to copy coupon code. Please try again.';
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.style.opacity = '0';
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 3000);
      });
  };

  return (
    <div className="p-4">
      {/* Offer Popup */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button
            className="absolute top-4 right-4 text-white hover:text-red-600 w-10 h-10 flex items-center justify-center transition duration-300"
            onClick={() => setIsVisible(false)}
          >
            ✖
          </button>

          <div className="relative p-6 rounded-lg cursor-pointer" onClick={handleBannerClick}>
            <img
              src="https://smm-v2.s3.ap-south-1.amazonaws.com/uploads/assets/silver-Jubilee-Discount-Coupon.jpg"
              alt="Popup-Offer"
              className="w-full rounded-lg"
            />
            <p className="text-red-600 m-3 mr-52 ml-52 p-1 bg-gray-200 font-bold text-center rounded-t-lg font-sans">
              Click on the banner to copy the coupon code
            </p>
          </div>
        </div>
      )}

      {/* Banner section */}
      <Banner/>

      {/* Slider section */}
      <Slider />

      {/* Shop By Brand */}
      <ShopByFamousBrand />

      {/* Shop by age */}
      <ShopByAge/>
      
      {/* Back to school banner */}
      <BtsBanner/>

      {/* Trending Categories */}
      <TrendingCategories/>

      {/* Special Price */}
      <SpecialPrice/>

      <Happycustomers/>

      {/* FAQs */}
      <div className="mt-20">
        {/* FAQs Heading with Dropdown */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setShowFAQs(!showFAQs)}
        >
          <h2 className="font-bold text-2xl font-sans tracking-wide">FAQs</h2>
          <ExpandMoreIcon className="cursor-pointer mt-1" fontSize="large" />
        </div>

        {/* Show FAQs only when dropdown is clicked */}
        {showFAQs && (
          <div className="m-7">
            <div
              onClick={() => toggleAnswer("q1")}
              className={`border-t border-black ${
                showAnswers["q1"] ? "border-b" : "border-0"
              }`}
            >
              <p
                className={` text-red-600 ${
                  showAnswers["q1"] ? "border-b" : "border-0"
                } border-black p-4 flex justify-between items-center`}
              >
                Q: Why choose Toy Fort?
                {showAnswers["q1"] ? (
                  <ExpandMoreIcon
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleAnswer("q1");
                    }}
                    className="text-red-500 cursor-pointer"
                  />
                ) : (
                  <ExpandLessIcon
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleAnswer("q1");
                    }}
                    className="text-red-500 cursor-pointer"
                  />
                )}
              </p>

              {showAnswers["q1"] && (
                <>
                  <p className="p-2">
                    Ans: Toy Fort provides a convenient online shopping platform
                    where you can browse and purchase toys from the comfort of
                    your own home. We have toys and games not only for kids but
                    for all age groups, ensuring a joyful playtime experience
                    for the whole family.
                  </p>

                  <p className="p-2">
                    You can find toys from leading brands in our store with the
                    widest range of toys for all age groups and interests. Toy
                    Fort collaborates with well-known and trusted brands to
                    offer you high-quality toys and products.
                  </p>

                  <p className="p-2">
                    Toy Fort keeps up with the latest trends and ensures that
                    the newest and most popular toys are available in our
                    collection.
                  </p>
                </>
              )}
            </div>

            <div
              onClick={() => toggleAnswer("q2")}
              className={`border-black  ${
                showAnswers["q2"] ? "border-b" : "border-0"
              }`}
            >
              <p
                className={`text-red-600  ${
                  showAnswers["q2"] ? "border-b" : "border-0"
                } border-black p-4 flex justify-between items-center`}
              >
                Q: Is Toy Fort a reliable source for buying toys?
                {showAnswers["q2"] ? (
                  <ExpandMoreIcon
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleAnswer("q2");
                    }}
                    className="text-red-500 cursor-pointer"
                  />
                ) : (
                  <ExpandLessIcon
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleAnswer("q2");
                    }}
                    className="text-red-500 cursor-pointer"
                  />
                )}
              </p>

              {showAnswers["q2"] && (
                <p className="p-2">
                  Ans: Absolutely! Toy Fort collaborates with well-known and
                  trusted brands to offer you high-quality toys and products at
                  the best prices, ensuring safety and durability for your
                  little ones. We strive to cater to every child's unique
                  preferences.
                </p>
              )}
            </div>

            {/* Show More FAQs when fqsa is true */}
            {fqsa && (
              <>
                <div
                  onClick={() => toggleAnswer("q3")}
                  className={`border-black  ${
                    showAnswers["q3"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q3"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Can I find toys specifically designed for infants and
                    toddlers?
                    {showAnswers["q3"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q3");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q3");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>

                  {showAnswers["q3"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort has a special selection of toys
                      designed to engage and entertain infants and toddlers,
                      promoting their development.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q4")}
                  className={`border-black  ${
                    showAnswers["q4"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q4"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Does Toy Fort offer fast and reliable toy delivery?
                    {showAnswers["q4"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q4");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q4");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>

                  {showAnswers["q4"] && (
                    <p className="p-2">
                      Ans: Toy Fort prioritises prompt toy delivery, ensuring
                      your little ones receive their toys in a timely manner,
                      right to your doorstep.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q5")}
                  className={`border-black  ${
                    showAnswers["q5"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q5"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Is Toy Fort committed to toy safety?
                    {showAnswers["q5"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q5");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q5");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q5"] && (
                    <p className="p-2">
                      Ans: Toy Fort takes toy safety seriously. We only offer
                      toys that meet the highest safety standards, providing you
                      peace of mind6
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q6")}
                  className={`border-black  ${
                    showAnswers["q6"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q6"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Can I find educational toys and learning toys at Toy
                    Fort?
                    {showAnswers["q6"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q6");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q6");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q6"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort offers a wide range of educational toys
                      and learning toys designed to enhance children's cognitive
                      and developmental skills.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q7")}
                  className={`border-black  ${
                    showAnswers["q7"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q7"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Can I buy gifts for kids online at Toy Fort?
                    {showAnswers["q7"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q7");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q7");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>

                  {showAnswers["q7"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort is an ideal destination for buying
                      gifts for infants and kids online. Explore our diverse
                      collection and find the perfect present for any occasion.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q8")}
                  className={`border-black  ${
                    showAnswers["q8"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q8"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Does Toy Fort offer outdoor activities and indoor play
                    toys?
                    {showAnswers["q8"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q8");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q8");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q8"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort caters to both outdoor and indoor play
                      needs. We have a variety of toys and equipment suitable
                      for outdoor adventures and plenty of options for
                      imaginative indoor play.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q9")}
                  className={`border-black  ${
                    showAnswers["q9"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q9"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Are there board games available at Toy Fort?
                    {showAnswers["q9"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q9");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q9");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q9"] && (
                    <p className="p-2">
                      Ans: Absolutely! Toy Fort offers a wide selection of board
                      games suitable for different age groups. Check out our
                      collection for some fun and engaging game options for the
                      whole family.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q10")}
                  className={`border-black  ${
                    showAnswers["q10"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q10"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Can I find infant utility items and buy baby products
                    online at Toy Fort?
                    {showAnswers["q10"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q10");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q10");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q10"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort understands the needs of parents. We
                      offer a range of online infant utility items (such as bath
                      and skin care) and baby products to make your shopping
                      experience convenient. We have the biggest brands
                      available at our online platforms with the best possible
                      prices. We also have a range of baby gear items such as
                      strollers, high chairs, baby carriers, and more to ensure
                      your little one's comfort and safety.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q11")}
                  className={`border-black  ${
                    showAnswers["q11"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q11"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Are there board games available at Toy Fort?
                    {showAnswers["q11"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q11");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q11");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q11"] && (
                    <p className="p-2">
                      Ans: Absolutely! Toy Fort offers a wide selection of board
                      games suitable for different age groups. Check out our
                      collection for some fun and engaging game options for the
                      whole family.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q12")}
                  className={`border-black  ${
                    showAnswers["q12"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q12"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Does Toy Fort have pretend and play toys?
                    {showAnswers["q12"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q12");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q12");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q12"] && (
                    <p className="p-2">
                      Ans: At Toy Fort we have pretend and play toys that
                      encourage imaginative play and role-playing activities,
                      helping children and toddlers develop social and creative
                      skills.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q13")}
                  className={`border-black  ${
                    showAnswers["q13"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q13"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Are there swimming pools and related accessories
                    available at Toy Fort?
                    {showAnswers["q13"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q13");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q13");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>

                  {showAnswers["q13"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort offers a selection of swimming pool
                      toys, including inflatable toys, water games, and
                      accessories, to make pool time even more enjoyable.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q14")}
                  className={`border-black  ${
                    showAnswers["q14"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q14"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Are blocks and building sets available at Toy Fort?
                    {showAnswers["q14"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q14");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q14");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q14"] && (
                    <p className="p-2">
                      Ans: Absolutely! Toy Fort offers a wide range of blocks
                      and building sets from all big brands like LEGO that
                      promote creativity, problem-solving, and fine motor skills
                      development in children.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q15")}
                  className={`border-black  ${
                    showAnswers["q15"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q15"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Does Toy Fort offer school items?
                    {showAnswers["q15"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q15");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q15");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q15"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort provides a range of school items such
                      as backpacks, lunch boxes, water bottles, stationery sets,
                      school bags, and other essentials to make going to school
                      fun and exciting.
                    </p>
                  )}
                </div>

                <div
                  onClick={() => toggleAnswer("q16")}
                  className={`border-black  ${
                    showAnswers["q16"] ? "border-b" : "border-0"
                  }`}
                >
                  <p
                    className={` text-red-600  border-black  ${
                      showAnswers["q16"] ? "border-b" : "border-0"
                    } p-4 flex justify-between items-center`}
                  >
                    Q: Can I track my order at Toy Fort?
                    {showAnswers["q16"] ? (
                      <ExpandMoreIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q16");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <ExpandLessIcon
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleAnswer("q16");
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                    )}
                  </p>
                  {showAnswers["q16"] && (
                    <p className="p-2">
                      Ans: Yes, Toy Fort provides an easy order-tracking system,
                      allowing you to keep tabs on your order from the moment
                      you make a purchase to its arrival at your doorstep.
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="flex justify-center items-center mt-4">
              <button
                className="mt-4 px-4 py-2 items-center flex flex-col bg-red-500 text-white rounded"
                onClick={() => setFaqs(!fqsa)}
              >
                {fqsa ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
