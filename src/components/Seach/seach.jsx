import React from "react";
import './seach.css'

import { BsSearch } from 'react-icons/bs'

function Seach() {
    return(
        <div className="container-seach">
            <input className="SeachInput" type="text" placeholder="Pesquisar produto" />
            <button className="btnSeach"> < BsSearch/> </button>
        </div>
    )
}

export default Seach;