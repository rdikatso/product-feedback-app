import React from 'react'
import { useState, useEffect } from 'react';
import { Title } from './Title'
import { Tags } from './Tags'
import { Roadmap } from './Roadmap'
import { Heading } from './Heading'
import { Suggestion } from './Suggestion'
import { EmptySuggestions } from './EmptySuggestions'
import { data } from '../data.js';

export const DesktopSuggestions = () => {
    console.log(data);
    let items = data[0].productRequests;
    console.log(items);

    // let suggestions = items.filter(item => item.status === 'suggestion');
    // console.log(suggestions);
    //console.log(suggestions === false)


    // const [select, setSelect] = useState('most-votes');

    // function handleSelect(e){
    //     setSelect(e.target.value)
    // }

    const[width,setwidth] = useState(window.innerWidth);
    const breakpoint = 375;

    useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    //Retun a function from the effect that removes the event listener

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

    const [option, setOption] = useState('Most Votes');
    const [isListOpen, setIsListOpen] = useState(false);

    const select = [
        {
            id: 0,
            title: 'Most Votes',
            selected: true,
            value: 'most-votes'
        },
        {
            id: 1,
            title: 'Least Votes',
            selected: false,
            value:'least-votes'
        },
        {
            id: 2,
            title: 'Most Comments',
            selected: false,
            value:'most-comments'
        },
        {
            id: 3,
            title: 'Least Comments',
            selected: false,
            value: 'least-comments'
        },
    ]

    //let activeSelection = select.filter(item => item.selected === true)
    //console.log(activeSelection[0].title);

    function handleOptionDisplay(){
        setIsListOpen(!isListOpen)
        
    }

    function handleOptionClick(e){
        console.log(e.target.value)
        setOption(e.target.value);
    }

  
    switch(option){
        case 'Most Votes' : {
            console.log("sorting by most votes")
            items.sort((a,b) => {
                return b.upvotes - a.upvotes
            })
            break;
        }
        case 'Least Votes' : {
            console.log("sorting by least votes")
            items.sort((a,b) => {
                return a.upvotes - b.upvotes
            })
            break;
        }
        case 'Most Comments' : {
                console.log('sort by most comments')
                items.sort((a,b) => {
                a = a.comments ? a.comments.length : 0;
                b = b.comments ? b.comments.length : 0;
                return(b-a);
        })
            break;
        }
        case 'Least Comments' : {
            console.log('sort by least comments')
            items.sort((a,b) => {
                a = a.comments ? a.comments.length : 0;
                b = b.comments ? b.comments.length : 0;
                return(a-b);
        })
            break;
        }
        default: {
            console.log("Empty action received")
        }
    }
    console.log(option);
    console.log(isListOpen)

    // let items = data[0].productRequests;
    // console.log(items);

    // let suggestions = items.filter(item => item.status === 'suggestion');
    // console.log(suggestions);
    // console.log(suggestions === false)

    let suggestions = items.filter(item => item.status === 'suggestion');
    console.log(suggestions);

    return (
        <div className="suggestions">
            <section>
                <Title/>
                <Tags />
                <Roadmap data={items}/>
            </section>
            <section>
                {/* <Heading selectedOption={select} onChange={handleSelect} number={suggestions.length }/> */}
                <Heading selectedOption={option} onChange={handleOptionClick} onDisplay={handleOptionDisplay} number={suggestions.length} selectData={select} openList={isListOpen} width={width} breakpoint={breakpoint}/>
                {suggestions.length ? suggestions.map(suggestion => <Suggestion key={suggestion.id} suggestion={suggestion}/>) : <EmptySuggestions />}
            </section>
           
        </div>
    )
}
