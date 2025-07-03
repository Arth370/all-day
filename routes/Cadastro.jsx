import React from 'react'
import "../style/Login.css"
import { Link } from 'react-router-dom';
function Cadastro() {
  return (
    <>
      <div id='meio'>
        <Link to='/'>X</Link>
          <h1>All Day</h1>
          <section id='textos'>
             <div>
              <p>Nome</p>
            <input className='textInput' type="text" />
            </div>
            <div>
              <p>E-mail</p>
              <input className='textInput' type="text" />
            </div>
            <div>
              <p>Senha</p>
              <input className='textInput' type="password" />
            </div>
            <div>
              <p>Confirmar Senha</p>
              <input className='textInput' type="password" />
            </div>
          </section>
          <section id='parte-embaixo'>
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
            </div>
            <div id='inferior'>
                     <button>Cadastrar-se</button>
          <p>já possui um conta? <Link to=''>Faça Login!</Link></p>
            </div>
          </section>
       </div>
    </>
  )
}

export default Cadastro