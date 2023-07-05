import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet, SafeAreaView,} from 'react-native';

const Item = ({title,price}) => {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{title}</Text>
      <Text style={menuStyles.itemText}>{'$'+price}</Text>
    </View>
  )
};

const renderItem = ({item}) => {
  return (<Item title={item.title} price={item.price}/>)
};

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getMenu = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json');
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }
  useEffect(() => {getMenu();},[]);
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <FlatList
            data = {data}
            renderItem = {renderItem}
            keyExtractor={({ id }, index) => id}>
          </FlatList>
      )}
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
});