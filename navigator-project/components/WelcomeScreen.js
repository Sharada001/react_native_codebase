import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';

export default function WelcomeScreen() {
  return (
    <>
    <View style={styles.headerWrapper}>
        <Text style={styles.text}>
            Little Lemon
        </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    padding: 5,
    fontSize: 25,
    marginVertical: 5,
    marginHorizontal: 8,
    color: '#F4CE14',
    textAlign: 'center'
  },
  headerWrapper: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  text: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
    resizeMode: "cover" // contain, repeat, stretch, center
},
})