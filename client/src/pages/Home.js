import { useEffect } from "react"
import { useMyTrailsContext } from "../hooks/useMyTrailsContext"

//components
import MyTrailDetails from "../components/MyTrailDetails" 
import MyTrailsForm from "../components/MyTrailsForm"

const Home = () => {
    // const [myTrails, setMyTrails] = useState(null)
    const { myTrails, dispatch } = useMyTrailsContext()
    // useEffect(() => {
    //     const fetchMyTrails = async () => {
    //     const response = await fetch("/api/mytrails")
    //     console.log(response)
    //     const json = await response.json()

    //         if (response.ok) {
    //             setMyTrails(json)
    //         }
    //     } 
    //     fetchMyTrails()
    // }, [])

    useEffect(() => {
        fetch("api/mytrails").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(json => dispatch({
            type: "SET_MYTRAILS", 
            payload: json
        }))
    }, [dispatch])
    console.log(myTrails)

    return (
        <div className="home">
            <div className="mytrails">
                {myTrails && myTrails.map((myTrail) => (
                    // <p key={myTrail._id}>{myTrail.Trail}</p>
                    <MyTrailDetails key={myTrail._id} myTrail={myTrail}/>
                ))}
            </div>
            <MyTrailsForm/>
        </div>
    )
}


export default Home