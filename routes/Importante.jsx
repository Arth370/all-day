import React from 'react'
import "../style/Importante.css"
import Atencao from '../images/Atencao.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'

export function Importante() {
    return (
      <>
        <header>
                <div>
                    <img src={Atencao} alt="Atencao" className='Atencao' />
                </div>
                <div id='h1'>
                    <p>Importante</p>
                </div>
            </header>
      <main>
                <div id='tudo'>
                    <div id='barra'>
                        <div id='img'>
                            <img src={Circle} alt="Cicle" className='circle' />
                        </div>
                        <div>
                            <p id='Add'>Adicionar uma tarefa</p>
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

export default Importante
