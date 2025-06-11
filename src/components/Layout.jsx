import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, openLoginModal }) => {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div className="overflow-x-hidden w-full m-0 p-0" style={{ paddingTop: "18px" }}>
      {!isAdmin && <Navbar openLoginModal={openLoginModal} />}
      
      {children}
      
      {!isAdmin && <Footer />}
    </div>
  );
};

export default Layout;
