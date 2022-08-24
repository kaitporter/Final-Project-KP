import { useState, useMemo, useCallback, useRef } from "react";
import { 
    GoogleMap, 
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
    LatLngLiteral
} from '@react-google-maps/api'

// to be implimented
import TrailSearch from "./TrailSearch"

// import Trails from "./Trails"
// const DirectionsResult = google.maps.DirectionsResult;
// const MapOptions = google.maps.MapOptions;

const Map = () => { 
    const [trails, setTrails] = useState();
    const center = useMemo(() => ({ lat: 42.879701789211204, lng: -8.544426327270314 }), [])
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: "c112dd08f5d466b7",
    }), [])

const onLoad = useCallback(map => (mapRef.current = map), [])

    const mapRef = useRef()
    return (
    <div className="container">
        <div className="sidePanel">
            <h3>Find a trail</h3>
            <TrailSearch setTrails={(position) => {
                setTrails(position)
                mapRef.current?.panTo(position);
            }}/>
        </div>
        <div className="map">
            <GoogleMap
            zoom={10} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}>
            </GoogleMap>
            <Marker position={{ lat: 42.879701789211204, lng: -8.544426327270314 }}></Marker>
        </div>
    </div>
    )
} 


export default Map;