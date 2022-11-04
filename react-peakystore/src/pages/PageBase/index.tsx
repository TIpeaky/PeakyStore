import { Outlet } from "react-router-dom"

import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from "../../components/footer/index"

const PaginaBase = () => {
    return (<main>
        <NavBar />
        <Banner />
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase