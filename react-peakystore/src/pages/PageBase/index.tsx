import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import Rodape from "../../components/footer/index"

const PaginaBase = () => {
    return (<main>
        <Header/>
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase