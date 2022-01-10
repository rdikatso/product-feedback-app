import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Roadmap = ({data}) => {

    let navigate = useNavigate()
    //console.log(data);
    let planned = data.filter(item => item.status === 'planned');
    let inProgress = data.filter(item => item.status === 'in-progress');
    let live = data.filter(item => item.status === 'live');
    return (
        <div className="roadmap">
            <div>
                <h4>Roadmap</h4>
                <p onClick={()=>{navigate("/RoadmapDetails", {state:{planned:planned, inprogress: inProgress, live:live}})}}>View</p>
                {/* <Link to={{pathname: "/RoadmapDetails", state:{planned:planned, inProgress:inProgress, live:live}}}>View</Link> */}
            </div>
            <ul>
                <li>Planned <span>{planned ? planned.length : 0 }</span></li>
                <li>In-Progress<span>{inProgress ? inProgress.length : 0 }</span></li>
                <li>Live <span>{live ? live.length : 0 }</span></li>
            </ul>
        </div>
    )
}
