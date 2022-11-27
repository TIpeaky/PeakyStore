import { Outlet } from "react-router-dom"
import Sidebar from '../../../components/SideBar'
const PaginaBase = () => {
    return (<main>
        <NavBar />
        <Sidebar />
        <Outlet />
    </main>)
}

export default PaginaBase