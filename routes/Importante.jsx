import React from 'react'
import "../style/Importante.css"
import Atencao from '../images/Atencao.png'
import Circle from "../images/Circle.png"
import Calendar from "../images/Calendar.png"
import Refresh from "../images/Refresh.png"

export function Importante() {
    return (
      <>
        <header>
        <div>
            <img src={Atencao} alt="Atencao" className='atencao'/></div>
            <h1 className='titulo'>
                Importante
                </h1>
             
      </header>

      <main>
    <div className='caixa_geral'>
        <div> <img src= {Circle} alt="Circle" className='circle' /> <div className='textinho'>Adicionar uma anotação</div></div>
    <div className='puxadinho'>
    <div><img src={Calendar} alt="Calendar" className='Calendar' /></div>
    <div><img src={Refresh} alt="Refresh" className='refresh'/></div>

    </div>
    </div>
      </main>
        </>
  )
}

export default Importante
