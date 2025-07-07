import React from 'react'
import "../style/Contato.css"
import Mail from '../images/Mail.png'
import Instagram from '../images/Instagram.png'
import Gmail from '../images/Gmail.png'
import Telefone from '../images/Telefone.png'
import { Link } from 'react-router-dom';
import loginPeople from '../images/login-people.png'

function Contato() {
  return (

    <>
      <header>
        <div>
          <img src={Mail} alt="Mail" className='icone' />
        </div>
        <p className='titulo2'>Contato</p>
        <div id='rotas2'>
          <Link to='/' className='botao2'>Início</Link>
          <Link to='/Sobre-nos' className='botao'>Sobre Nós</Link>
          <a className='link2' href="#header"><p className='botao2'>Contato</p></a>
        </div>
        <div id='login2'>
          <img src={loginPeople} alt="login" className='people2' />
          <Link to='/Cadastro' className='botao2'>Login</Link>
        </div>
      </header>

      <main>
        <div className='mexidinho'>
          <div><img src={Instagram} alt="Instagram" className='Instagram' /></div>
          <div className='caixa1'> <p className='textinho1'>@alldaycorporation</p> </div>
          <div><img src={Gmail} alt="Gmail" className='Gmail' /></div>
          <div className='caixa2'> <p className='textinho2'>alldaycorporation@gmail.com.br</p> </div>
          <div><img src={Telefone} alt="Telefone" className='Telefone' /></div>
          <div className='caixa3'> <p className='textinho3'>+55 (82) 9663-4609</p> </div>
        </div>
      </main>
    </>
  )
}

export default Contato
