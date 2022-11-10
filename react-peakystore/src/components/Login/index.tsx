import React, { useState } from 'react';
import { AbBotao } from '../../components/AbBotao';
//import styled from './Login.module.scss'
import http from "../../http"

import LogoWhite from "./assets/logoWhite.png"
import { AbModal } from '../../components/AbModal';
import { AbCampoTexto } from '../../components/AbCampoTexto';
import styled from './Login.module.scss';

interface PropsModalLoginUsuario {
  aberta: boolean
  aoFechar: () => void
  aoEfetuarLogin: () => void
}

const LoginUsuario = ({ aberta, aoFechar, aoEfetuarLogin } : PropsModalLoginUsuario) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault()
      const usuario = {
          email,
          senha,
      }
      
      http.post('auth', usuario)
          .then(reposta => {
              sessionStorage.setItem('token', reposta.data.access_token)
              setEmail('')
              setSenha('')
              aoEfetuarLogin()
          })
          .catch(erro => {
              if (erro?.response?.data?.message) {
                  alert(erro.response.data.message)
              } else {
                  alert('Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!')
              }
              
          })
  }

  return (<AbModal
      aberta={aberta}
      aoFechar={aoFechar}    
  >
      <section className={styled.login} >
          <figure>
              <img src={LogoWhite} alt="Logo da empresa e seu nome" />
          </figure>
          <div className={styled.login__block}></div>
          <form onSubmit={aoSubmeterFormular}>
            
            <AbCampoTexto 
                label="E-mail"
                value={email}
                onChange={setEmail}
                type="email"
            />
            <AbCampoTexto 
                label="Senha"
                value={senha}
                onChange={setSenha}
                type="password"
            />
            <div>
                <link href='#'>Esqueceu sua senha?</link>
            </div>

            <button className="login__singIn__button">
                <AbBotao texto="Fazer login"/>
            </button>

            <div>
                Ainda não tem conta? <link href='#'> Cadastrar</link>
            </div>

            <p>
                - or -
            </p>

            <div>
                <button className="login__singIn__button">
                    <AbBotao texto="Entrar com o Google"/>
                </button>

                <button className="login__singIn__button">
                    <AbBotao texto="Entrar com o Facebook"/>
                </button>
            </div>
          </form>
      </section>
  </AbModal>)
}

export default LoginUsuario;