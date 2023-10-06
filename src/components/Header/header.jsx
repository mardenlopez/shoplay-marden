import React from "react"
import './header.css'

import Logo from '../assets/Logo.png'
import Seach from "../Seach/seach";
function Header() {
    return(
        <div className="header-container">
           
           <header>
           <img className="logo" src={Logo} alt="" />
           
           <Seach />
          
           <button className="anunciar">Anunciar</button>
           </header>
        </div>
        
    )
}

export default Header;