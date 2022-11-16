import Styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div>
                <p>Receba as nossas ofertas:</p>
                <input type="email" placeholder='Email' />
                <button>Ok</button>
                <span className='redes'>Redes sociais</span>
                <img src='./images/linkedin-in.png' alt='LinkedIn' />
            </div>
        </footer>
    )
}

export default Footer;