import { useEffect } from "react"
import { useMyTrailsContext } from "../hooks/useMyTrailsContext"

//components
import MyTrailDetails from "../components/MyTrailDetails" 
import MyTrailsForm from "../components/MyTrailsForm"


const MyProfile = () => {

    const { myTrails, dispatch } = useMyTrailsContext()

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
        <div className="myprofile">
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


export default MyProfile