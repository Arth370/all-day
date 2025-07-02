import React from 'react'
import '../style/Home.css'
import loginPeople from '../images/login-people.png'
import Logo from '../images/All-day-logo.png'

function Home() {
  return (
    <>
    <header>
      <div className='imagem'>
        <img src={Logo} alt="logo" className='logo'/>
      </div>
        <div id='rotas'>
            <p className='botao'>Início</p>
            <p className='botao'>Contato</p>
            <p className='botao'>Suporte</p>
        </div>
        <div id='login'>
            <img src={loginPeople} alt="login" className='people' />
            <a href="http://localhost:5173/login" className='botao'><p className='text-button'>Login</p></a>
        </div>
    </header>
    <main>
      <section id='secao1'>
        <h1 id='AllDay'>All Day,</h1>
        <h2>A Melhor Forma de se Organizar</h2>
        <div id='separacao'></div>
        <p>organize seu dia com a ajuda da melhor plataforma<br/> de lista de tarefas.</p>
      </section>
    </main>
    </>
  )
}

export default Home