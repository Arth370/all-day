import React from 'react'
import '../style/Home.css'
import loginPeople from '../images/login-people.png'
import Logo from '../images/All-day-logo.png'
import { Link } from 'react-router-dom';
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
            <Link to='Cadastro' className='botao'>Login</Link>
        </div>
    </header>
    <main>
      <section id='secao1'>
        <h1 id='AllDay'>All Day,</h1>
        <h2 id='title'>A Melhor Forma de se Organizar</h2>
        <div id='separacao'></div>
        <p id='text'>organize seu dia com a ajuda da melhor plataforma<br/> de lista de tarefas.</p>
      </section>
      <section id='secao2'>
        <div><h2 id='title'>Planeje de Forma Inteligente</h2>
        <p id='text'>Com nossa lista “Meu Dia” você será<br/> capaz de separar e ordenar seu dia<br/> de forma estratégica.</p></div>
      </section>
      <section>
        <div>
          <h1 id='title'>
          Calendário para Melhor <br/>Planejamento...
          </h1>
          <p id='text'>Disponibilizamos um calendário<br/> para melhor ordenação de tarefas durante o<br/> mês.</p>
        </div>
      </section>
      <section>
        <div>
        <h1 id='title'>
        Planeje seus eventos de<br/> forma excepcional...
          </h1>
          <p id='text'>Nossa plataforma disponibiliza uma<br/> lista para cada evento desejado.</p>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home