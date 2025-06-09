import visaImg from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import american from "../assets/amex.svg";
import discover from "../assets/discover.svg";

function Footer() {
  return (
    <div className="bg-gray-100 mt-12 px-4 md:px-12">
      {/* Top Grid */}
      <div className="flex flex-wrap justify-between gap-4">

        {/* Logo and Information side by side */}
        <div className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto gap-6 mt-8 md:mt-8 items-start">
          <img
            className="w-44 sm:w-60 p-4 "
            src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
            alt="Toyfort Logo"
          />
          <div className="min-w-[150px] ">
            <p className="font-bold text-black text-lg ">Information</p>
            <ul className="text-gray-500 mt-4">
              <li className="m-2"><a href="/about-us">About Us</a></li>
              <li className="m-2"><a href="/terms-conditions">Terms & Conditions</a></li>
              <li className="m-2"><a href="/shipping-policy">Shipping Policy</a></li>
              <li className="m-2"><a href="/privacy-policy">Privacy Policy</a></li>
              <li className="m-2"><a href="/help-center">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-[150px] mt-8">
          <p className="font-bold text-black text-lg ">Quick Links</p>
          <ul className="text-gray-500 mt-4">
            <li className="m-2"><a href="/home">Home</a></li>
            <li className="m-2"><a href="/contact">Contact</a></li>
            <li className="m-2"><a href="/blog">Blog</a></li>
            <li className="m-2"><a href="/write-for-us">Write for us</a></li>
          </ul>
        </div>

        {/* Locate Me + Map */}
        <div className="flex flex-col gap-4 mt-6 w-full md:flex-row flex-1 md:mt-8">
          <div>
            <p className="font-bold text-black text-lg">Locate Me</p>
            <p className="m-2 hover:text-red-600 font-light cursor-pointer">
              📍 Address: E – 99, Kamla Nagar, – 110007
            </p>
            <p className="m-2 hover:text-red-600 font-light cursor-pointer">
              📞 Phone: +91 – 93152-57050
            </p>
            <p className="m-2 hover:text-red-600 font-light cursor-pointer">
              📧 Email: support@toyfort.in
            </p>
          </div>

          <iframe
            className="w-full h-52 sm:h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393742061!2d77.0688998!3d28.5275195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3502f2d17b1%3A0x8b63638e3f5219fd!2sKamla%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707580109182"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 mt-6 border-t border-gray-300 flex-wrap">
        <p className="text-center text-gray-400 text-sm px-4 max-w-xl">
          Copyright 2024 Toyfort - All Rights Reserved, Developed by Austere
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <img src={visaImg} alt="Visa" className="h-6" />
          <img src={masterCard} alt="MasterCard" className="h-6" />
          <img src={maestro} alt="Maestro" className="h-6" />
          <img src={american} alt="Amex" className="h-6" />
          <img src={discover} alt="Discover" className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default Footer;


