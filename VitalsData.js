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
        width: 180,
        paddingTop: 0,
        paddingBottom: 10,
        marginBottom: 10
    }

    let headerStyle = {
        backgroundColor: "aqua",
        alignItems: "center",
        width: "100%",
        marginTop: 0,
        marginBottom: 0
    }

    let textMainStyle = {
        lineHeight: 20
    }

    let lineStyleHeader = {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignSelf: "stretch",
        marginTop: 0,
        marginBottom: 5
    }

    let lineStyle = {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignSelf: "stretch",
        marginTop: 5,
        marginBottom: 5
    }

    return (
        <SafeAreaView>
            <View style={container}>
                <View style={headerStyle}>
                    <Text style={textMainStyle}>Date: {date}</Text>
                    <Text style={textMainStyle}>Time: {time}</Text>
                </View>
                <View style={lineStyleHeader} />
                <Text style={textMainStyle}>Systolic BP: {systolicBloodPressure} mmHg</Text>
                <Text style={textMainStyle}>Diastolic BP: {diastolicBloodPressure} mmHg</Text>
                <Text style={textMainStyle}>Heart Rate: {heartRate} BPM</Text>
                <View style={lineStyle} />
                <Text>Oxygen Saturation: {oxygenSaturation}%</Text>
                <View style={lineStyle} />
                <Text>Sugar Level: {sugarLevel} mg/dL</Text>
            </View>
        </SafeAreaView>
    )
}

export default SavedVitals