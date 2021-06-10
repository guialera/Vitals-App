import React, { useState, useContext } from "react"

import { SafeAreaView, View, ScrollView, Text, TextInput, Button, Alert } from "react-native"

import { AppContext } from "./appContext.js"

function InputVitals() {

    const [date, onChangeDate] = useState("")
    const [time, onChangeTime] = useState("")
    const [systolicBloodPressure, onChangeSystolicBloodPressure] = useState("")
    const [diastolicBloodPressure, onChangeDiastolicBloodPressure] = useState("")
    const [heartRate, onChangeHeartRate] = useState("")
    const [oxygenSaturation, onChangeOxygenSaturation] = useState("")
    const [sugarLevel, onChangeSugarLevel] = useState("")

    const { vitals, postVitals } = useContext(AppContext)

    function submitVitals() {
        let newVital = {
            date: date,
            time: time,
            systolicBloodPressure: systolicBloodPressure,
            diastolicBloodPressure: diastolicBloodPressure,
            heartRate: heartRate,
            oxygenSaturation: oxygenSaturation,
            sugarLevel: sugarLevel
        }
        postVitals(newVital)
        Alert.alert(
            `Your Vitals For ${newVital.date} at ${newVital.time}`,
            `Systolic Blood Pressure: ${newVital.systolicBloodPressure} mmHg \n
            Diastolic Blood Pressure: ${newVital.diastolicBloodPressure} mmHg \n
            Heart Rate: ${newVital.heartRate} BPM \n
            Oxygen Saturation: ${newVital.oxygenSaturation} % \n
            Sugar Level: ${newVital.sugarLevel} mg/dL`
        )
        onChangeDate("")
        onChangeTime("")
        onChangeSystolicBloodPressure("")
        onChangeDiastolicBloodPressure("")
        onChangeHeartRate("")
        onChangeOxygenSaturation("")
        onChangeSugarLevel("")
    }

    let headerStyle = {
        textAlign: "center",
        fontSize: 20
    }

    let textInputStyle = {
        backgroundColor: "white",
        height: 30,
        margin: 12,
        borderWidth: 1
    }

    let inputButtonStyle = {
        paddingBottom: 100
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={headerStyle}>Today's Vitals</Text>
                    <TextInput
                        style={textInputStyle}
                        placeholder="Date"
                        name="date"
                        onChangeText={onChangeDate}
                        value={date}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Time"
                        name="time"
                        onChangeText={onChangeTime}
                        value={time}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Systolic Blood Pressure"
                        name="systolicBloodPressure"
                        onChangeText={onChangeSystolicBloodPressure}
                        value={systolicBloodPressure}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Diastolic Blood Pressure"
                        name="diastolicBloodPressure"
                        onChangeText={onChangeDiastolicBloodPressure}
                        value={diastolicBloodPressure}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Heart Rate"
                        name="heartRate"
                        onChangeText={onChangeHeartRate}
                        value={heartRate}
                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Oxygen Saturation"
                        name="oxygenSaturation"
                        onChangeText={onChangeOxygenSaturation}
                        value={oxygenSaturation}

                    />
                    <TextInput
                        style={textInputStyle}
                        placeholder="Sugar Level"
                        name="sugarLevel"
                        onChangeText={onChangeSugarLevel}
                        value={sugarLevel}
                    />
                </View>
                <Button
                    title="Submit Vitals"
                    style={inputButtonStyle}
                    onPress={submitVitals}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default InputVitals