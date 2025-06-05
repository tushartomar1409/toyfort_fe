import Approutes from "./Routes/Approutes";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; 

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div>
          <a
            href="https://wa.me/918744055175?text=Hi%2C%20I%20need%20help%20with%20my%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-14 right-4 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
          >
            <FaWhatsapp size={30} />
          </a>

          <Navbar />
          <Approutes />
          <Footer />
        </div>
        <Toaster />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
