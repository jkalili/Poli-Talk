import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require ('../assets/background.jpg')}
        >
            <View style = {styles.logoContainer}>
                <Image resizeMode="contain" style = {styles.logo} source={require('../assets/LogoGray.png')}/>
                <Text style = {styles.text}>DEPOLARIZE THE POLITICAL SPACE</Text>
            </View>

            <View style = {styles.loginButton}></View>
            <View style = {styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },

    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#848484",
    },

    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4c4c4c",
    },

    logo: {
        width: 188,
        height: 122,
    },

    logoContainer: {
        position: "absolute",
        top: 280,
        alignItems: "center",
    },

    text: {
        padding: 15,
        fontSize: 18,
    }
    //TEST TEST TEST
})

export default WelcomeScreen;
