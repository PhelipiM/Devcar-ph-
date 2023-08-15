import React from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

export default function Busca() {
  return (
    <View style={styles.container}>
      <TextInput style= {styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 20,
  },
  input: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    width: 320,
    height: 40,

  },
});