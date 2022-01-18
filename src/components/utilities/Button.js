import React from 'react'
import '../../css/Button.css'

export const Button = ({btnLabel, onClick, cname}) => {
    return (
        <div>
            <button className={`btn ${cname}`} onClick={onClick}>{btnLabel}</button>
        </div>
    )
}
