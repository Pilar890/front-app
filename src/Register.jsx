import Input from './ComponentsRegister/Input/Input'
import './register.css'
import Titulo  from './ComponentsRegister/Titulo/Titulo';
import Boton from './ComponentsRegister/Boton/Boton';
import Imagenj from '../src/imagenes/Rectangle8.png'

function Register() {
  return (
    <main>
      <div className='cont-padre'>
       <Titulo/>
       <Input/>
       <Boton/>
      </div>
      <img class="img-rectangulo" src={Imagenj} alt=""/>
    </main>
  );
  } 
  export default Register;