import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Login.css"
function Login() {
  return (
    <>
        <div id='meio'>
            <Link to='/'>X</Link>
            <div id='conteudo'>
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
                </section>
                <section>
                    <button id='botao'>Entrar</button>
                </section>
            </div>
        </div>
    </>
  )
}

export default Login