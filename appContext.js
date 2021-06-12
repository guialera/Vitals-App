import React, { useState } from "react"

import axios from "axios"

export const AppContext = React.createContext()

export default function AppProvider(props) {

    React.useEffect(() => {
        getVitals()
    }, [])

    const [vitals, setVitals] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function getVitals() {
        axios.get("https://vitals-app-api.herokuapp.com/vitals")
            .then(response => {
                setVitals(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }

    function postVitals(newVital) {
        axios.post("https://vitals-app-api.herokuapp.com/vitals", newVital)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        setVitals(prevVitals => ([...prevVitals, newVital]))
    }

    return (
        <AppContext.Provider
            value={{
                vitals,
                isLoading,
                getVitals,
                postVitals
            }}>
            {props.children}
        </AppContext.Provider>
    )
}