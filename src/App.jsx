import Approutes from "./Routes/Approutes";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import LoginModal from "./components/LoginModal"; // Import LoginModal
import { useState } from "react"; // Import useState

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State to control modal visibility

  const openLoginModal = () => setIsLoginModalOpen(true); // Function to open the modal
  const closeLoginModal = () => setIsLoginModalOpen(false); // Function to close the modal

  const handleLoginSuccess = (user, token) => {
    // This function will be called upon successful login from the modal
    // You can update user context or perform any other actions here
    console.log("Login successful in App.jsx:", user, token);
  };

  return (
    <BrowserRouter>
      <AppContextProvider>
        <div  className="overflow-x-hidden w-full m-0 p-0" style={{ paddingTop: '18px' }}> {/* REPLACE 'Xpx' with your Navbar's actual height */}
          <Navbar openLoginModal={openLoginModal} /> {/* Pass openLoginModal to Navbar */}
    
          {/* Pass openLoginModal to Approutes so it can be passed to Register */}
          <Approutes openLoginModal={openLoginModal} />
          <Footer />
        </div>
        <Toaster />
        <LoginModal
          isOpen={isLoginModalOpen} // Pass modal open state
          onClose={closeLoginModal} // Pass modal close function
          onSuccess={handleLoginSuccess} // Pass success handler
        />
      </AppContextProvider>



    </BrowserRouter>
    
  );
}

export default App;