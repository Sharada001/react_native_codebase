import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";

export default function TestComponents1() {
    return(
        <ImageBackground 
            source={require('../images/logo.png')} 
            style={styles.container}>
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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        resizeMode: "cover" // contain, repeat, stretch, center
    },
    headerWrapper: {
        flex: 1,
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
    }
})

