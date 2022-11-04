import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import PaginaBase from "../pages/PageBase"


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
          <Route path='/' element={<Home />} />
        </Routes>)
}

export default Rotas