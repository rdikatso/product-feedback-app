import React from 'react'

export const Button = ({btnLabel, onClick}) => {
    return (
        <div className="btn">
            <button onClick={onClick}>{btnLabel}</button>
        </div>
    )
}
