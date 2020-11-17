import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Meeting(props) {
    return (
        <SafeAreaView>
            <View>
                <Image style={styles.image} source={require('../assets/selfie.jpg')}/>
            </View>
            <View style = {styles.toolbar}>

                <View style = {styles.mute}>
                    <MaterialCommunityIcons name ="microphone" color = {colors.primary}  size= {40}></MaterialCommunityIcons>
                </View>

                <View style = {styles.camera}>
                    <MaterialCommunityIcons name ="camera" color = {colors.primary}  size= {40}></MaterialCommunityIcons>
                </View>

                <View style = {styles.settings}>
                    <MaterialIcons name ="settings" color = {colors.primary}  size= {40}></MaterialIcons>
                </View>

                <View style = {styles.report}>
                    <MaterialIcons name ="report" color = {colors.primary}  size= {40}></MaterialIcons>
                </View>

                <View style = {styles.endCall}>
                    <MaterialCommunityIcons name ="close" color = {colors.primary}  size= {40}></MaterialCommunityIcons>
                </View>

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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    mute: {

    },

    camera: {

    },

    settings: {

    },

    report: {
   
    },

    endCall: {

    },
})

export default Meeting;
