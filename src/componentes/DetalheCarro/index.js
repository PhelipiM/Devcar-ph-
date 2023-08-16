import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalheCarro = ({ route }) => {
  const { carData } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: carData.imageUrl }} />
      <Text style={styles.title}>{carData.title}</Text>
      <Text>Marca: {carData.brand}</Text>
      <Text>Ano: {carData.year}</Text>
      <Text>Preço: ${carData.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetalheCarro;