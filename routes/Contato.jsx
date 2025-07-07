import React from 'react'
import "../style/Contato.css"
import Mail from '../images/Mail.png'
import Instagram from '../images/Instagram.png'
import Gmail from '../images/Gmail.png'
import Telefone from '../images/Telefone.png'

function Contato() {
  return (
  
      <>
      <header>
       <img src={Mail} alt="Mail" className='icone'/>
       <div className='nome'>Contatos</div>
       <div><p className='inicio'>Início</p></div>
       <div><p className='sobrenos'>Sobre Nós</p></div>
       <div><p className='contatos'>Contatos</p></div>
       
      </header>

      <main>
<div className='mexidinho'>
      <div><img src={Instagram} alt="Instagram" className='Instagram'/></div>
      <div className='caixa1'> <p className='textinho1'>@alldaycorporation</p> </div>
      <div><img src={Gmail} alt="Gmail" className='Gmail'/></div>
      <div className='caixa2'> <p className='textinho2'>alldaycorporation@gmail.com.br</p> </div>
      <div><img src={Telefone} alt="Telefone" className='Telefone'/></div>
      <div className='caixa3'> <p className='textinho3'>+55 (82) 9663-4609</p> </div>
  </div>
  </main>
    </>
  )
}

export default Contato
