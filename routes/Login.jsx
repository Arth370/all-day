import React from 'react'
import "../style/Login.css"
function Login() {
  return (
    <>
      <div id='meio'>
          <h1>All Day</h1>
          <div>
            <p>Nome</p>
          <input type="text" />
          </div>
          <div>
            <p>E-mail</p>
            <input type="text" />
          </div>
          <div>
            <p>Senha</p>
            
          </div>
          <div>
            <p>Gênero</p>
              <div id='generos'>
                <input type="radio" name='genero' value={'Masculino'} />
                <p>Masculino</p>
              </div>
              <div id='generos'>
              <input type="radio" name='genero' value={'Feminino'} />
                <p>Feminino</p>
                </div>
              <div id='generos'>
                <input type="radio" name='genero' value={'nao sei'} />
                <p>Prefiro nao comentar</p>
              </div>
          </div>

      </div>
    </>
  )
}

export default Login