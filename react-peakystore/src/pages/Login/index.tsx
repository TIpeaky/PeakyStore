import React, { useState } from 'react';
import { AbBotao } from '../../components/AbBotao';
import http from "../../http"
import LogoWhite from "./assets/logoWhite.png"
import { AbCampoTexto } from '../../components/AbCampoTexto';
import styled from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const LoginUsuario = () => {

  let navigate = useNavigate()


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault()
      const usuario = {
        username,
          password,
      }

      http.post('auth', usuario)
          .then(reposta => {
              sessionStorage.setItem('token', reposta.data.access_token)
              setUsername('')
              setPassword('')
              navigate(-1)
          })
          .catch(erro => {
              if (erro?.response?.data?.message) {
                  alert(erro.response.data.message)
              } else {
                  alert('Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!')
              }

          })
  }

  return (
        <section className={styled.login} >
          <figure>
              <img className={styled.login__img} src={LogoWhite} alt="Logo da empresa e seu nome" />
          </figure>
          <div className={styled.login__block}></div>
          <form onSubmit={aoSubmeterFormular}>
            <h2>
                Já sou Cliente
            </h2>
            <AbCampoTexto
                label="E-mail"
                value={username}
                placeholder= "Entre com o seu E-mail aqui"
                onChange={setUsername}
                type="email"
            />
            <AbCampoTexto
                label="Senha"
                value={password}
                onChange={setPassword}
                placeholder= "Entre com o sua senha aqui"
                type="password"
            />
            <div className={styled.login__singIn__forgotPassword}>
                <a href=''>Esqueceu sua senha?</a>
            </div>

            <AbBotao texto="Entrar"/>

            <div className={styled.login__singIn__register} >
                Ainda não tem conta? <a href=''> Cadastrar</a>
            </div>



          </form>
      </section>)
}

export default LoginUsuario;