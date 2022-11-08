import { Outlet } from "react-router-dom"

import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer"

const PaginaBase = () => {
    return (<main>
        <NavBar />
        <Banner />
        <Outlet />
        <Footer />
    </main>)
}

export default PaginaBase