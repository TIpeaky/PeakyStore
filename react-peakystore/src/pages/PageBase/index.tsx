import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Rodape from "../../components/Footer"

const PaginaBase = () => {
    return (<main>
        <Header/>
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase