import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function ComingSoon(props) {
    return (
        <TouchableWithoutFeedback style = {styles.logoContainer} onPress = {() => alert("Tap to leave")}>
            <ImageBackground
            style={styles.background}
            blurRadius={3}
            source={require ('../assets/background2.jpg')}
            >
                <TouchableOpacity onPress = {() => alert("Tap to exit")}>
                <Text style = {styles.text} >UNDER CONSTRUCTION</Text>
                <Text style = {styles.subtext}>TAP ANYWHERE TO EXIT</Text>
                </TouchableOpacity>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    
    subtext: {
        fontSize: 12,
        fontWeight: "bold",
        alignSelf: "center",
        color: colors.secondary,
    },
})

export default ComingSoon;
