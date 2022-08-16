// import styled from "styled-components";

const MyTrailDetails = ({ myTrail }) => {
    return (
        <div
        className="mytrail-details">
            <h4>{myTrail.trail}
            <p><strong>Trail: </strong>{myTrail.trail}</p>
            <p><strong>Average Time: </strong>{myTrail.averageTime}</p>
            <p><strong>Distance (mi): </strong>{myTrail.distanceMI}</p>
            <p><strong>Distance (km): </strong>{myTrail.distanceKM}</p>
            <p><strong>Trailhead: </strong>{myTrail.start}</p>
            <p><strong>Difficulty: </strong>{myTrail.difficulty}</p>
            <p><strong>Notes: </strong>{myTrail.specs}</p>
            </h4>
        </div>
    )
}



export default MyTrailDetails
