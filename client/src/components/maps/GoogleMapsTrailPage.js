import React, { useState, useEffect} from "react"
import { Loader } from "@googlemaps/js-api-loader"


const GoogleMapsTrailPage = (props) => {
    
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")

    console.log("this is the consoleLog:", searchResults)
    
    const loader = new Loader({
        apiKey: "AIzaSyASDgTQGEe-wAxQ0PDh93jGGp_TpvDdrUc",
        libraries: ["places"]
    });
    
    useEffect(() => {
        setError("")
        loader.load().then(() => {
            const ri = { lat: 41.580, lng: -71.477 };
            
            const request = {
                query: "ryan park",
                location: ri,
                radius: "500"
            };
            
            const map = new google.maps.Map(document.getElementById("map"), {
                center: ri,
                zoom: 11,
            });
            
            const service = new google.maps.places.PlacesService(map);
            service.textSearch(request, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setSearchResults(results)
                    results.forEach((result) => {
                        const resultContent = 
                        `<p>${result.name}</p>` +
                        `<p>${result.formatted_address}</p>`
                        
                        const infowindow = new google.maps.InfoWindow({
                            content: resultContent,
                            ariaLabel: result.name,
                        });
                        
                        const marker = new google.maps.Marker({
                            position: new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng()),
                            map: map,
                            icon: result.photos[0].getUrl({maxWidth: 35, maxHeight: 35})
                        });
                        
                        marker.addListener("click", () => {
                            infowindow.open({
                                anchor: marker,
                                map,
                            });
                        });
                    })
                    
                    map.setCenter(results[0].geometry.location);
                } else {
                    setError("No results found, please try again.")
                }
            })
        });
    }, [])

    return (
        <div id="map" style={{height:400}}></div>
        
    )
}

export default GoogleMapsTrailPage
