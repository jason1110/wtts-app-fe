
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const baseURL = 'http://localhost:3000'

export default function App() {

const [ dragName, setDragName ] = useState('') 

useEffect(() => {
  fetch(`${baseURL}/drag_names`)
  .then (response => response.json())
  .then ((names) => console.log(names) )
  .catch((error) => {
    console.error(error);
  });
}, [])
console.log(dragName)

const showNames = () => dragName.map(name => <NameCard dragName={name} key={name.id}/>)

const handleNameGenerator = () => {
  showNames()
}

  return (
    <View style={styles.container}>
      <Text>Welcome to the Stage!</Text>
      <Button  title="get name" onPress={handleNameGenerator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
