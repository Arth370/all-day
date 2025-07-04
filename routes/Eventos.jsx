import React from 'react'
import '../style/Eventos.css'
import Icon from '../images/icon.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'

function Eventos() {
    return (
        <>
            <header>
                <div>
                    <img src={Icon} alt="Icon" className='icon' />
                </div>
                <div id='Eventos'>
                    <p>Eventos</p>
                </div>
            </header>
            <main>
                <div id='tudo'>
                    <div id='barra'>
                        <div id='img'>
                            <img src={Circle} alt="Cicle" className='circle' />
                        </div>
                        <div>
                            <p id='Add'>Adicionar um evento</p>
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
export default Eventos