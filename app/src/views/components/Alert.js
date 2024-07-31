import React from 'react'
import Styles from '../css/page.module.css'
import stylesAlert from '../css/alert.module.css'


function Alert(props) {

    return (
        <div className={Styles.page}>
            <div className={`${stylesAlert.alert} ${props.showAlert ? stylesAlert.show : ''}`}>
                {props.nome}
            </div>
        </div>
    )
}



export default Alert