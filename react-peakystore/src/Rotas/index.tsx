import { Route, Routes} from 'react-router-dom'
// import Footer from '../components/Footer'
import Home from "../pages/Home"
import LoginUsuario from '../pages/Login'
import PaginaBase from "../pages/PageBase"


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<LoginUsuario />} />
          </Route>
          
        </Routes>)
}

export default Rotas