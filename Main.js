import React, { useState, useContext } from "react"

import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView } from "react-native"

import { AppContext } from "./appContext.js"
import SavedVitals from "./VitalsData.js"
import InputVitals from "./InputVitals.js"

function Main() {
    const [showInputVitals, setShowInputVitals] = useState(false)
    const [showSavedVitals, setShowSavedVitals] = useState(false)

    const { vitals, isLoading } = useContext(AppContext)

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

    let loadingContainerStyle = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    }

    let loadingScreenStyle = {
        display: isLoading && showSavedVitals ? "block" : "none",
        backgroundColor: "peachpuff",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 50,
    }

    let loadingTextStyle = {
        fontSize: 25,
        textAlign: "center"
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
            <View style={loadingContainerStyle}>
                <View style={loadingScreenStyle}>
                    <Text style={loadingTextStyle}>Loading...</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Main