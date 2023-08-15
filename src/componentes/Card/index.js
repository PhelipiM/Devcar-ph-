import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = () => {
    
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={{ uri: 'https://s1.1zoom.me/big0/572/Volkswagen_Red_Metallic_White_background_592789_1280x853.jpg'}}/>
        <Text style={styles.title}>Volkswagen Gol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;