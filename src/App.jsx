import Approutes from "./Routes/Approutes";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div style={{ paddingTop: '180px' }}> {/* REPLACE 'Xpx' with your Navbar's actual height */}
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
