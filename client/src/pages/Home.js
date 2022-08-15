import { useEffect, useState } from "react"

const Home = () => {
    const [myTrails, setMyTrails] = useState(null)
    
    useEffect(() => {
        const fetchMyTrails = async () => {
        const response = await fetch("/api/MyTrails")
        const json = await response.json()

            if (response.ok) {
                setMyTrails(json)
            }
        } 
        fetchMyTrails()
    }, [])

    return (
        <div className="home">
            <div className="mytrails">
                {myTrails && myTrails.map((mytrail) => (
                    <p key={mytrail._id}>{mytrail.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home