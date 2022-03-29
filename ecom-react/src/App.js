import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
