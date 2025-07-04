import React from 'react'
import "../style/Cadastro.css"
import { useState } from "react"
import { Link } from 'react-router-dom';
function Cadastro() {
  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [confirmSenha, setConfirmSenha] = useState(null)
  function clique() {
    if (nome != null && email != null && senha != null && senha == confirmSenha) {
      localStorage.setItem('nome', nome)
      localStorage.setItem('senha', senha)
      window.location.href = 'http://localhost:5173/meu-dia'
    }
    else {
      alert('Preencha os campos corretamente!')
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
              <input className='textInput' value={nome} onChange={event => setNome(event.target.value)} type="text" />
            </div>
            <div>
              <p>E-mail</p>
              <input className='textInput' type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div>
              <p>Senha</p>
              <input className='textInput' type="password" value={senha} onChange={event => setSenha(event.target.value)} />
            </div>
            <div>
              <p>Confirmar Senha</p>
              <input className='textInput' type="password" value={confirmSenha} onChange={event => setConfirmSenha(event.target.value)} />
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
              <button onClick={clique}>Cadastrar-se</button>
              <p>já possui um conta? <Link to='/Login'>Faça Login!</Link></p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Cadastro