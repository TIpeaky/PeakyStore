import { Outlet } from "react-router-dom"

import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from "../../components/footer/index"

import Rodape from "../../components/Footer"
import Header from "../../components/Header"
const PaginaBase = () => {
    return (<main>
        <Header/>
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase