import Map from "../components/Map"
import styled from "styled-components"
import { useState, useMemo, useCallback, useRef } from "react";
import { 
    GoogleMap, 
    Marker,
} from '@react-google-maps/api'

const CaminoPortugues = () => {
    const center = useMemo(() => ({ lat: 41.4993256876983, lng: -8.335626939250147 }), [])
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
                <h3>Camino Portugués</h3>
                <Div>
                <span><strong>Average Time:</strong> 14 days</span>
                </Div>
                <Div>
                <span><strong>Distance (mi):</strong> 383</span>
                </Div>
                <Div>
                <span><strong>Distance (km):</strong> 616</span>
                </Div>
                <Div>
                <span><strong>Trailhead:</strong> Braga, Portugal</span>
                </Div>
                <Div>
                <span><strong>Difficulty:</strong> Easy</span>
                </Div>
                <Div>
                <span><strong>Specs:</strong> Camino Portugués or The Portuguese Way is the second most famous of all the Camino de Santiago routes so expect big crowds. This ancient path leads you across the Porguese coast starting in Lisobon and concluding in Santiago de Compostela. This route is rated as moderately easy in terms of terrain. Villages are plenty so the number of kilometres you crush a day is up to you! Most hikers finish in under two weeks.</span>
                </Div>
            </div>
            <GoogleMap
            zoom={10} 
            center={center} 
            mapContainerClassName="map-pages"
            options={options}
            onLoad={onLoad}>
            <Marker position={{ lat: 41.4993256876983,  lng: -8.335626939250147 }}>baiona camino portugues</Marker>
            </GoogleMap>
            </div>
        )
}

const Div = styled.div`
padding: 10px;
color: black;
`

export default CaminoPortugues;