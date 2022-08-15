import { useEffect, useState } from "react"

const Home = () => {
    const [myTrails, setMyTrails] = useState(null)
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
        fetch("/api/mytrails").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jRes => setMyTrails(jRes))
    }, [])
    console.log(myTrails)

    return (
        <div className="home">
            <div className="mytrails">
                {myTrails && myTrails.map((myTrail) => (
                    <li key={myTrail._id}>{myTrail.title}</li>
                ))}
            </div>
        </div>
    )
}

export default Home