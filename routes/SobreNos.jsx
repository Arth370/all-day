import React from 'react'
import Users from "../images/Users.png"
import '../style/SobreNos.css'

function SobreNos() {
  return (
    <>

      <header>
        <div>
          <img src={Users} alt="Users" className='users' /></div>
        <h1 className='titulo1'>
          Sobre Nós
        </h1>
      </header>


      <main>
        <div className='caixabranca'>
          <div className='caixinha'>
            <h2 className='textinho1'>All Day</h2>
          </div>

          <div className='textao'>O All Day é uma aplicação que possui a finalidade de auxiliar na organização das tarefas diárias, evitando a desordem e promovendo uma rotina mais produtiva. Nosso objetivo é oferecer uma solução prática e eficiente que facilite o gerenciamento do tempo, evitando a desorganização e permitindo que você mantenha o foco realizando suas atividades com maior facilidade e tranquilidade.</div>
        </div>
      </main>
    </>

  )
}

export default SobreNos

