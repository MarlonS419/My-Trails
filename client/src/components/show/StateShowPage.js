import React, { useState, useEffect } from "react";
import TrailList from "../list/TrailList.js";
import GoogleMapsStatePage from "../maps/GoogleMapsStatePage.js";
import NewTrailForm from "../list/NewTrailForm.js";

const StateShow = (props) => {
    const [state, setState] = useState({ trails: [] })
    const stateId = props.match.params.id
    
    const getState = async () => {
        try {
            const response = await fetch(`/api/v1/states/${stateId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setState(body.state)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getState()
    }, [])

    let trailForm = (<NewTrailForm stateId={stateId} state={state} setState={setState} />)

    return (
        <div className="state-show-page">
            <h1 className="state-title">{state.name}!</h1>
            <TrailList trails={state.trails} stateId={state.id} />
            <GoogleMapsStatePage />
            {/* {trailForm} */}
        </div>
            
    
    )
}

export default StateShow