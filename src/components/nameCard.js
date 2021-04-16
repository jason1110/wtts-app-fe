import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';



export default function NameCard({dragName}) {

console.log('youre in namecard')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text>{dragName.first_name}</Text>
            <Text>{dragName.last_name}</Text>
            <Text>Loves it!{dragName.likes}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
        alignItems: 'center',
        transform: [{
            rotate: '-25deg'
        }],
        color: '#f0f5fc',
        flexWrap: 'wrap',
        paddingVertical: 6,
        paddingHorizontal: 50,
        margin: 50,
        marginBottom: 70,
        fontFamily: 'Pacifico_400Regular'
    },  
})