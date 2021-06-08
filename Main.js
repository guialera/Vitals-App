import React, { useState } from "react"

import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView } from "react-native"

import axios from "axios"

import SavedVitals from "./VitalsData.js"
import InputVitals from "./InputVitals.js"

function Main() {
    const [showInputVitals, setShowInputVitals] = useState(false)
    const [showSavedVitals, setShowSavedVitals] = useState(false)
    const [vitals, setVitals] = useState([])

    function inputVitalsToggle() {
        setShowInputVitals(true)
        setShowSavedVitals(false)
    }

    function savedVitalsToggle() {
        setShowSavedVitals(true)
        setShowInputVitals(false)
        axios.get("https://vitals-app-api.herokuapp.com/vitals")
            .then(response => setVitals(response.data))
            .catch(error => console.log(error))
    }

    let retrievedVitals = vitals.map(each => <SavedVitals key={each._id} {...each} />)

    let inputVitalsStyle = {
        display: showInputVitals ? "block" : "none"
    }

    let savedVitalsStyle = {
        display: showSavedVitals ? "block" : "none",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }

    return (
        <SafeAreaView>
            <View>
                <Button
                    onPress={() => inputVitalsToggle()}
                    title="Enter Your Vitals"
                />
                <Button
                    onPress={() => savedVitalsToggle()}
                    title="View Your Vitals"
                />
            </View>
            <View style={inputVitalsStyle}>
                <InputVitals />
            </View>
            <ScrollView>
                <View style={savedVitalsStyle}>
                    {retrievedVitals}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Main