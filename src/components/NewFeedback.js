import React from 'react'
// import { useNavigate } from 'react-router'
// import leftArrow from '../images/shared/icon-arrow-left.svg'
import newFeedbackIcon from '../images/shared/icon-new-feedback.svg'
import { BackButton } from './utilities/BackButton'
import { Button } from './utilities/Button'
import { useNavigate } from 'react-router'


export const NewFeedback = () => {

    let navigate = useNavigate();

    function handleAddClick(e){
        e.preventDefault()
        console.log("Added new Feedback")
    }

    function handleCancel(){
        navigate('/DesktopSuggestions')
    }

    // let navigate = useNavigate();
    return (
        <div className="newFeedback"> 
            <BackButton />
            {/* <div onClick={()=>navigate('/DesktopSuggestions')}>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                <p>Go back</p>
            </div> */}
            <img src={newFeedbackIcon} alt="new feedback icon"></img>
            <form>
               <h2>Create New Feedback</h2>
               <label>
                   <p>Feedback Title</p>
                   <p>Add a short, descriptive headline</p>
                   <input type="text" name="title"/>
               </label>
               <label>
                <p>Category</p>
                <p>Choose a category for your feedback</p>
                <select>
                    <option value="feature">Feature</option>
                    <option value="ux">UX</option>
                    <option value="ui">UI</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bugs">Bugs</option>
                </select>
               </label>
               <label>
                   <p>Feedback Detail</p>
                   <p>Include any specificcomments on what should be improved, added, etc.</p>
                   <textarea />
               </label>
               <div>
                   <Button onClick={handleCancel} btnLabel="Cancel"/>
                   <Button onClick={handleAddClick} btnLabel="Add Feedback"/>
                   {/* <button>Cancel</button>
                   <button>Add Feedback</button> */}
               </div>
            </form>
        </div>
    )
}
