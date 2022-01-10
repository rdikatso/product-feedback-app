import React from 'react'
// import leftArrow from '../../images/shared/icon-arrow-left.svg'
import { useNavigate } from 'react-router'
//src/images/shared/icon-arrow-left.svg

export const BackButton = () => {

    let navigate = useNavigate()
    return (
        <div onClick={()=> navigate(-1)}className="back-button">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            <p>Go Back</p>
        </div>
    )
}
