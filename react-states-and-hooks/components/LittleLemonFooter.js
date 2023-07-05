import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>
        All rights reserved by Little Lemon, 2022 {' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972' 
  },
  textItem: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  }
})