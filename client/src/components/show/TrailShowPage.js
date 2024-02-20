import React, { useState, useEffect } from "react";

const TrailShowPage = (props) => {
    const [trail, setTrail] = useState({})

    const id = props.match.params.id
    
    const getTrails = async () => {
        try {
            const response = await fetch(`/api/v1/trails/${id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            console.log(`this is the body of the response: ${body}`)
            setTrail(body.trail)
            console.log(`this is the trail in the body: ${body.trail}`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrails()
    }, [])


    return (
        <p>Hello from Trail show page!</p>
    )
}

export default TrailShowPage