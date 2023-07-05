import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.20, 
    backgroundColor: '#EE9972'
  },
  textItem: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
})

