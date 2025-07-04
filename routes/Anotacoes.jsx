import React from 'react'
import "../style/Anotacoes.css"
import Edit from "../images/Edit.png"
import Circle from "../images/Circle.png"
import Calendar from "../images/Calendar.png"
import Refresh from "../images/Refresh.png"

function Anotacoes() {
  return (
    <>
      <header>
        <div>
          <img src={Edit} alt="Edit" className='edit' /></div>
        <h1 className='titulo'>
          Anotações
        </h1>
      </header>

      <main>
        <div className='caixa_geral'>
          <div> <img src={Circle} alt="Circle" className='circle' /> <div className='textinho'>Adicionar uma anotação</div></div>
          <div className='puxadinho'>
            <div><img src={Calendar} alt="Calendar" className='Calendar' /></div>
            <div><img src={Refresh} alt="Refresh" className='refresh' /></div>

          </div>
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Anotacoes
