import { useTheme } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
import Navigation from './Navigation';
import { useMemo } from 'react';

export interface SidebarProps {
    drawerOpen: boolean;
    drawerToggle: any;
    window?: any;
};

function Sidebar ({ drawerOpen, drawerToggle, window }: SidebarProps) {
    const theme = useTheme();

    const navigation = useMemo(() => <Navigation />, []);

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: 260 }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant= 'persistent'
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 260,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawerOpen && navigation}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
