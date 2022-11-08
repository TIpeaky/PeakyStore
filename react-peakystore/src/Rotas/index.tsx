import { Route, Routes} from 'react-router-dom'
// import Footer from '../components/Footer'
import Home from "../pages/Home"
import PaginaBase from "../pages/PageBase"
// import LoginUsuario from "../pages/Login"


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route path='/' element={<Home />} />
          </Route>
          
        </Routes>)
}

export default Rotas