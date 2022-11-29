import { Outlet } from "react-router-dom"
import NavBar from '../../../components/NavBar/index copy'
import Sidebar from '../../../components/SideBar'
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENU } from '../../../store/actions';

export interface RootState {
    customization: any;
    menu: any;
    name: string;
    openItem: string;
    openComponent: string;
    drawerOpen: boolean;
    componentDrawerOpen: boolean;
}

const PaginaBase = () => {
    const leftDrawerOpened = useSelector((state: RootState) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };


    return (<main>
        <NavBar />
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
        <Outlet />
    </main>)
}

export default PaginaBase

