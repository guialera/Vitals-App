import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Main from "./Main.js"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.header}>Vitals</Text>
      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  header: {
    backgroundColor: "aqua",
    textAlign: "center",
    fontSize: 25
  }
});
