
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Cadastro from "./Components/Cadastro";
import Escalacao from "./Components/Escalacao";
import Ranking from "./Components/Ranking";
import Perfil from "./Components/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/escalacao" element={<Escalacao />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App