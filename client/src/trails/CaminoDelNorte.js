import Map from "../components/Map"
import styled from "styled-components"
import { useState, useMemo, useCallback, useRef } from "react";
import { 
    GoogleMap, 
    Marker,
} from '@react-google-maps/api'

const CaminoDelNorte = () => {
    const center = useMemo(() => ({ lat: 43.26644856495466, lng: -2.9345943681890647 }), [])
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
                <h3>Camino del Norte</h3>
                <Div>
                <span><strong>Average Time:</strong> 41 days</span>
                </Div>
                <Div>
                <span><strong>Distance (mi):</strong> 513</span>
                </Div>
                <Div>
                <span><strong>Distance (km):</strong> 826</span>
                </Div>
                <Div>
                <span><strong>Trailhead:</strong> Bilbao, Spain</span>
                </Div>
                <Div>
                <span><strong>Difficulty:</strong> Difficult</span>
                </Div>
                <Div>
                <span><strong>Specs:</strong> Camino del Norte or The Northern Way is moderately busy so expect less crowds and more beauty. This ancient path leads you along the northernmost coast of Spain starting in Irun and concluding in Santiago de Compostela. This route is rated as difficult due to constant elevation gain and loss but but is more bearable during the second half of the hike coming up to the trail end. Expect to crush up to ~20km (12.5mi) per day as villages are well spaced out on this route.</span>
                </Div>
            </div>
            <GoogleMap
            zoom={10} 
            center={center} 
            mapContainerClassName="map-pages"
            options={options}
            onLoad={onLoad}>
            <Marker position={{ lat: 43.26644856495466, lng: -2.9345943681890647 }}>camino del norte</Marker>
            </GoogleMap>
            </div>
        )
}

const Div = styled.div`
padding: 10px;
color: black;
`

export default CaminoDelNorte;