import React from 'react'
import emptyIcon from '../images/suggestions/illustration-empty.svg'
import { Button } from './utilities/Button'
import { useNavigate } from 'react-router-dom'

export const EmptySuggestions = () => {

    let navigate = useNavigate()
    function handleClick(){
        navigate('/NewFeedback')
    }

    return (
        <div className="emptySuggestions">
            <img src={emptyIcon} alt="A drawing of an animation with a magnifying glass"></img>
            <h4>There is no feedback yet.</h4>
            <p>Got a suggestion? Found a bug that needs to be squashed?
            We love hearing about new ideas to improve our app.</p>
            <Button onClick={handleClick} btnLabel="+ Add Feedback"/>
            {/* <button>+ Add Feedback</button> */}
        </div>
    )
}
