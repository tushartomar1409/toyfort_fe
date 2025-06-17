import { useEffect, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const cooldownMinutes = 5;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const lastShown = localStorage.getItem("lastPopupTime");
        const now = Date.now();

        if (!lastShown || now - parseInt(lastShown) > cooldownMinutes * 60 * 1000) {
          setShowPopup(true);
          localStorage.setItem("lastPopupTime", now.toString());
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const couponCode = "TFSILVER5";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    alert("Coupon code copied to clipboard!");
  };

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            fontSize: "28px",
            background: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            border: "none",
            cursor: "pointer",
            zIndex: 10000,
            fontWeight: "bold",
          }}
        >
          &times;
        </button>

        <img
          src="https://smm-v2.s3.ap-south-1.amazonaws.com/uploads/assets/silver-Jubilee-Discount-Coupon.jpg"
          alt="25th Anniversary Offer"
          style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          onClick={copyToClipboard}
        />

        <div
          style={{
            marginTop: "12px",
            padding: "8px 16px",
            backgroundColor: "white",
            borderRadius: "5px",
            color: "red",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Click on the banner to copy the coupon code
        </div>
      </div>
    </div>
  );
};

export default Popup;
