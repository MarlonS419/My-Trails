import React, { useState, useEffect } from "react";
import TrailList from "../list/TrailList.js";


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

    return (
        <div className="state-show-page">
            <p>{state.name}!</p>
            <TrailList trails={state.trails} stateId={state.id} />
        </div>
            
    
    )
}

export default StateShow