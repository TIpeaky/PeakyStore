import { useTheme } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
import { BrowserView } from 'react-device-detect';
import ScrollArea from 'react-scrollbar';


export interface SidebarProps {
    drawerOpen: boolean;
    drawerToggle: any;
    window?: any;
};

function Sidebar ({ drawerOpen, drawerToggle, window }: SidebarProps) {
    const theme = useTheme();

    const drawer = (
        <>
            <BrowserView>
                <ScrollArea>

                </ScrollArea>
            </BrowserView>
        </>
    );

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
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
