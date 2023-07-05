import { View, Text, StyleSheet, useColorScheme, useWindowDimensions } from "react-native"; 
import { useDeviceOrientation, useAppState,  } from '@react-native-community/hooks' 

export default function Hooks() {
    const colorScheme = useColorScheme();
    const window = useWindowDimensions();
    const orientation = useDeviceOrientation();
    const currentAppState = useAppState(); 
    return (
        <View
            style={[ styles.container, 
            colorScheme === 'light' ? 
            { backgroundColor: '#EDEFEE' } : { backgroundColor: '#333333' }]} >
            <Text 
                style={[
                styles.text,
                colorScheme === 'light' ?
                { color: '#333333' } : { color: '#EDEFEE' },]}>
                    height: {window.height} {'\n'}
                    width: {window.width} {'\n'}
                    fontScale: {window.fontScale} {'\n'}
                    Portrait or Landscape ?: {orientation} {'\n'}
                    Active or Background(Android)/Inactive(IOS) : {currentAppState}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        margin: 2,
    }
})