import React from 'react'
import './boton.css'
import Imageni from '../../imagenes/Google.png'

export default function Boton() {
  return (
    <div className="cont-txt2">
    <div className="cont-google">
        <img src={Imageni} alt="logo-google"/>
        <a href="/">Sign in with Google</a>
    </div>
    <p className='p-3'>Already have an account? <a className='p-3-a' href="/">Log in</a>
    </p>
    <p className='p-3'>Go back to <a className='p-3-a' href="/">home page</a></p>
  </div>
  )
}
