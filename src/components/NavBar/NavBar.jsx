import React from 'react'
import './navbar.css'
import ImagenB from '../../imagenes/Logo.png'
import ImagenA from '../../imagenes/Menu.svg'



export default function NavBar() {
  return (
    <div className="cont-padre-nav">
        <img className="menu-png" src={ImagenA} alt=""/>
        <img className="logo" src={ImagenB} alt=""/>
    </div>
  )
}
