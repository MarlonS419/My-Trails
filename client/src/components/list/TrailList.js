import React from "react";
import TrailTile from "./TrailTile";


const TrailList = ({ trails }) => {
    const listOfTrails = trails.map((trail) => {
        return (
            <TrailTile key={trail.id} trail={trail} />
        )
    })

    return (
        <>
            {listOfTrails}
        </>
    )
}

export default TrailList