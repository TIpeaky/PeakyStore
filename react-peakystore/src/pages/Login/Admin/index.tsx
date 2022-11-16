import React, { useState, useEffect } from 'react';
import { AbBotao } from '../../../components/AbBotao';
import http from "../../../http"
import LogoWhite from "./assets/PeakyStore.png"
import { AbCampoTexto } from '../../../components/AbCampoTexto';
import styled from './Login.module.scss';
import { redirect, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
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
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.token)
                setUsername('')
                setPassword('')
                //navigate('/dashboard')
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
        <div className={styled.login__background}>
            <section className={styled.login} >
                <figure>
                    <img className={styled.login__img} src={LogoWhite} alt="Logo da empresa e seu nome" />
                </figure>
                <div className={styled.login__block}></div>
                <form onSubmit={aoSubmeterFormular}>
                    <h2>
                        PeakyStore Administrativo
                    </h2>
                    <AbCampoTexto
                        label="E-mail"
                        value={username}
                        placeholder="Entre com o seu E-mail aqui"
                        onChange={setUsername}
                        type="email"
                    />
                    <AbCampoTexto
                        label="Senha"
                        value={password}
                        onChange={setPassword}
                        placeholder="Entre com o sua senha aqui"
                        type="password"
                    />

                    <AbBotao texto="Entrar" />

                </form>
            </section>
        </div>)
}

export default LoginAdmin;