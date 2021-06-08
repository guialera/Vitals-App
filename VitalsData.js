import React from "react"

import { SafeAreaView, View, Text, Button } from "react-native"

function SavedVitals(props) {

    const {
        _id,
        date,
        time,
        systolicBloodPressure,
        diastolicBloodPressure,
        heartRate,
        oxygenSaturation,
        sugarLevel
    } = props

    let container = {
        backgroundColor: "peachpuff",
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        width: 200,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    }

    return (
        <SafeAreaView>
            <View style={container}>
                <Text>Date: {date}</Text>
                <Text>Time: {time}</Text>
                <Text>Systolic BP: {systolicBloodPressure} mmHg</Text>
                <Text>Diastolic BP: {diastolicBloodPressure} mmHg</Text>
                <Text>Heart Rate: {heartRate} BPM</Text>
                <Text>Oxygen Saturation: {oxygenSaturation}%</Text>
                <Text>Sugar Level: {sugarLevel} mg/dL</Text>
            </View>
        </SafeAreaView>
    )
}

export default SavedVitals