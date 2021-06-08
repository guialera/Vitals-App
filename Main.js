import React, { useState } from "react"

import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"

import SavedVitals from "./VitalsData.js"
import InputVitals from "./InputVitals.js"

function Main() {
    const [showInputVitals, setShowInputVitals] = useState(false)
    const [showSavedVitals, setShowSavedVitals] = useState(false)

    function inputVitalsToggle() {
        setShowInputVitals(true)
        setShowSavedVitals(false)
    }

    function savedVitalsToggle() {
        setShowSavedVitals(true)
        setShowInputVitals(false)
    }

    let inputVitalsStyle = {
        display: showInputVitals ? "block" : "none"
    }

    let savedVitalsStyle = {
        display: showSavedVitals ? "block" : "none"
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
            <View style={savedVitalsStyle}>
                <SavedVitals />
            </View>
        </SafeAreaView>
    )
}

export default Main