import styles from './Header.module.scss'
import logo from '../../images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleUser, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import * as React from 'react';
import Popover from '@mui/material/Popover';
import CategoriesPopUp from './CategoriesPopUp';


function Header() {
    //Pop Over
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <a href="#"><img src={logo} alt="logo" /><span>PeakyStore</span></a>
            </div>

            <ul className={styles.header_nav}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <div>
                    <li className={styles.category_li}>
                        <a className={styles.category_link} onClick={handleClick}>Categorias
                        <FontAwesomeIcon className={styles.angle_down_icon} icon={faAngleDown}/>
                        </a>  
                    </li>
                        <Popover className={styles.teste2} id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                            anchorOrigin={{ vertical: 25, horizontal: -200}}
                            anchorReference='anchorEl'
                            >
                            <CategoriesPopUp />
                        </Popover>
                </div>
                <li><a href="#">Contato</a></li>
            </ul>

            <div className={styles.search_bar_and_icons}>
                <div className={styles.search_bar}>
                    <form>
                        <label htmlFor="input_search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search_bar_icon} />
                        </label>
                        <input type="text" placeholder='Buscar produtos' id="input_search" />
                    </form>
                </div>
                <div className={styles.header_icons}>
                    <a href='#'>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header