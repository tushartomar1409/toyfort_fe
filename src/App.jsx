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
        <div>
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
