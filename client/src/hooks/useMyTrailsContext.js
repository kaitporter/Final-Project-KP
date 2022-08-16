import { MyTrailsContext } from "../context/MyTrailContext"
import { useContext } from "react"

export const useMyTrailsContext = () => {
    const context = useContext(MyTrailsContext)

    if (!context) {
        throw Error("useTrailsContext is not being used properly!")
    }

    return context
}

// export default useMyTrailsContext