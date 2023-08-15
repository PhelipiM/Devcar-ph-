import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../../componentes/Card';

export default function Home() {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    flexDirection:"row",
  },
});