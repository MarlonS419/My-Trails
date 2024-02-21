import React from "react";
import { Link } from "react-router-dom"

const TrailTile = (props) => {
    const currentTrail = props.trail
    const id = currentTrail.id
    
    return (
        <li>
            <Link to={`/trails/${id}`} className="trail-link">
                {currentTrail.name}
            </Link>
        </li>
    )
}

export default TrailTile