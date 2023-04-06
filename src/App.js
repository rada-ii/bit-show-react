import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import NoResults from "./pages/NoResults";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use setTimeout to simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/show/:id" element={<ShowDetailsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoResults />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
