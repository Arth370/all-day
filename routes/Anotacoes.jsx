import React from 'react'
import "../style/Anotacoes.css"
import Icon from '../images/icon.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'
import editar from '../images/Edit.png'
import loginImagem from '../images/login-people.png'
import { Link } from 'react-router-dom'
let user = localStorage.getItem('nome')
function Anotacoes() {
  return (
    <>
            <header>
                <div id='Eventos'>
                    <img src={editar} alt="Icon" className='icon' />
                    <p>Anotações</p>
                </div>
                        <div className='icons'>
          <Link className='text-botao' to='/'><p>Início</p></Link>
          <Link className='text-botao' to='/meu-dia'><p>Meu dia</p></Link>
          <Link className='text-botao' to='/Eventos'><p>Eventos</p></Link>
          <Link className='text-botao' to='/Anotacoes'>Anotações</Link>
        </div>

        <div className='userLogin'>
          <img src={loginImagem} className='people'/>
          <p>{user}</p>
        </div>
            </header>
            <main>
                <div id='tudo'>
                    <div id='barra'>
                        <div id='img'>
                            <img src={Circle} alt="Cicle" className='circle' />
                        </div>
                        <div>
                            <p id='Add'>Adicionar uma anotação</p>
                        </div>
                    </div>
                    <div id='linha'>
                        <p>.</p>
                    </div>
                    <div id='barra2'>
                        <div id='img'>
                            <img src={Bloco} alt="Bloco" className='bloco' />
                            <img src={Refresh} alt="Refresh" className='refresh' />
                        </div>
                        <div id='criar'>
                            <p id='Cri'>Criar</p>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}

export default Anotacoes
