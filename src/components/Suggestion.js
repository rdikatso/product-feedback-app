import React from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import arrowUp from '../images/shared/icon-arrow-up.svg'
import '../css/Suggestion.css'

export const Suggestion = ({ suggestion }) => {

    // const [navigate, setNavigate] = useState(null);
    let navigate = useNavigate();

    // function handleClick(){
    //     setNavigate('/FeedbackDetails')
    // }

    // console.log(navigate)

    // if(navigate){
    //     console.log("navigate is truthy")
    //     return <Navigate to={navigate} replace state={suggestion}/>
    // }

    //console.log(suggestion)
    const upvotes = suggestion.upvotes;
    const title = suggestion.title;
    const description = suggestion.description;
    const category = suggestion.category
    const commentsNo = suggestion.comments;
    

    return (
        <div className="suggestion" onClick={() => {
            navigate('/FeedbackDetails', {state: suggestion})
        }}>
                <div className="numberOfVotes">
                    <img src={arrowUp} alt="number of votes"></img>
                    <p>{upvotes}</p>
                </div>
                <div className="suggestion-details">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button>{category}</button>
                </div>
                <div className="comment-details">
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/></svg>
                    <p>{commentsNo ? commentsNo.length : 0}</p>
                </div>
        </div>
    )
}
