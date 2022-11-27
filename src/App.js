
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"
import Cadastro from "./Components/Cadastro"
import Escalacao from "./Components/Escalacao"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Escalacao" element={<Escalacao/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App