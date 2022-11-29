import styles from './NavBar.module.scss'
import logo from '../../images/logoWhiteMin.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import * as React from 'react';
import Popover from '@mui/material/Popover';
import UserPopUp from './UserPopUp';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
//import { Collapse, FormControlLabel, Switch } from '@mui/material';

function NavBar ({ handleLeftDrawerToggle }: any ) {
    const theme = useTheme();
    
    const [anchorEl, setAnchorUser] = React.useState<HTMLAnchorElement | null>(null);

    const handleClickUser = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorUser(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorUser(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <header className={styles.header}>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box className={styles.header_logo} >
                    <img src={logo} alt="logo" />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '8px',
                            width: '34px',
                            height: '34px',
                            fontSize: '1.2rem',
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                    >
                        <MenuOutlined />
                    </Avatar>
                </ButtonBase>
            </Box>
            

            <div className={styles.header_icons}>

                <a onClick={handleClickUser}>
                    <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
                </a>
                <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleCloseUser}
                        anchorOrigin={{ vertical: 'bottom', horizontal: -50}}
                        anchorReference='anchorEl'>
                    <UserPopUp/>
                </Popover>
            </div>
        </header>
    )
}

export default NavBar;