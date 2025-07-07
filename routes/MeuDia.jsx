import React from 'react'
import { useState } from 'react'


import "../style/MeuDia.css"

import sol_melhor from '../images/sol_melhor.png'
import Icon from '../images/icon.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'
import loginImagem from '../images/login-people.png'
import Editar from "../images/Editar.png"
import Lixo from "../images/Lixeira.png"
import Copiar from "../images/Copy.png"

import { Link } from 'react-router-dom'
let user = localStorage.getItem('nome')
function DataDeHoje() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1; // Os meses são indexados de 0 a 11
  const ano = hoje.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada
}
function MeuDia() {
  const [task, setTask] = useState(null)
  let clicado = false


  function edicao() {
    if (clicado == false) {
      const fundo = document.getElementById('root')
      const Divzona = document.createElement('div')
      const h1 = document.createElement('h1')
      const dataCoclusao = document.createElement('input')
      const botaoSair = document.createElement('button')
      dataCoclusao.placeholder = 'Data de Conclusão...'
      const anotar = document.createElement('textarea')
      anotar.placeholder = 'Anotações...'
      Divzona.classList.add('editando')
      fundo.appendChild(Divzona)
      Divzona.appendChild(h1)
      Divzona.appendChild(dataCoclusao)
      Divzona.appendChild(anotar)
      Divzona.appendChild(botaoSair)

      h1.textContent = task
      botaoSair.textContent = 'Fechar'
      botaoSair.onclick = function sair() {
        Divzona.remove()
        h1.remove()
        dataCoclusao.remove()
        anotar.remove()
        botaoSair.remove()
        clicado = false
      }

    }
    clicado = true
  }
  function HandleClick() {

    const rootEl = document.getElementById('tasks')
    const newDiv = document.createElement('div')
    const Divtask = document.createElement('div')
    const DivData = document.createElement('div')
    const DivEsquerda = document.createElement('div')
    const EditarButton = document.createElement('img')
    const CopiarButton = document.createElement('img')
    const Lixobutton = document.createElement('img')
    const newImg = document.createElement('img')
    const newP = document.createElement('p')
    const PData = document.createElement('p')

    newImg.src = Circle

    EditarButton.src = Editar
    CopiarButton.src = Copiar
    Lixobutton.src = Lixo

    EditarButton.onclick = edicao
    Lixobutton.onclick = function apagar() {
      newDiv.remove()
      Divtask.remove()
      DivData.remove()
      DivEsquerda.remove()
      EditarButton.remove()
      CopiarButton.remove()
      Lixobutton.remove()
      newImg.remove()
      newP.remove()
      PData.remove()
    }


    EditarButton.classList.add('ImgButton')
    CopiarButton.classList.add('ImgButton')
    Lixobutton.classList.add('ImgButton')
    newDiv.classList.add('barra')
    newP.classList.add('textTask')
    Divtask.classList.add('taskOrder')
    DivEsquerda.classList.add('taskOrder')
    DivData.classList.add('Data')

    newDiv.appendChild(Divtask)
    newDiv.appendChild(DivEsquerda)
    Divtask.appendChild(newImg)
    rootEl.appendChild(newDiv)
    Divtask.appendChild(newP)
    DivEsquerda.appendChild(DivData)
    DivEsquerda.appendChild(EditarButton)
    DivEsquerda.appendChild(CopiarButton)
    DivEsquerda.appendChild(Lixobutton)

    DivData.appendChild(PData)

    newP.textContent = task
    PData.textContent = DataDeHoje()

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
          <Link className='text-botao' to='/Importante'>Importantes</Link>
        </div>

        <div className='userLogin'>
          <img src={loginImagem} className='people' />
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
              <input type="text" value={task} onChange={event => setTask(event.target.value)} placeholder='Adicionar uma tarefa...' id='Add' />
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
