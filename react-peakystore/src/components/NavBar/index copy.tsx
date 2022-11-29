import styles from './Header.module.scss'
import logo from '../../images/logoWhiteMin.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as React from 'react';
import Popover from '@mui/material/Popover';
import UserPopUp from './UserPopUp';
import { Link } from 'react-router-dom';
import { Collapse, FormControlLabel, Switch } from '@mui/material';

function NavBar () {
    
    const [anchorEl, setAnchorUser] = React.useState<HTMLAnchorElement | null>(null);

    const handleClickUser = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorUser(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorUser(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };


    return (
        <header className={styles.header}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <div className={styles.header_logo}>
                <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                    {<img src={logo} alt="logo" />}
                </Collapse>
            </div>

            <div className={styles.search_bar_and_icons}>
                <div className={styles.header_icons}>
                    <a href='#'>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
                    </a>
                    <a onClick={handleClickUser}>
                        <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
                    </a>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleCloseUser}
                            anchorOrigin={{ vertical: 'bottom', horizontal: -50}}
                            anchorReference='anchorEl'>
                        <UserPopUp/>
                    </Popover>
                </div>
            </div>
        </header>
    )
}

export default NavBar;