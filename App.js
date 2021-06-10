import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import AppProvider from "./appContext.js"
import Main from "./Main.js"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.header}>Vitals</Text>
      <StatusBar style="auto" />
      <AppProvider>
        <Main />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  header: {
    backgroundColor: "dodgerblue",
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }
});
