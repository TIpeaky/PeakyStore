import { Outlet } from "react-router-dom"

import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from "../../components/footer/"
import Header from "../../components/header/Header"
const PaginaBase = () => {
    return (<main>
        <Header/>
        <NavBar />
        <Banner />
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase