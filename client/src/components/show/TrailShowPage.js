import React, { useState, useEffect } from "react";
import GoogleMapsTrailPage from "../maps/GoogleMapsTrailPage.js";

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
            setTrail(body.trail)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrails()
    }, [])


    return (
        <div>
            <p>Hello from Trail show page!</p>
            <p>
                {trail.name}
            </p>
            <p>
                {trail.state}
            </p>
            <GoogleMapsTrailPage trail={trail}/>
        </div>

    )
}

export default TrailShowPage