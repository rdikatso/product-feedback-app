import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { RoadMapCard } from './RoadMapCard'

export const RoadmapDetails = () => {

    let navigate = useNavigate();
    let location = useLocation()

    console.log(location)
    console.log(location.state);
    let planned = location.state.planned
    let inprogress = location.state.inprogress
    let live = location.state.live

    return (
        <div className="roadmap-details">
           <section>
                <div onClick={()=>navigate('/FeedbackDetails')}>
                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    <p>Go back</p>
                </div>
                <h2>Roadmap</h2>
                <button onClick={()=> navigate('/NewFeedback')}>+Add Feedback</button>
           </section>
           <section>
               <div>
                    <h4>Planned</h4>
                    <p>Ideas prioritized for research</p>
               </div>
               <div>
                    <h4>In-Progress</h4>
                    <p>Currently being developed</p>
               </div>
               <div>
                    <h4>Live</h4>
                    <p>Released features</p>
               </div>       
           </section>
           <section>
               {planned.map(data => <RoadMapCard key={data.id} data={data}/>)}
               {inprogress.map(data => <RoadMapCard key={data.id} data={data}/>)}
               {live.map(data => <RoadMapCard key={data.id} data={data}/>)}
           </section>

        </div>
    )
}
