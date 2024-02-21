import React from "react";
import TrailTile from "./TrailTile";


const TrailList = ({ trails, stateId }) => {
    const listOfTrails = trails.map((trail) => {
        return (
            <TrailTile key={trail.id} trail={trail} stateId={stateId}  />
        )
    })

    return (
        <>
            {listOfTrails}
        </>
    )
}

export default TrailList