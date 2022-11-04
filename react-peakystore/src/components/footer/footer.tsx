import React, {memo} from "react";
import Styles from './footer-styles.scss';

const Footer: React.FC = () => {
    return (
        <footer className={Styles.footer}>
            <div></div>
        </footer>
    )
}

export default memo(Footer);