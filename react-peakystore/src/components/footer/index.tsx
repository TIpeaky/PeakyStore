import Styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div>
                <p>Receba as nossas ofertas:</p>
                <input type="email" placeholder='Email' />
                <button>Ok</button>
                <span className='redes'>Redes sociais</span>
                <img src='./images/linkedin-in.svg' alt='Linkedin' />
                <FontAwesomeIcon icon={['fa-brands', 'fa-linkedin-in']} /> 
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </div>
        </footer>
    )
}

export default Footer;