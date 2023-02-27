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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name,email,password})
        }
        fetch('http://localhost:8080/users', requestOptions)
            .then(response => response.json())
            .then(data => {console.log(data)});
    }
  return (
           <div className="cont-form">
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Name</legend>
                        <label htmlFor='name'>
                            <input  className="inpuut" type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)} required/>
                            <img className="loguitos" src={Imageng} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <label htmlFor='email'>
                            <input  className="inpuut" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                            <img className="loguitos" src={Imagenf} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <label htmlFor='password'>
                            <input className="inpuut" type="password" name="password" value={password}  onChange={(e)=> setPassword(e.target.value)} required/>
                            <img className="loguitos" src={Imagenh} alt=""/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Confirm password</legend>
                        <label htmlFor='password'>
                            <input className="inpuut" type="password" name="rpassword" value={rpassword} onChange={(e)=> setRpassword(e.target.value)} required/>
                            <img className="loguitos" src={Imagenh} alt=""/>
                        </label>
                    </fieldset>
                    <div className="cont-check">
                        <div className='checkk'>
                            <input className='checkk' type="checkbox" name="name" required/>
                            Send notification to my email
                        </div>
                    </div> 
                     <input className="enviar" type="submit" value="Sign up"/> 
                </form>
            </div>
  )
}
