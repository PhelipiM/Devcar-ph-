import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Card from "../../componentes/Card";

export default function Home( navigation ) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: 'wrap',  
  },
});
