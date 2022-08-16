// import styled from "styled-components";
// import { useMyTrailsContext } from "../hooks/useMyTrailsContext"

const MyTrailDetails = ({ myTrail }) => {
    //not working, not requirement, comeback TNNDOCE
    // const { dispatch } = useMyTrailsContext()

    // const handleClick = async (e) => {
    //     const response = await fetch("/api/mytrails/" + myTrail._id,  {
    //         method: "DELETE"
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({
    //             type: "DELETE_MYTRAIL", 
    //             payload: json
    //         })
    //     }
    // }

    // const handleClick = () => {
    //     fetch("api/mytrails" + myTrail._id).then(res => {
    //         if(res.ok) {
    //             return res.json()
    //         }
    //     }).then(json => dispatch({
    //         type: "DELETE_MYTRAIL", 
    //         payload: json
    //     }))
    // }

    return (
        <div
        className="mytrail-details">
            <h4>{myTrail.trail}</h4>
            <p><strong>Average Time: </strong>{myTrail.averageTime}</p>
            <p><strong>Distance: </strong>{myTrail.distanceKM}</p>
            <p><strong>Trailhead: </strong>{myTrail.start}</p>
            <p><strong>Difficulty: </strong>{myTrail.difficulty}</p>
            <p><strong>Notes: </strong>{myTrail.specs}</p>
            {/* <span onClick={handleClick}>delete</span> */}
        </div>
    )
}



export default MyTrailDetails
