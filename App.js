import {StatusBar} from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getTodoListApi();
  }, [])


  const getTodoListApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
