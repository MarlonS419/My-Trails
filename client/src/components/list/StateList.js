import React, { useState, useEffect } from "react";

const StateList = (props) => {
    const [currentState, setCurrentState] = useState([])
    debugger
    const getStates = async () => {
        try {
            const response = await fetch("/api/v1/states/")
            console.log(`this is the fetched response: ${response}`)
            const parsedResponse = await response.json()
            console.log(`this is the parsed response: ${parsedResponse}`)
            setCurrentState(parsedResponse.states)
        } catch(error) {
            console.error(`Error Fetching State List: ${error}`)
        }
    }

    useEffect(() => {
        getStates()
    }, [])

    return (
        <div>
            {currentState}
        </div>
    )
}

export default StateList