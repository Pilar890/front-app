import React,{useState} from 'react'
import './input.css'
import Imagenf from '../../imagenes/@.png'
import Imageng from '../../imagenes/profile.jpg'
import Imagenh from '../../imagenes/lock1.png'


export default function Input() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rpassword, setRpassword] = useState('');
    // console.log({name, email, password, rpassword})
    const onSubmit = (e) => {
        e.preventDefault() //para evitar que se recargue la pagina
        console.log({name,email,password})
    }
  return (
           <div className="cont-form">
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Name</legend>
                        <label htmlFor='name'>
                            <input  class="inpuut" type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)} required/>
                            <img class="loguitos" src={Imageng} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <label for='email'>
                            <input  class="inpuut" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                            <img class="loguitos" src={Imagenf} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <label for='password'>
                            <input class="inpuut" type="password" name="password" value={password}  onChange={(e)=> setPassword(e.target.value)} required/>
                            <img class="loguitos" src={Imagenh} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Confirm password</legend>
                        <label for='password'>
                            <input class="inpuut" type="password" name="rpassword" value={rpassword} onChange={(e)=> setRpassword(e.target.value)} required/>
                            <img class="loguitos" src={Imagenh} alt=""/>
                        </label>
                    </fieldset>
                    <div class="cont-check">
                        <div className='checkk'>
                            <input className='checkk' type="checkbox" name="name" required/>
                            Send notification to my email
                        </div>
                    </div> 
                     <input class="enviar" type="submit" value="Sign up"/> 
                </form>
            </div>
  )
}
