import { View, Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import { ScrollView, Alert, KeyboardAvoidingView, Platform  } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showLogin, setShowLogin] = useState(true);

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode="on-drag">
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                {showLogin ? (<>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput
                    value={email}
                    placeholder="email"
                    onChangeText={onChangeEmail}
                    style={styles.textInput}
                    keyboardType={"email-address"}
                    clearButtonMode={"always"}/>
                <TextInput
                    value={password}
                    placeholder="password"
                    onChangeText={onChangePassword}
                    style={styles.textInput}
                    keyboardType={"number-pad"}
                    secureTextEntry={true}/>
                <Pressable
                  onPress={()=>{
                    setShowLogin(!showLogin);
                    navigation.navigate('Welcome')
                  }}
                  style={styles.button}>
                    <Text style={styles.btnText}>Login</Text>
                </Pressable>
                </>) : ( <Text style={styles.regularText}>You are logged in!</Text>)}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#777777'
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 8
    },
    largeTextInput: {
        fontSize: 20,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 8,
        height: 150
    },
    button: {
      alignContent: 'center',
      backgroundColor: '#EE9972',
      width: 150,
      padding: 20,
      margin: 10,
      alignSelf:'center',
      borderRadius: 50,
    },
    btnText: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center'
    }
  });
