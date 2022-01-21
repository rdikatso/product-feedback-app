import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation }from 'react-router-dom'
// import leftArrow from '../images/shared/icon-arrow-left.svg'
import editFeedbackIcon from '../images/shared/icon-edit-feedback.svg'
import { BackButton } from './utilities/BackButton'
import { Button } from './utilities/Button'
import '../css/EditFeedback.css'


export const EditFeedback = () => {

    // let navigate = useNavigate()
    let location = useLocation()
    let editSuggestion = location.state;
    let navigate = useNavigate()

    console.log(editSuggestion);

    const [suggestion, setSuggestion ] = useState(location.state);

    function handleTitleChange(e){
        setSuggestion({
            ...suggestion,
            title: e.target.value
        });
    }

    function handleCategoryChange(e){
        setSuggestion({
            ...suggestion,
            category: e.target.value
        });
    }

    function handleStatusChange(e){
        setSuggestion({
            ...suggestion,
            status:e.target.value
        });
    }

    function handleDetailChange(e){
        setSuggestion({
            ...suggestion,
            description: e.target.value
        })
    }

    function handleDelete(e){
        e.preventDefault()
        console.log('Delete Feedback')
    }

    function handleCancel(){
        navigate(-1)
    }
    function handleAdd(e){
        e.preventDefault()

        console.log('Add New Feedback')

    }
    return (
        <div className="newFeedback"> 
            {/* <div onClick={()=>navigate('/DesktopSuggestions')}>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                <p>Go back</p>
            </div> */}
            <BackButton />
            <img src={editFeedbackIcon} alt="new feedback icon"></img>
            <form>
               <h2>Editing '{editSuggestion.title}'</h2>
               <label>
                   <p>Feedback Title</p>
                   <p>Add a short, descriptive headline</p>
                   <input type="text" name="title" value={suggestion.title} onChange={handleTitleChange}/>
               </label>
               <label>
                <p>Category</p>
                <p>Choose a category for your feedback</p>
                <select value={suggestion.category} onChange={handleCategoryChange}>
                    <option value="feature">Feature</option>
                    <option value="ux">UX</option>
                    <option value="ui">UI</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bugs">Bugs</option>
                </select>
               </label>
               <label>
                <p>Update</p>
                <p>Change feature site</p>
                <select value={suggestion.status} onChange={handleStatusChange}>
                    <option value="suggestion">Suggestion</option>
                    <option value="planned">Planned</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="live">Live</option>
                </select>
               </label>
               <label>
                   <p>Feedback Detail</p>
                   <p>Include any specificcomments on what should be improved, added, etc.</p>
                   <textarea value={suggestion.description} onChange={handleDetailChange}/>
               </label>
               <div>
                   <Button onClick={handleDelete} btnLabel="Delete"/>
                   <Button onClick={handleCancel} btnLabel="Cancel" />
                   <Button onClick={handleAdd} btnLabel="Add Feedback"/>
               </div>
            </form>
            <p>
                {suggestion.title}{' '}
                {suggestion.category}{' '}
                {suggestion.status}{' '}
                {suggestion.description}{' '}
            </p>
        </div>
    )
}
