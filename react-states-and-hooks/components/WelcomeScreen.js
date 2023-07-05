import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import MenuItems from './MenuItems';

export default function WelcomeScreen({navigation}) {
  return (
    <>
    <View style={styles.headerWrapper}>
        <Image 
          source={require('../images/logo.png')}
          style={styles.logo}
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'} />
        <Text style={styles.text}>
            Little Lemon
        </Text>
    </View>
      <Pressable onPress={() => {navigation.goBack()}}>
        <Text style={styles.text}>Go back</Text>
      </Pressable>
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