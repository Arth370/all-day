import React from 'react'
import "../style/MeuDia.css"
import sol_melhor from '../images/sol_melhor.png'
import Circle from '../images/Circle.png'
import { Link } from 'react-router-dom'

function MeuDia() {
  return (
    <>
      <header class="cabeca">
        <div id='meu-dia'>
<<<<<<< HEAD
          <img src={sol_melhor} alt="Sol" className='sol' />
          <h1>Meu Dia</h1>
        </div>
        <div>
          <Link to='/'><p>Início</p></Link>
          <Link to='/meu-dia'><p>Meu dia</p></Link>
          <Link to='/Evento'><p>Eventos</p></Link>
          <Link to='/Anotacoes'>Anotações</Link>
=======

          <img src={sol_melhor} alt="Sol" className='sol' />
          <h1>Meu Dia</h1>
        </div>
      </header>
      <SideBar />
      <main>
        <div className='circulo'>
          <img src={Circle} alt="" />
>>>>>>> cecbdf9dc61023a1c9f2bc51ac69e71e40b6a776
        </div>
      </header>
      
      <div className='meio'>

        <div className='barrinhaTarefas'>
        <img className="imagemzinha" src={Circle} alt="" />
        <p className='mensagemTarefa'>Insira uma nova tarefa...</p>
        </div>

        <div className='barrinhaTarefas-Dois'>
        <img className="imagemzinha" src={Circle} alt="" />
        <p className='mensagemTarefa'>Insira uma nova tarefa...</p>
        </div>

      </div>
      <footer></footer>

    </>
  )
}

export default MeuDia
