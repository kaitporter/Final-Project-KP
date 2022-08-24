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

const Map = () => { 
    const [trails, setTrails] = useState();
    const center = useMemo(() => ({ lat: 40.4289847567432, lng: -3.7001457723421245 }), [])
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
            zoom={6} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}>
            <Marker position={{ lat: 42.879701789211204, lng: -8.544426327270314 }}>santiago compostela</Marker>
            <Marker position={{ lat: 43.26644856495466, lng: -2.9345943681890647 }}>camino del norte</Marker>
            <Marker position={{ lat: 42.24400449857953, lng: -8.721821607989185 }}>camino finisterre</Marker>
            <Marker position={{ lat: 41.4993256876983,  lng: -8.335626939250147 }}>baiona camino portugues</Marker>
            <Marker position={{ lat: 43.36573776373475, lng: -5.849173369721633 }}>oviedo camino primitivo</Marker>
            <Marker position={{ lat: 43.49306651820954,  lng: -8.220926186724611 }}>camino ingles</Marker>
            <Marker position={{ lat: 37.39553682331622,  lng: -5.984586561886858 }}>via de la plata</Marker>
            <Marker position={{ lat: 43.402967, lng: -1.633425 }}>camino frances</Marker>
            <Marker position={{ lat: 41.141214, lng: -8.612146 }}>camino espiritual</Marker>
            <Marker position={{ lat: 45.026974, lng: 3.902451 }}>Camino Le Puy</Marker>
            <Marker position={{ lat: 42.52028664682998, lng: -7.515733568483623 }}>Camino Invierno</Marker>
            </GoogleMap>
        </div>
    </div>
    )
} 


export default Map;