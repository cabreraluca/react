import React from 'react';
import CartWidget from './cartWidget';
export default function NavBar() {
  return (
    <div>
        <ul className="navBar">
            <p>Keo!</p>
            <li>
                <a href="">
                    Inicio
                </a>
            </li>
            <li>
                <a href="">
                    Productos
                </a>
            </li>
            <li>
                <a href="">
                    Nosotros
                </a>
            </li>
            <a href=""><button><CartWidget /></button></a>
        </ul>
    </div>
  )
}
