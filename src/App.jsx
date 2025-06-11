import Approutes from "./Routes/Approutes";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import { useState } from "react";
import Layout from "./components/Layout"; // ✅ Layout handles Navbar/Footer visibility

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const handleLoginSuccess = (user, token) => {
    console.log("Login successful in App.jsx:", user, token);
  };

  return (
    <BrowserRouter>
      <AppContextProvider>
        
          <Approutes openLoginModal={openLoginModal} />

        <Toaster />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onSuccess={handleLoginSuccess}
        />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
