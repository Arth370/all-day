import React from 'react'
import "../style/MeuDia.css"
import sol_melhor from '../images/sol_melhor.png'
import SideBar from './SideBar'
import Circle from '../images/Circle.png'

function MeuDia() {
  return (
    <>
      <header class="cabeca">
        <div id='meu-dia'>
          
          <img src={sol_melhor} alt="Sol" className='sol' />
          <h1>Meu Dia</h1>
        </div>
      </header>
      <SideBar/>
      <main className='meio'>
        <div className='circulo'>
        <img src={Circle} alt="" />
        </div>
      </main>
      <footer></footer>
    
    </>
  )
}

export default MeuDia
