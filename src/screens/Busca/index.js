import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,TextInput,Button, FlatList, Image } from 'react-native';

import api from '../../plugins/api';
//  end point?
// const cars = ref([])
//   {
//     id: "1",
//     name: "Honda Civic",
//     description: "A reliable and efficient car.",
//     image:
//       "https://quatrorodas.abril.com.br/wp-content/uploads/2022/04/honda-civic-seda-e1650568274124.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
//   },
//   {
//     id: "2",
//     name: "Toyota Corolla",
//     description: "A popular car with good resale value.",
//     image:
//       "https://media.toyota.com.ar/7fa6ab27-3617-4a5f-9e38-d092b862411e.jpeg",
//   },
//   {
//     id: "3",
//     name: "Mazda 3",
//     description: "A sporty and fun-to-drive car.",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mazda3_SKYACTIV-G_%28cropped%29.jpg",
//   },
//   {
//     id: "4",
//     name: "Nissan Silvia",
//     description: "A sporty and fun-to-drive car.",
//     image:
//       "https://p.turbosquid.com/ts-thumb/ox/Dzgc6T/qFTdsPVG/img_4543/jpg/1588594137/600x600/fit_q87/a7b8ab15313cf9b090813ed0da6cc8f84a0ea25a/img_4543.jpg",
//   },
//   {
//     id: "5",
//     name: "Toyota Supra",
//     description: "A sporty and fun-to-drive car.",
//     image:
//       "https://i.pinimg.com/originals/ca/6b/b7/ca6bb7f7d1a6e9f4ef932c2b13434ad5.jpg",
//   },
//   {
//     id: "6",
//     name: "Nissan Skyline",
//     description: "A sporty and fun-to-drive car.",
//     image:
//       "https://plantaodoslagos.com.br/wp-content/uploads/2022/06/nissan-skyline-paul-walker-5.jpg",
//   },
// ];

export default function Busca() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [images, setImages] = React.useState([]);

  const [cars, setCars] = useState([])

  const getVeiculos = async () => {
    const {data} = await api.get('garagem/veiculos/')
    setCars(data)
    setResults(data)
    setImages(data.map((car) => car.image));
  }


  useEffect(() => {
    getVeiculos()
  }, [])

  const handleSearch = async () => {
    await getVeiculos()
    // const filteredResults = cars.filter((car) =>
    //   car.name.toLowerCase().includes(query.toLowerCase())
    // );
    // setResults(filteredResults);
    // setImages(filteredResults.map((car) => car.image));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procurar um carro"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
        renderItem={({ item, index }) => (
          <View style={styles.result}>
            <Image source={{ uri: images[index] }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
