import React, { useState, useContext } from "react"

import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView } from "react-native"

import { AppContext } from "./appContext.js"
import SavedVitals from "./VitalsData.js"
import InputVitals from "./InputVitals.js"

function Main() {
    const [showInputVitals, setShowInputVitals] = useState(false)
    const [showSavedVitals, setShowSavedVitals] = useState(false)

    const { vitals } = useContext(AppContext)

    function inputVitalsToggle() {
        setShowInputVitals(true)
        setShowSavedVitals(false)
    }

    function savedVitalsToggle() {
        setShowSavedVitals(true)
        setShowInputVitals(false)
    }

    let retrievedVitals = vitals.map(each => <SavedVitals key={each._id} {...each} />)

    let inputVitalsStyle = {
        display: showInputVitals ? "block" : "none",
    }

    let savedVitalsStyle = {
        display: showSavedVitals ? "block" : "none",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingBottom: 100
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