import { Route, Routes} from 'react-router-dom'
import Home from "../pages/Home"
import PaginaBase from "../pages/PageBase"
import UserRegister from "../pages/UserRegister"


const Rotas = () => {
    return (  
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/register' element={<UserRegister />}/>
        </Routes>)
}

export default Rotas