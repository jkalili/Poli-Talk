import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors'

function ComingSoon(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require ('../assets/background.jpg')}
        >
            <View style = {styles.logoContainer}>
                <Text style = {styles.text}>UNDER CONSTRUCTION</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
    },
})

export default ComingSoon;
