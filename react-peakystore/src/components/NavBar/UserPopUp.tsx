import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './UserPopUp.module.scss'

function UserPopUp() {
    let navigate = useNavigate();
    const token = sessionStorage.getItem('token')
    const fullName = sessionStorage.getItem('name')


    const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(token != null)
    const [user, setUser] = useState<string>()

    useEffect(() => {
        if (token) {
            setUserIsLoggedIn(true)
            if(fullName != null) {
                let name = fullName.split(" ")
                setUser(name[0])
            }
        } else {
            setUserIsLoggedIn(false)
            //navigate('/admin/login')
        }
    }, [])


    const efetuarLogout = () => {
        setUserIsLoggedIn(false)
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/admin/login')
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.account_title}>Olá, {user}!</h3>
            <ul className={styles.account_menu}>
                <li className={styles.link_standard}><a  href="#">Minha conta</a></li>
                <li className={styles.link_logout} onClick={efetuarLogout}>Sair da conta</li>
            </ul>
        </div>
    )
}

export default UserPopUp