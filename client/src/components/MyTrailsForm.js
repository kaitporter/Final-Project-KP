import { useState } from "react"

//note to future me: no time to fix, revisit TNNONCE
// import { useMyTrailsContext } from "../hooks/useMyTrailsContext"

const MyTrailsForm = () => {
    // const { dispatch } = useMyTrailsContext();
    const [trail, setTrail] = useState("");
    const [averageTime, setAverageTime] = useState("");
    const [distanceKM, setDistanceKM] = useState("");
    const [start, setStart] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [specs, setSpecs] = useState("");
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const myTrail = {trail, averageTime, distanceKM, start, difficulty, specs}

        const response = await fetch ("/api/mytrails", {
            method: "POST",
            body: JSON.stringify(myTrail),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTrail("")
            setAverageTime("")
            setDistanceKM("")
            setStart("")
            setDifficulty("")
            setSpecs("")
            setError(null)
            console.log("New trail added!", json)
            // dispatch({
            //     type: "CREATE_MYTRAIL", 
            //     payload: json
            // })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Trail</h3>

            <label>Trail: </label>
            <input
            type="text"
            onChange={(e) => setTrail(e.target.value)}
            value={trail}
            />

            <label>Time: </label>
            <input
            type="text"
            onChange={(e) => setAverageTime(e.target.value)}
            value={averageTime}
            />

            <label>Distance: </label>
            <input
            type="text"
            onChange={(e) => setDistanceKM(e.target.value)}
            value={distanceKM}
            />

            <label>Trailhead: </label>
            <input
            type="text"
            onChange={(e) => setStart(e.target.value)}
            value={start}
            />

            <label>Difficulty: </label>
            <input
            type="text"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            />

            <label>Notes: </label>
            <input
            type="text"
            onChange={(e) => setSpecs(e.target.value)}
            value={specs}
            />  

            <button>Add trail!</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MyTrailsForm;