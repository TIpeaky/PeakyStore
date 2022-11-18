import { Route, Routes} from 'react-router-dom'
// import Footer from '../components/Footer'
import Home from "../pages/Home"
import LoginAdmin from '../pages/Login/Admin'
import LoginUsuario from '../pages/Login/User'
import PaginaBase from "../pages/PageBase"
import ProductCrud from '../pages/product_crud/ProductCrud'


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<LoginUsuario />} />
          </Route>
          <Route path='/admin'>
            <Route path='login' element={<LoginAdmin />} />
            <Route path='products' element={<ProductCrud />} />
          </Route>
        </Routes>)
}

export default Rotas