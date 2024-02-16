import React, { useState, useEffect } from "react";

const TrailsShowPage = (props) => {
    const [trail, setTrail] = useState({})

    console.log(`this is the state: ${trail}`)
    const getTrails = async () => {
    //     try {
    //         // add an id to the fetch path for a specific trail
    //         const response = await fetch("/api/v1/trails")
    //         if (!response.ok) {
    //             const errorMessage = `${response.status} (${response.statusText})`
    //             const error = new Error(errorMessage)
    //             throw error
    //         }
    //         const body = await response.json()
    //         console.log(`this is the body of the response: ${body}`)
    //         setTrail(body.trail)
    //         console.log(`this is the trail in the body: ${body.trail}`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    }

    useEffect(() => {
        getTrails()
    }, [])


    return (
        <p>Hello from React!</p>
    )
}

export default TrailsShowPage