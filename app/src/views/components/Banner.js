import React from 'react'
import Styles from '../css/banner.module.css'
import Logo from '../img/logo.png'
import { FaUser } from "react-icons/fa";


function Banner(props) {

    return (
        <div className={Styles.banner}>
            <h2>Sistema Doceria Landin</h2>
            <div className={Styles.usuario}>
                <FaUser size={30}/>
                <p>{props.nome}</p>
            </div>
        </div>
    )
}



export default Banner