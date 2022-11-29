import { useSelector } from 'react-redux';
import { Box, List, Typography } from '@mui/material';
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

export interface RootState {
    menu: any;
    name: string;
    openItem: string;
    openComponent: string;
    drawerOpen: boolean;
    componentDrawerOpen: boolean;
}

export interface Item {
    id: string;
    title: string;
    type: string;
    url: string;
    icon: any;
    external?: boolean;
    target?: boolean;
    disabled?: boolean;
    breadcrumbs?: boolean;
    chip?: any;
}

export interface Items {
    id: string;
    title: string;
    type: string;
    children: Item[];
}

export interface ItemsProps {
    item : Items;
}

const NavGroup = ( {item} : ItemsProps) => {
    const menu = useSelector((state: RootState) => state.menu);
    const { drawerOpen } = menu;

    const navCollapse = item.children?.map((menuItem) => {
        switch (menuItem.type) {
            case 'collapse':
                return (
                    <Typography key={menuItem.id} variant="caption" color="error" sx={{ p: 2.5 }}>
                        collapse - only available in paid version
                    </Typography>
                );
            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} level={1} />;
            default:
                return (
                    <Typography key={menuItem.id} variant="h6" color="error" align="center">
                        Fix - Group Collapse or Items
                    </Typography>
                );
        }
    });

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.title}
                        </Typography>
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    );
};

export default NavGroup;
