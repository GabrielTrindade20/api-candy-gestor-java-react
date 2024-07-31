import React from 'react'
import Styles from '../css/menu.module.css'
import Logo from '../img/logo.png'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <Banner nome="Millena Landin"/>
            <div className={Styles.containerMenu}>
                <img src={Logo} alt='logoDoceria' />

                <div className={Styles.menuItens}>
                    <div className={Styles.itensMenu}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={Styles.itensMenu}>
                        <Link to="/ingredientes">Ingredientes</Link>
                    </div>
                    <div className={Styles.itensMenu}>
                        <Link to="/receitas">Receitas</Link>
                    </div>
                    <div className={Styles.itensMenu}>
                        <Link to="/pedidos">Pedidos</Link>
                    </div>
                    <div className={Styles.itensMenu}>
                        <Link to="/clientes">Clientes</Link>
                    </div>
                    <div className={Styles.itensMenu}>
                        <Link to="/estatisticas">Estatísticas</Link>
                    </div>
                    
                </div>

            </div>
        </nav>
    )
}



export default Menu