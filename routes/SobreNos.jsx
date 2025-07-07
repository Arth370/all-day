import React from 'react'
import Users from "../images/Users.png"
import '../style/SobreNos.css'

function SobreNos() {
  return (
    <>
    
      <header>
        <div>
        <img src={Users} alt="Users" className='users'/></div>
        <p className='titulo1'>
                Sobre Nós
                </p>

        <div><p className='inicio'>Início</p></div>
       <div><p className='sobrenos'>Sobre Nós</p></div>
       <div><p className='contatos'>Contatos</p></div>
      </header>
   
 
 <main>
    <div className='caixabranca'>
        <div className='caixinha'>
            <p className='textinho1'>All Day</p>
            </div> 

        <div className='textao'>O All Day é uma aplicação que possui a finalidade de auxiliar na organização das tarefas diárias, evitando a desordem e promovendo uma rotina mais produtiva. Nosso objetivo é oferecer uma solução prática e eficiente que facilite o gerenciamento do tempo, evitando a desorganização e permitindo que você mantenha o foco realizando suas atividades com maior facilidade e tranquilidade.</div>
        </div>
 </main>
    </>
    
  )
}

export default SobreNos

