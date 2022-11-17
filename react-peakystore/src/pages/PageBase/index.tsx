import { Outlet } from "react-router-dom"
import Rodape from "../../components/footer"
import Header from "../../components/header/Header"
const PaginaBase = () => {
    return (<main>
        <Header/>
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase