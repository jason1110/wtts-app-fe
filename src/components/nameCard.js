import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements'


export default function NameCard({dragName}) {
    return (
        <View style={styles.container}>
            {dragName.firstName}
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
        card: {
            flex: 1,
            alignContent: 'center',
            width: 400,
            height: 100,
            padding: 10,
        },
        image: {
            margin: 0,
        },
        title: {
            marginBottom: 0,
            textAlign: "center",
            justifyContent: 'center',
            maxHeight: 50,
            fontSize: 20,
        },
        content: {
            flex: 1,
        }
})