import { Route, Routes} from 'react-router-dom'
// import Footer from '../components/Footer'
import Home from "../pages/Home"
import LoginAdmin from '../pages/Login/Admin'
import LoginUsuario from '../pages/Login/User'
import PaginaBase from "../pages/PageBase"
import UserRegister from "../pages/UserRegister"


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<LoginUsuario />} />
            <Route path='/register' element={<UserRegister />}/>
          </Route>
          <Route path='/admin'>
            <Route path='login' element={<LoginAdmin />} />
          </Route>
        </Routes>);
}

export default Rotas