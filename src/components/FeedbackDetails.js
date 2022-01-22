
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import leftArrow from '../images/shared/icon-arrow-left.svg'
import { Suggestion } from './Suggestion'
import { Comment } from './Comment'
import { BackButton } from './utilities/BackButton'
import { Button } from './utilities/Button'
import '../css/FeedbackDetails.css'

export const FeedbackDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state);
    let currentSuggestion = location.state

    function handleEditClick(){
        navigate('/EditFeedback', {state: currentSuggestion})
    }
    function handlePostclick(){
        console.log("sucessful posting")
    }


    return (
        <div className="feedbackDetails">
            <section>
                {/* <div onClick={()=>{navigate('/DesktopSuggestions')}}>
                    <img src={leftArrow} alt="left arrow to go back to previous page"></img>
                    <p>Go Back</p>
                </div> */}
                <BackButton />   
                <Button onClick={handleEditClick} btnLabel="Edit Feedback" cname="edit-feedback-btn"/>      
                {/* <button onClick={()=> {navigate('/EditFeedback', {state: currentSuggestion})}}>Edit Feedback</button> */}
            </section>
            <section>
                <Suggestion suggestion={currentSuggestion}/>
            </section>
            <section>
                {currentSuggestion.comments.length > 0 ? <h4>{currentSuggestion.comments.length} Comments</h4> : <h4> 0 Comments</h4>}
                {currentSuggestion.comments.length > 0 ? currentSuggestion.comments.map(comment => 
                <Comment key={comment.id} comment={comment} />)
                : null}
            </section>
            <section className="add-comment">
                <h3>Add comment</h3>
                <textarea placeholder="Type your comment here"/>
                <div className="comments">
                    <p>250 Characters left</p>
                    <Button onClick={handlePostclick} btnLabel="Post Comment" cname="post-comment"/>
                    {/* <button>Post Comment</button> */}
                </div>
            </section>

        </div>
    )
}
