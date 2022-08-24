// // import { GoogleMap, withScriptjs, withGoogleMap } from '@react-google-maps/api'
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'




// export const Home = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     })

//     if (!isLoaded) return <div>Loading...</div>
//     return <Map/>
// }

// const Map = () => {
//     return (
//         <GoogleMap 
//             zoom={10} 
//             center={{lat: 42.879701789211204, lng: -8.544426327270314}} 
//             mapContainerClassName="map-container">
//             <Marker position={{ lat: 42.879701789211204, lng: -8.544426327270314 }}/>
//         </GoogleMap>
//     )
// } 

// export default Home

// import { GoogleMap, withScriptjs, withGoogleMap } from '@react-google-maps/api'
import { useLoadScript } from '@react-google-maps/api'
import Map from "../components/Map"

export const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        librairies: ["places"]
    })

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

export default Home