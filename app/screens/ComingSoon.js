import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function ComingSoon(props) {
    return (
        <TouchableWithoutFeedback style = {styles.logoContainer}>
            <ImageBackground
            style={styles.background}
            blurRadius={3}
            source={require ('../assets/background2.jpg')}
            >
                <View>
                <Text style = {styles.text} >UNDER CONSTRUCTION</Text>
                <Text style = {styles.subtext}>TAP THE TOP LEFT TO EXIT</Text>
                </View>
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
