import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{
  createBrowserRouter, RouterProvider
} from "react-router-dom"

import Home from '../routes/Home.jsx'
import Cadastro from '../routes/Cadastro.jsx'
import MeuDia from '../routes/MeuDia.jsx'
import Anotacoes from '../routes/Anotacoes.jsx'
import Login from '../routes/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"Cadastro",
    element:<Cadastro/>
  },
  {
    path:"Meu-dia",
    element:<MeuDia/>
  },
  {
    path:"Anotacoes",
    element:<Anotacoes/>
  },
  {
    path:"Login",
    element:<Login/>
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
