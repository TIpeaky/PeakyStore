import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './UserPopUp.module.scss'

function UserPopUp() {
    let navigate = useNavigate();
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [user, setUser] = useState("João")
    return (
        <div className={styles.container}>
            {userIsLoggedIn? (
                <div>
                <h3 className={styles.account_title}>Olá, {user}!</h3>
                <ul className={styles.account_menu}>
                    <li className={styles.link_standard}><a  href="#">Minha conta</a></li>
                    <li className={styles.link_standard}><a  href="#">Meus pedidos</a></li>
                    <li className={styles.link_standard}><a  href="#">Minha lista de desejos</a></li>
                    <li className={styles.link_logout}><a  href="#">Sair da conta</a></li>
                </ul>
                </div>
            ) : (
                <div>
                    <a href="#"><button 
                    className={styles.btn_login} 
                    onClick={() => navigate('/login')}>Fazer Login</button></a>
                    <span className={styles.span_signup}>Cliente novo?</span>
                    <a className={styles.link_signup} href="#">Cadastrar</a>
                </div>
            )}
        </div>
    )
}

export default UserPopUp