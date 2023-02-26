import React from 'react'
import './primeraseccion.css'
import ImagenC from '../../imagenes/image3.png'
import ImagenD from '../../imagenes/imgd.png'

export default function PrimeraSeccion() {
  return (

    <div className="sec1">
        <div className='cont-image'>
            <img className="img1" src={ImagenD} alt=""/>
            <img className="img2" src={ImagenC} alt=""/>
        </div>
        <div className="cont-padre-text">
            <div className="cont-txt">
                <h2>Trigun Stampede</h2>
                <p>Manga</p>
                <h4>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</h4>
            </div>
        </div>
    </div>
  )
}