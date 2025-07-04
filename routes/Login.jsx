import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Login.css"
import { useState } from "react"
function Login() {
  const [nomeLogin,setNomeLogin]=useState(null)
  const [senhaLogin,setSenhaLogin]=useState(null)
  function click(){
    if(nomeLogin!=null&&senhaLogin!=null){
      if(nomeLogin==localStorage.getItem('nome')&&senhaLogin==localStorage.getItem('senha')){
        window.location.href='http://localhost:5173/meu-dia'
      }
      else{
        alert('Usuário ou senha errados!')
      }
    }      else{
        alert(nomeLogin)
        alert(senhaLogin)
      }
  }
  return (
    <>
        <div id='meio'>
            <Link to='/'>X</Link>
            <div id='conteudo'>
                          <h1>All Day</h1>
              <section id='textos'>
                 <div>
                   <p>Nome</p>
                    <input className='textInput' type="text" value={nomeLogin} onChange={event=>setNomeLogin(event.target.value)} />
                    </div>
                    <div>
                      <p>Senha</p>
                      <input className='textInput' type="password" value={senhaLogin} onChange={event=>setSenhaLogin(event.target.value)}/>
                    </div>
                </section>
                <section id='fim'>
                    <button id='botao' onClick={click}>Entrar</button>
                    <p>Não possui um conta? <Link to='/Cadastro'>Crie agora mesmo!</Link></p>
                </section>
            </div>
        </div>
    </>
  )
}

export default Login