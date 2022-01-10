import React from 'react'
import hamburger from '../images/shared/mobile/icon-hamburger.svg'
import { close } from '../images/shared/mobile/icon-close.svg'
import '../css/Title.css'

export const Title = () => {
    return (
        <div className="title">
            <div>
                <h4>Frontend Mentor</h4>
                <p>Feedback Board</p>
            </div>
            <img src={hamburger} alt="hamburger-menu-icon"></img>
        </div>
    )
}
