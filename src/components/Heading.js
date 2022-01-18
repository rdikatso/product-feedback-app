import React from 'react'
// import { useState, useEffect } from 'react'
import suggestionIcon from '../images/suggestions/icon-suggestions.svg'
import { useNavigate } from 'react-router-dom'
import { Button } from './utilities/Button'
import  upArrow  from '../images/shared/icon-arrow-up.svg'
import  downArrow  from '../images/shared/icon-arrow-down.svg'
import '../css/Heading.css'


export const Heading = ({ onChange, onDisplay, selectedOption, openList, selectData, number, width, breakpoint}) => {

    let navigate = useNavigate();
    function handleClick(){
        navigate('/NewFeedback')
    }

    //console.log(selectData);

    // const [option, setOption] = useState('Most Votes');
    // const [isListOpen, setIsListOpen] = useState(false);

    // const select = [
    //     {
    //         id: 0,
    //         title: 'Most Votes',
    //         selected: true,
    //         value: 'most-votes'
    //     },
    //     {
    //         id: 1,
    //         title: 'Least Votes',
    //         selected: false,
    //         value:'least-votes'
    //     },
    //     {
    //         id: 2,
    //         title: 'Most Comments',
    //         selected: false,
    //         value:'most-comments'
    //     },
    //     {
    //         id: 3,
    //         title: 'Least Comments',
    //         selected: false,
    //         value: 'least comments'
    //     },
    // ]

    //let activeSelection = select.filter(item => item.selected === true)
    //console.log(activeSelection[0].title);

    // function handleOptionDisplay(){
    //     setIsListOpen(!isListOpen)
    // }

    // function handleOptionClick(e){
    //     console.log(e.target.value)
    //     setOption(e.target.value);
    // }

//     const[width,setwidth] = useState(window.innerWidth);
//     const breakpoint = 376;

//     useEffect(() => {
//     const handleWindowResize = () => setwidth(window.innerWidth)
//     window.addEventListener("resize", handleWindowResize);

//     //Retun a function from the effect that removes the event listener

//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, [])

    return (
        <div className="heading">
            <div className={width < breakpoint ? 'hidden' : 'active'}>
                <img src={suggestionIcon} alt="suggestions-icon"></img>
                <span>{number} </span>
                <span>Suggestions </span>
            </div>
            {/* <div className="custom-select">
                <label>
                    Sort by: 
                    <select className="custom-select" onChange = {onChange}>
                        <option value="most-votes">Most Votes</option>
                        <option value="least-votes">Least Votes</option>
                        <option value="most-comments">Most Comments</option>
                        <option value="least-comments">Least Comments</option>
                    </select>
                </label>
            </div> */}
            {/* <button onClick={() => navigate('/NewFeedback')}>+ Add Feedback</button> */}
            <div className="custom-select">
                <div className="select-header">
                    <div className="header-title" onClick={onDisplay}><span>Sort by: </span><span>{selectedOption} </span><img src={openList ? upArrow : downArrow} alt="arrow"></img></div>
                </div>
                <div className={`${ openList ? 'show' : 'hide'} select-option-list`}onClick={onChange} >
                    {selectData.map(option => {
                        return(
                            <button className="custom-select-option" type="button" key={option.id} value={option.title}>{option.title}</button>
                            //    <button className={`${ openList ? 'active' : 'hidden'} custon-select-option`} type="button" key={option.id} value={option.title}>{option.title}</button>
                        )
                    })}
                </div>
                
            </div>
            <Button cname="add-feedback" onClick={handleClick} btnLabel="+ Add Feedback"/>


        </div>
    )
}
