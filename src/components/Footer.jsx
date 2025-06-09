import visaImg from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import american from "../assets/amex.svg";
import discover from "../assets/discover.svg";

function Footer() {
  return (
    <div className="bg-gray-100 mt-12 px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto">
        <div className="flex justify-center lg:justify-start col-span-1">
          <img
            src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
            alt="Toy Fort Logo"
            className="max-w-[200px] h-auto object-contain"
          />
        </div>
        <div>
          <p className="font-bold text-black text-lg mb-4">Information</p>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black text-lg mb-4">Quick Links</p>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Write For Us</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2 flex flex-col xl:flex-row gap-6">
          <div className="flex-1">
            <p className="font-bold text-black text-lg mb-3">Locate Me</p>
            <p className="text-gray-600 mt-2 mb-3">📍 Address: E – 99, Kamla Nagar, – 110007</p>
            <p className="text-gray-600 mb-3">📞 Phone: +91 – 93152-57050</p>
            <p className="text-gray-600">📧 Email: support@toyfort.in</p>
          </div>
          <div className="flex-1">
            <iframe
              className="w-full h-48 md:h-40 lg:h-40 xl:h-48 rounded-lg shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393742061!2d77.0688998!3d28.5275195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3502f2d17b1%3A0x8b63638e3f5219fd!2sKamla%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707580109182"
              allowFullScreen
              loading="lazy"
              title="Kamla Nagar Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 mt-6 border-t border-gray-300 flex-wrap max-w-screen-xl mx-auto">
        <p className="text-center text-gray-400 text-sm px-4 max-w-xl">
          Copyright 2024 Toyfort - All Rights Reserved, Developed by Austere
          Systems / Designed by Crazy Bunny
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
