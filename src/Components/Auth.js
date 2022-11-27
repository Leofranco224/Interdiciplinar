import React from "react";

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Bem vindo de volta!</h3>
          <div className="text-center text-secondary ">
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
          <div class="form-check">
            <input class="form-check-input inpt-dark" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label text-secondary" for="flexCheckDefault">
                lembrar-me
            </label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-default">
              Entrar
            </button>
          </div>
        </div>
      </form>
      <div className="Auth-form-content Auth-form-Cadastro">
        <h3>Novo Aqui?</h3>
        <div>
            Crie sua conta e comece a jogar
        </div>
        <button className="btn btn-light">Cadastre-se</button>
      </div>
    </div>
    
  );
}
