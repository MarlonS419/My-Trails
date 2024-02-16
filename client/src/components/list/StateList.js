import React, { useState, useEffect } from "react";
import StateTile from "./StateTile";

const StateList = (props) => {
    const [currentState, setCurrentState] = useState([])
    const getStates = async () => {
        try {
            const response = await fetch("/api/v1/states/")
            const parsedResponse = await response.json()
            setCurrentState(parsedResponse.states)
        } catch(error) {
            console.error(`Error Fetching State List: ${error}`)
        }
    }

    useEffect(() => {
        getStates()
    }, [])

    const stateTiles = currentState.map((state) => {
        return (
            <StateTile key={state.id} state={state} />
        )
    })

    return (
        <div className="state-list-page">
            <div className="state-list-intro">
                <p>Hello from React!</p>
                <ul className="state-list-tile">
                    {stateTiles}
                </ul>
            </div>
        </div>

    )
}

export default StateList