import React from 'react'
import Users from "../images/Users.png"
import '../style/SobreNos.css'
import { Link } from 'react-router-dom';
import loginPeople from '../images/login-people.png'

function SobreNos() {
  return (
    <>

      <header>
        <div>
          <img src={Users} alt="Users" className='users1' />  
        </div>
        <p className='titulo1'>Sobre Nós</p>
        <div id='rotas1'>
          <Link to='/' className='botao1'>Início</Link>
          <a className='link1' href="#header"><p className='botao1'>Sobre Nós</p></a>
          <Link to='/Contato' className='botao1'>Contato</Link>
        </div>
        <div id='login1'>
          <img src={loginPeople} alt="login" className='people1' />
          <Link to='/Cadastro' className='botao1'>Login</Link>
        </div>
      </header>
      <main>
        <div className='caixabranca'>
          <div className='caixinha'>
            <h2 className='textinho1'>All Day</h2>
          </div>

          <div className='textao'>O All Day é uma aplicação que possui a finalidade de auxiliar na organização das tarefas diárias, evitando a desordem e promovendo uma rotina mais produtiva. Nosso objetivo é oferecer uma solução prática e eficiente que facilite o gerenciamento do tempo, evitando a desorganização e permitindo que você mantenha o foco realizando suas atividades com maior facilidade e tranquilidade.</div>
        </div>
      </main>
    </>
  )
}

export default SobreNos

