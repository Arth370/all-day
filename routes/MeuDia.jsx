import React from 'react'
import { useState } from 'react'


import "../style/MeuDia.css"

import sol_melhor from '../images/sol_melhor.png'
import Icon from '../images/icon.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'
import loginImagem from '../images/login-people.png'

import { Link } from 'react-router-dom'
let user = localStorage.getItem('nome')
function DataDeHoje() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1; // Os meses são indexados de 0 a 11
  const ano = hoje.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return  dataFormatada
}

function MeuDia() {
  const [task,setTask] = useState(null)
  function HandleClick(){
    const rootEl = document.getElementById('tasks')
    const newDiv = document.createElement('div')
    const Divtask = document.createElement('div')
    const DivData = document.createElement('div')
    const DivEsquerda = document.createElement('div')
    const button = document.createElement('button')
    const newImg = document.createElement('img')
    const newP = document.createElement('p')
    const PData = document.createElement('p')

    newImg.src=Circle
    newDiv.classList.add('barra')
    newP.classList.add('textTask')
    Divtask.classList.add('taskOrder')
    DivEsquerda.classList.add('taskOrder')
    button.classList.add('delete')
    DivData.classList.add('Data')

    newDiv.appendChild(Divtask)
    newDiv.appendChild(DivEsquerda)
    Divtask.appendChild(newImg)
    rootEl.appendChild(newDiv)
    Divtask.appendChild(newP)
    DivEsquerda.appendChild(DivData)
    DivEsquerda.appendChild(button)
    DivData.appendChild(PData)
    
    newP.textContent=task
    PData.textContent=DataDeHoje()
    button.textContent='deletar'
  }
  
  return (
    <>
      <header class="cabeca">
        <div id='meu-dia'>
          <img src={sol_melhor} alt="Sol" className='sol' />
          <p>Meu Dia</p>
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

      <main id='fundo'>
        <div id='tudo'>
          <div id='barra'>
            <div id='img'>
              <img src={Circle} alt="Cicle" className='circle' />
            </div>

            <div>
              <input type="text" value={task} onChange={event=>setTask(event.target.value)} placeholder='Adicionar uma tarefa...' id='Add' />
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
              <button onClick={HandleClick} id='Cri'>Criar</button>
            </div>
          </div>

        </div>
        <div id='tasks'>

        </div>
      </main>
    </>
  )
}

export default MeuDia
