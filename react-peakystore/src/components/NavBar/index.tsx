import estilos from './NavBar.module.scss';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import LoginUsuario from '../Login';
import usuario from './assets/userCircle.svg'
import BotaoNavegacao from '../BotaoNavegacao';

const NavBar = () => {
  const [modalLoginAberta, setModalLoginAberta] = useState(false)

  let navigate = useNavigate();

  const token = sessionStorage.getItem('token')

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

  const aoEfetuarLogin = () => {
    setModalLoginAberta(false)
    setUsuarioEstaLogado(true)
}

const efetuarLogout = () => {
    setUsuarioEstaLogado(false)
    sessionStorage.removeItem('token')
    navigate('/')
}

  return (<nav className={estilos.Link}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/restaurantes">Restaurantes</Link>
      </li>
    </ul>
    <ul className="acoes">
            {!usuarioEstaLogado && (<>
                <li>
                    <BotaoNavegacao
                        texto="Login"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalLoginAberta(true)}
                    />
                    <LoginUsuario
                        aberta={modalLoginAberta}
                        aoFechar={() => setModalLoginAberta(false)}
                        aoEfetuarLogin={aoEfetuarLogin}
                    />
                </li>
            </>)}
            {usuarioEstaLogado &&
                <>
                    <li>
                        <Link to="/minha-conta/pedidos">Minha conta</Link>
                    </li>
                    <li>
                        <BotaoNavegacao 
                            texto="Logout"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={efetuarLogout}
                        />
                    </li>
                </>
            }
        </ul>
  </nav>)
}

export default NavBar