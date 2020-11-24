import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View, } from 'react-native';
import AppButton from '../components/AppButton';

//compass test done by Cristian
function CompassTest(props) {
    return (
    <ImageBackground
        blurRadius = {5}
        style = {styles.background}        
        source={require("../assets/compassBackground.jpg")} 
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/LogoGray.png")} />
            <Text style={styles.tagline}>Politcal Compass Test</Text>
        </View>
        
        <View style={styles.buttonsContainer}>   
            <AppButton title ="Begin Test"/>
            <AppButton title = "Go Back "/>
        </View>    
        </ImageBackground>
         
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 5,
        width: "65%",
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 130,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
        fontSize: 70,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,

    }
})

export default CompassTest;