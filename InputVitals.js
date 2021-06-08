import React, { useState } from "react"

import { SafeAreaView, View, Text, TextInput, Button, Alert } from "react-native"

import axios from "axios"

function InputVitals() {

    const [vitalsData, setVitalsData] = useState([])
    const [date, onChangeDate] = useState("")
    const [time, onChangeTime] = useState("")
    const [systolicBloodPressure, onChangeSystolicBloodPressure] = useState("")
    const [diastolicBloodPressure, onChangeDiastolicBloodPressure] = useState("")
    const [heartRate, onChangeHeartRate] = useState("")
    const [oxygenSaturation, onChangeOxygenSaturation] = useState("")
    const [sugarLevel, onChangeSugarLevel] = useState("")

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
        axios.post("https://vitals-app-api.herokuapp.com/vitals", newVital)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        setVitalsData(prevVitalsData => ([...prevVitalsData, newVital]))
        console.log(vitalsData)
        Alert.alert(
            `Your Vitals For ${newVital.date} at ${newVital.time}`,
            `Systolic Blood Pressure: ${newVital.systolicBloodPressure}
            Diastolic Blood Pressure: ${newVital.diastolicBloodPressure}
            Heart Rate: ${newVital.heartRate}
            Oxygen Saturation: ${newVital.oxygenSaturation}
            Sugar Level: ${newVital.sugarLevel}`
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
        height: 30,
        margin: 12,
        borderWidth: 1
    }

    return (
        <SafeAreaView>
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
                onPress={submitVitals}
            />
        </SafeAreaView>
    )
}

export default InputVitals