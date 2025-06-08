import React from "react";
import "./App.css";
import NabMenu from "./components/NavMenu/NabMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/NavMenu/About";
import Products from "./components/products/Products";
import Contact from "./components/NavMenu/Contact";
import Home from "./components/NavMenu/Home";
import Service from "./components/NavMenu/Service";

function App() {
  // const [count, setCount] = useState(0)
  const data = "I am from parant (app)";
  const hndlcData = (childData) => {
    console.log(childData);
  };
  return (
    <div className="m-20 gap-y-6">
      <BrowserRouter>
        <NabMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
