import { createContext, useReducer } from "react"

export const MyTrailsContext = createContext();

export const myTrailsReducer = (state, action) => {
    switch (action.type) {
        case "SET_MYTRAILS":
            return {
                myTrails: action.payload
            }
        case "CREATE_MYTRAIL":
            return {
                myTrails: [action.payload, ...state.myTrails]
            }
            //not working, not requirement, comeback TNNDOCE
        // case "DELETE_MYTRAIL":
        //     return {
        //         myTrails: state.myTrails.filter()
        //     }
        default:
            return state
    }
}

export const MyTrailsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(myTrailsReducer, {
        myTrails: null
    })

    // dispatch({type: "SET_MYTRAILS", payload: [{}, {}]})

    return (
        <MyTrailsContext.Provider value={{...state, dispatch}}>
            { children }
        </MyTrailsContext.Provider>
    )
}

