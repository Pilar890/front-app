
import './input.css'

import React from 'react'

export default function Input() {
  return (
           <div className="cont-form">
                <form>
                    <fieldset>
                        <legend>Name</legend>
                        <label>
                            <input class="inpuut" type="text" name="name">
                            <img class="loguitos" src="./imagenes/profile.jpg" alt="">
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <label>
                            <input  class="inpuut" type="email" name="name">
                            <img class="loguitos" src="./imagenes/@.png" alt="">
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <label>
                            <input class="inpuut" type="password" name="name">
                            <img class="loguitos" src="./imagenes/lock1.png" alt="">
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Confirm password</legend>
                        <label>
                            <input class="inpuut" type="password" name="name">
                            <img class="loguitos" src="./imagenes/lock1.png" alt="">
                        </label>
                    </fieldset>
                    <div class="cont-check">
                        <div>
                            <input type="checkbox" name="name">
                            Send notification to my email
                        </div>
                    </div>
                    <input class="enviar" type="submit" value="Sign up ">
                </form>
            </div>
  )
}
