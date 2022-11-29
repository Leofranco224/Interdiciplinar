
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Escalacao" element={<Escalacao/>} />
        <Route path="/Ranking" element={<Ranking/>} />
        <Route path="/Perfil" element={<Perfil/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App