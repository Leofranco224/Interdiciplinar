import React from "react";

export default function Auth (props) {
  return (
    <div className="Auth-form-container">
      <div className="Auth-form-content">
        <form className="Auth-form">
          <h3 className="Auth-form-title">Bem vindo de volta!</h3>
          <div className="text-center text-secondary">
            Entre em sua conta
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1 inpt-dark"
              placeholder="Usuário"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1 inpt-dark"
              placeholder="Senha"
            />
          </div>
          <div class="form-check mt-1">
            <input class="form-check-input inpt-dark inpt-check" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label text-secondary" for="flexCheckDefault">
              lembrar-me
            </label>
          </div>
          <div className="btn-area mt-3">
            <button type="submit" className="btn btn-def">
              Entrar
            </button>
          </div>
        </form>
      </div>
      <div className="Auth-form-Cadastro">
        <div className="cadastro-area">
          <h3 className="main-text">Novo Aqui?</h3>
          <p className="second-text">Crie sua conta e comece a jogar</p>
          <a href="/Cadastro" className="btn btn-light btn-cadastro mt-4">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
