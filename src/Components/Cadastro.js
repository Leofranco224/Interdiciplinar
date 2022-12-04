import React from "react";
import { useNavigate } from 'react-router-dom';
import cartolaImg from '../images/cartolaImagem.png';
import loginImg from '../images/cartololLogin.png'
import loading from '../images/loading-gif.gif';

export default function Cadastro(props) {

  // const [UserName, setUserName] = React.useState('');
  // const [Email, setEmail] = React.useState('');
  // const [Senha, setSenha] = React.useState('');
  // const [ConfirmaSenha, setConfirmaSenha] = React.useState('');
  
  const navigate = useNavigate();

  const cadastraUsuario = async event => {
    event.preventDefault();
    document.getElementById('loadinganim').style.display = 'inline-block'
    document.getElementById('btntext').innerHTML = ""
    document.getElementById('msngerro').innerHTML = ""
    if(event.target.username.value <= 0 || event.target.email.value <= 0 || event.target.password.value <= 0 || event.target.confirm_password.value <= 0)
    {
      document.getElementById('loadinganim').style.display = 'none'
      document.getElementById('btntext').innerHTML = "Criar conta"
      document.getElementById('msngerro').innerHTML = "Existem campos vazios que devem ser preenchidos!"
      return;
    }
    if(event.target.password.value !== event.target.confirm_password.value)
    {
      document.getElementById('loadinganim').style.display = 'none'
      document.getElementById('btntext').innerHTML = "Criar conta"
      document.getElementById('msngerro').innerHTML = "As senhas inseridas não são iguais."
      return;
    }

    const res = await fetch('https://cartolol-apirest.vercel.app/api/cadastrar', {
      body: JSON.stringify({
        username: event.target.username.value,
        email: event.target.email.value,
        senha: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST'
    })
    const result = await res.json()
    console.log(result.status)
    if (result.status == "true") {
      navigate("/");
    }
    
  }

  return (
    <div className="Cadastro-form-container" >
      <div className="main-content">
        <div className="top-bar mt-3">
          <img className="logo" src={cartolaImg} alt="logo" />
          <p className="main-title">Cartolol</p>
        </div>

        <div className="register-form-content" >
          <form className="Cadastro-form" onSubmit={cadastraUsuario}>
            <h3 className="Cadastro-form-title">Crie sua conta</h3>
            <div className="text-secondary d-flex mb-3" >
              Já possui uma conta?
              <a href="/" className="redirect-login-text">Entrar</a>
            </div>

            <div className="form-group mt-3">
              <input
                id="username"
                type="text"
                className="form-control mt-1 inpt-dark"
                placeholder="Nome de Usuário"
              />
            </div>
            <div className="form-group mt-3">
              <input
                id="email"
                type="email"
                className="form-control mt-1 inpt-dark"
                placeholder="E-mail"
              />
            </div>
            <div className="form-group mt-3">
              <input
                id="password"
                type="password"
                className="form-control mt-1 inpt-dark"
                placeholder="Senha"
              />
            </div>
            <div className="form-group mt-3">
              <input
                id="confirm_password"
                type="password"
                className="form-control mt-1 inpt-dark"
                placeholder="Confirma Senha"
              />
            </div>
            <div className="btn-area mt-4">
            <div id="msngerro" className="msg-erro mt-2"></div>
              <button type="submit" className="btn submit-btn-def">
                <div id='btntext'>Criar conta</div>
                <img id="loadinganim" className="loading-btn-cadastro" src={loading} alt="foto" onLoad={(event) => event.target.style.display = 'none'}></img>
              </button>
            </div>

          </form >
        </div>
      </div>

      <div className="image-content">
        <img className="cartolol-login" src={loginImg} alt="background" />
      </div>
    </div>
  );
}