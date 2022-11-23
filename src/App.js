import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Ciudades from "./componentes/Ciudades";
import Ciudad from "./componentes/Ciudad";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Ciudades />}></Route>
      <Route path="/ciudad/:id" element={<Ciudad />}></Route>
    </Routes>

    <Footer />
  </div>
);
export default App;
