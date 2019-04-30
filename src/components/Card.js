import React from 'react'
import './styles.css'

function Card(props) {
    return(
        <div className="Card">
            {props.children}
        </div>
    )
}

export default Card