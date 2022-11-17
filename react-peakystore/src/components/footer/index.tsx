import Styles from './Footer.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.div}>
                <p className={Styles.ofertas}>Receba as nossas ofertas:</p>
                <input type="email" placeholder='Email' />
                <button>Ok</button>
                <br/>
                <span className={Styles.redes}>Redes sociais</span>
                <br/>
                <div className={Styles.icons}>
                <LinkedInIcon fontSize='large'/>
                <InstagramIcon fontSize='large'/>
                <TwitterIcon fontSize='large'/>
                </div>
            </div>

            <div className={Styles.div}>
                <h2>Departamentos</h2>
                <div className={Styles.topicos}>
                    <p>Masculino</p>
                    <p>Feminino</p>
                    <p>Infantil</p>
                    <p>Jeans</p>
                    <p>Acessórios</p>
                </div>
            </div>

            <div className={Styles.div}>
                <h2>Atendimento ao cliente</h2>
                <div className={Styles.topicos}>
                    <p>Fale conosco</p>
                    <p>Meus pedidos</p>
                    <p>Formas de pagamento</p>
                    <p>Perguntas frequentes</p>
                </div>
            </div>

            <div className={Styles.footerBottom}>
                <p>© 2022 TIPeaky</p>
            </div>
        </footer>
    )
}

export default Footer;