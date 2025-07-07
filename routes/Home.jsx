import React from 'react'
import '../style/Home.css'
import loginPeople from '../images/login-people.png'
import Logo from '../images/All-day-logo.png'
import { Link } from 'react-router-dom';
import importante from "../images/importante.png"
import anotacoes from "../images/anotacoes.png"
import meudia from "../images/MeuDia.png"
import eventos from "../images/Eventos.png"

function Home() {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="logo" className='logo' />
        </div>
        <div id='rotas'>

            <a className='link' href="#header"><p className='botao'>Início</p></a>
            <Link to='/Sobre-nos' className='botao'>Sobre Nós</Link>
            <Link to='/Contato' className='botao'>Contato</Link>

        </div>
        <div id='login'>
          <img src={loginPeople} alt="login" className='people' />
          <Link to='Cadastro' className='botao'>Login</Link>
        </div>
      </header>
      <main id='conteudo2'>
        <section id='secao1'>
          <div>
            <h1 id='AllDay'>All Day,</h1>
            <h2 id='title'>A Melhor Forma de se Organizar</h2>
            <div id='separacao'></div>
            <p id='text'>organize seu dia com a ajuda da melhor plataforma<br /> de lista de tarefas.</p>
          </div>
          <div >
            <img src={anotacoes} className='imagem' alt="" />
          </div>
        </section>
        <section id='secao2'>
          <div>
            <img src={meudia} alt="" className='imagem' />
          </div>
          <div>
            <div><h2 id='title'>Planeje de Forma Inteligente</h2>
              <p id='text'>Com nossa lista “Meu Dia” você será<br /> capaz de separar e ordenar seu dia<br /> de forma estratégica.</p></div>
          </div>
        </section>
        <section id='secao3'>
          <div>
            <h1 id='title'>
              Planeje seus eventos de<br /> forma excepcional...
            </h1>
            <p id='text'>Nossa plataforma disponibiliza uma<br /> lista para cada evento desejado.</p>
          </div>
          <div>
            <img src={eventos} alt="" className='imagem' />
          </div>
        </section>
        <section id='secao4'>
                    <div>
            <img src={importante} alt="" className='imagem' />
          </div>
          <div>
            <h1 id='title'>
              Detalhe suas tarefas...
            </h1>
            <p id='text'>Nossa aplicação permite <br /> a adição de anotações ou<br/> comentários em cada atividade.</p>
          </div>

        </section>
        
      </main>
      <footer>
        <h1>Copyright © 2025 All Day. Todos os direitos reservados.</h1>
      </footer>
    </>
  )
}

export default Home