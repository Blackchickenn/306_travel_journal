import React from "react"
import LogoPicture from "../images/earth-globe.png"

export default function Navbar(){
    return(
        <nav>
            <img src={LogoPicture} alt="world logo" className="nav--logo" />
            <p className="nav--logo--text">My Travel Journal</p>
        </nav>
    )
}
