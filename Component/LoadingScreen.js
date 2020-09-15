import React from 'react';
import Logo from './logo/logo.png'
import {
    Image,
    StyleSheet,
    View,
    PermissionsAndroid,
    Text
} from 'react-native';
const LoadingScreen = (props) => {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Location Permission',
            message:
                'This app needs access to your location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
            title: 'Cool Photo App Camera Permission',
            message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={Logo}
            />
            <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}> Homan Finance</Text>
        </View>
    );

}
export default LoadingScreen;
const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});