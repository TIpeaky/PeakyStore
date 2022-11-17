import React, { useState } from "react";
import Header from "../../components/header/Header";
import estilos from "./UserRegister.module.scss";
import http from "../../http";
import ButtonRegister from "../../components/ButtonRegister";

const App = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [notification, setNotification] = useState(true);

  const register = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const user = {
      cpf,
      name,
      email,
      password,
      gender,
      birthDate,
      notification,
    };

    console.log("Usuário - cpf: " + user.cpf);
    console.log("Usuário - nome: " + user.name);
    console.log("Usuário - email: " + user.email);
    console.log("Usuário - senha: " + user.password);
    console.log("Usuário - preferência: " + user.gender);
    console.log("Usuário - data de nascimento: " + user.birthDate);
    console.log("Usuário - notificação: " + user.notification);

    http
      .post("user/client", user)
      .then((response) => {
        setCpf("");
        setName("");
        setEmail("");
        setPassWord("");
        setGender("");
        setBirthDate("");
        setNotification(true);
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao realizar o cadastro!");
        }
      });
  };

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evento.target.value);

    // if(data == "true") {
    //   setNotification(!notification)
    // }
  };

  return (
    <div>

      <Header></Header>

      <div className={estilos.background}>
        <section className={estilos.container}>
          <label htmlFor="" className={estilos.label}>
            Cadastrar com rede social
          </label>
          <ButtonRegister type="submit">
            <img src="./assets/logo-google.png" alt="" />
          </ButtonRegister>
        </section>

        <section className={estilos.container}>
          <form onSubmit={register}>
            <div className="form-item">
              <label htmlFor="name" className={estilos.label}>
                CPF
              </label>
              <input
                type="text"
                className={estilos.input}
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={(evento) => setCpf(evento.target.value)}
                placeholder="xxx.xxx.xxx-xx"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="name" className={estilos.label}>
                Nome completo
              </label>
              <input
                type="text"
                className={estilos.input}
                id="name"
                name="name"
                value={name}
                onChange={(evento) => setName(evento.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="">
              <label htmlFor="email" className={estilos.label}>
                Email
              </label>
              <input
                type="email"
                className={estilos.input}
                id="email"
                name="email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="">
              <label htmlFor="birthdate" className={estilos.label}>
                Data de nascimento
              </label>
              <input
                type="date"
                className={estilos.input}
                id="birthdate"
                name="birthdate"
                value={birthDate}
                onChange={(evento) => setBirthDate(evento.target.value)}
                placeholder="data"
                required
              />
            </div>

            <div className="">
              <label htmlFor="" className={estilos.label}>
                Quais as preferências
              </label>

              <div className={estilos.preferencia}>
                <input
                  type="radio"
                  className={estilos.preferencia_input}
                  id="moda-masculina"
                  name="Moda-Masculina"
                  value="MALE"
                  onChange={(evento) => setGender(evento.target.value)}
                />
                <label
                  htmlFor="moda-masculina"
                  className={estilos.preferencia_label}
                >
                  Moda Masculina
                </label>
              </div>

              <div className={estilos.preferencia}>
                <input
                  type="radio"
                  className={estilos.preferencia_input}
                  id="moda-feminina"
                  name="Moda-Feminina"
                  value="FEMALE"
                  onChange={(evento) => setGender(evento.target.value)}
                />
                <label
                  htmlFor="moda-feminina"
                  className={estilos.preferencia_label}
                >
                  Moda Feminina
                </label>
              </div>

              <div className={estilos.preferencia}>
                <input
                  type="radio"
                  className={estilos.preferencia_input}
                  id="moda-infantil"
                  name="Moda-Infantil"
                  value="KIDS"
                  onChange={(evento) => setGender(evento.target.value)}
                />
                <label
                  htmlFor="moda-infantil"
                  className={estilos.preferencia_label}
                >
                  Moda Infantil
                </label>
              </div>

              <div className={estilos.preferencia}>
                <input
                  type="radio"
                  className={estilos.preferencia_input}
                  id="nenhuma"
                  name="Nenhuma"
                  value="UNINFORMED"
                  onChange={(evento) => setGender(evento.target.value)}
                />
                <label htmlFor="nenhuma" className={estilos.preferencia_label}>
                  Prefiro não informar
                </label>
              </div>
            </div>

            <div className="">
              <label htmlFor="password" className={estilos.label}>
                Senha
              </label>
              <input
                type="password"
                className={estilos.inputPassword}
                id="password"
                name="password"
                value={password}
                onChange={(evento) => setPassWord(evento.target.value)}
                placeholder="Digite sua senha"
                required
              />
              <p className={estilos.p}>(Mínimo de 6 caractéres)</p>
            </div>

            <div className="">
              <label htmlFor="password-confirm" className={estilos.label}>
                Confirmar senha
              </label>
              <input
                type="password"
                className={estilos.input}
                id="password-confirm"
                name="password-confirm"
                value={password}
                onChange={(evento) => setPassWord(evento.target.value)}
                placeholder="Digite sua senha novamente"
                required
              />
            </div>

            <div className={estilos.notificacao}>
              <input
                type="checkbox"
                id="notification"
                className={estilos.notificacao_input}
                name="notification"
                value="true"
                onChange={handleChange}
              />
              <label
                htmlFor="notification"
                className={estilos.notificacao_label}
              >
                Desejo receber promoções e novidades por email
              </label>
            </div>

            <div className={estilos.notificacao}>
              <input
                type="checkbox"
                id="termos"
                className={estilos.notificacao_input}
              />
              <label htmlFor="termos" className={estilos.notificacao_label}>
                Li e aceito a{" "}
                <a href="https://github.com/TIpeaky/PeakyStore" target="blank">
                  Política de Privacidade
                </a>{" "}
                da PeakyStore e os{" "}
                <a href="https://github.com/TIpeaky/PeakyStore" target="blank">
                  Termos de Uso
                </a>
              </label>
            </div>

            <div className={estilos.button}>
              <ButtonRegister type="submit">Cadastrar</ButtonRegister>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default App;
