
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"
import Cadastro from "./Components/Cadastro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App