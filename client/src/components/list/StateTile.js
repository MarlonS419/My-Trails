import React from "react";
import { Link } from "react-router-dom";

const StateTile = ({ state }) => {
    const { id } = state

    return (
        <li className="state-tile">
            <Link to={`/states/${id}`} className="state-link">
                {state.name}
            </Link>
        </li>
    )
}

export default StateTile