import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react'; 

export default function TestComponents() {
    const [firstName, onChangeFirstName] = useState('');
    return (
        <View style={styles.container}>
        <TextInput 
            value={firstName}
            placeholder="Firstname"
            onChangeText={onChangeFirstName}
            style={styles.textinput1}/>
        <Text style={styles.text1}>{firstName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        flex: 1
    },
    textinput1: {
        backgroundColor: 'white'
    },
    text1: {
        backgroundColor: 'green'
    }
})