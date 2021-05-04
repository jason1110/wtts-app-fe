
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NameCard from './src/components/nameCard.js';

const baseURL = 'http://localhost:3000'

export default function App() {

const [ dragName, setDragName ] = useState([]) 

useEffect(() => {
  fetch(`${baseURL}/drag_names`)
  .then (response => response.json())
  .then ((names) => setDragName(names) )
  .catch((error) => {
    console.error(error);
  });
}, [])
console.log(dragName.map(name => name.first_name))

const showNames = () => dragName.map(name => <NameCard dragName={name} key={name.id}/>)

const handleNameGenerator = () => {
  //build random generator
}

function getRandom(dragName) {
  console.log(dragName)
  return dragName[Math.floor(Math.random()*dragName.length)];
}

  return (
    <View style={styles.container}>
      <Text>Welcome to the Stage!</Text>
      <Button  title="get name" onPress={() => (getRandom(dragName))}/>
      {showNames()}
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
