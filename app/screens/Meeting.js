import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function Meeting(props) {
    return (
        <SafeAreaView>
            <View>
                <Image style={styles.image} source={require('../assets/selfie.jpg')}/>
            </View>
            <View style = {styles.toolbar}>
                <View style = {styles.mute}></View>
                <View style = {styles.camera}></View>
                <View style = {styles.settings}></View>
                <View style = {styles.report}></View>
                <View style = {styles.endCall}></View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        width: '100%',
        height: 300,    
    },

    toolbar: {
        width: '100%',
        height: 75,  
        backgroundColor: colors.offWhite,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: "space-evenly",
        
    },

    mute: {
        position: "absolute",

        width: "15%",
        height: "80%",
        backgroundColor: 'yellow',
    },

    camera: {
        position: "absolute",

        width: "15%",
        height: "80%",
        backgroundColor: 'blue',
    },

    settings: {
        position: "absolute",

        width: "15%",
        height: "80%",
        backgroundColor: 'green',
    },

    report: {
        position: "absolute",

        width: "15%",
        height: "80%",
        backgroundColor: 'gold',
    },

    endCall: {
        position: "absolute",

        width: "15%",
        height: "80%",
        backgroundColor: 'tomato',
    },
})

export default Meeting;
