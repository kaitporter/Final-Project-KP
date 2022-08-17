import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'



const Home = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        //add error screen
    }

    return (
        <div>
            {/* <GoogleMap>
                
            </GoogleMap> */}
        </div>
        //google maps will go here with trail details
    )
}


export default Home