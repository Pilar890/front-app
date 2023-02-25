import React from 'react'
import './navbar.css'
import ImagenB from '../../imagenes/Logo.png'
import ImagenA from '../../imagenes/Menu.svg'



export default function NavBar() {
  return (
    <div class="cont-padre-nav">
        <img class="menu-png" src={ImagenA} alt=""/>
        <img class="logo" src={ImagenB} alt=""/>
    {/* <div class="logo-container">
        <img class="logo" src={ImagenB} alt=""/>
    </div> */}
    </div>
  )
}
