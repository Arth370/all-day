import React, { useState } from 'react'
import "../style/Importante.css"
import Atencao from '../images/Atencao.png'
import Circle from '../images/Circle.png'
import Bloco from '../images/Bloco.png'
import Refresh from '../images/Refresh.png'

export function Importante() {
    const [inputValue, setInputValue] = useState('');
    const [tarefas, setTarefas] = useState([]);
    const [editando, setEditando] = useState(false);
  
    const criarTarefa = () => {
      if (inputValue.trim() !== '') {
        setTarefas([...tarefas, inputValue]);
        setInputValue('');
        setEditando(false);
      }
    };
  
    const duplicarUltimaTarefa = () => {
      if (tarefas.length > 0) {
        const ultima = tarefas[tarefas.length - 1];
        setTarefas([...tarefas, ultima]);
      }
    };
  
    return (
      <>
        <header>
          <div>
            <img src={Atencao} alt="Atencao" className='atencao' />
          </div>
          <div id='h1'>
            <p>Importante</p>
          </div>
        </header>
  
        <main>
          <div id='tudo'>
            <div id='barra'>
              <div id='img'>
                <img src={Circle} alt="Circle" className='circle' />
              </div>
              <div onClick={() => setEditando(true)}>
                {editando ? (
                  <input
                    id="AddInput"
                    type="text"
                    placeholder="Adicionar uma tarefa"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                    onBlur={() => {
                      if (inputValue === '') setEditando(false);
                    }}
                  />
                ) : (
                  <p id="Add">Adicionar uma tarefa</p>
                )}
              </div>
            </div>
  
            <div id='linha'>
              <p>.</p>
            </div>
  
            <div id='barra2'>
              <div id='img'>
                <img
                  src={Bloco}
                  alt="Bloco"
                  className='bloco'
                />
                <img
                  src={Refresh}
                  alt="Refresh"
                  className='refresh'
                  onClick={duplicarUltimaTarefa} 
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div id='criar' onClick={criarTarefa}>
                <p id='Cri'>Criar</p>
              </div>
            </div>
          </div>
  
          <div id="tarefas-lista">
            {tarefas.map((tarefa, index) => (
              <div className="tarefa-box" key={index}>
                <img src={Circle} alt="Bola" className="bola" />
                <p className="tarefa-titulo">{tarefa}</p>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
  
  export default Importante;
  