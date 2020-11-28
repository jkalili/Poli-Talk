import React from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View, } from 'react-native';
import AppButton from '../components/AppButton';
import colors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';

function WelcomeScreen(props) {
    return (
    <ImageBackground
        style = {styles.background}        
        source={require("../assets/welcome.jpg")} 
    >
        <View style={styles.logoContainer}>
            {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
            <Text style={styles.tagline}>Politcal Compass Test</Text>
        </View>

        <View style={styles.buttonsContainer}>
            
        <AppButton title ="Begin Test" />
        <AppButton title = "Go Back "   />

        <Text style={styles.below}> *Please Notice Important Message* </Text>
            
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
        fontSize: 45,
        fontStyle: "italic",
        fontWeight: "600",
        paddingVertical: 60,
        textAlign: "center",
    },
    below: {
        fontSize: 20,
        color: colors.white,
        fontStyle: "italic",
        fontWeight: "600",
        textAlign: "center",
    },
})

export default CompassWelcome;
