import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [pref, setPref] = useState({
    push : false,
    email : false,
    news : true
  })
  console.log(pref, 1)
  useEffect( () => {
    setPref({
      push : true,
      email : null,
      news : null
    });
    console.log(pref);
  },[])
  
  const get = async() => {
    try {
      const value = await AsyncStorage.getItem('new');
      console.log(JSON.parse(value));
    } catch(e){
      console.log(e);
    }
  };
  get();
  return (
    <View>
      <Text>Apple</Text>
    </View>
  );
}
