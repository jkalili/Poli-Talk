import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function Login(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require ('../assets/background2.jpg')}
        >
            <View style = {styles.logoContainer}>
                <Image resizeMode="contain" style = {styles.logo} source={require('../assets/LogoGray.png')}/>
                <Text style = {styles.text}>DEPOLARIZE THE POLITICAL SPACE</Text>
            </View>

            <TouchableOpacity style = {styles.loginButton} onPress = {() => console.log("PRESSED")}>
                <Text style = {styles. buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.registerButton} onPress = {() => alert("In Beta Testing. Please Press 'Log In'")}>
                <Text style = {styles. buttonText}>SIGN UP</Text>
            </TouchableOpacity>
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
        backgroundColor: colors.secondary,
    },

    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
    },

    logo: {
        width: 184,
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
        fontWeight: "bold",
    },

    buttonText: {
        color: "white",
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 22,
        fontWeight: "bold",
        paddingTop: 20,  
    }
})

export default Login;
