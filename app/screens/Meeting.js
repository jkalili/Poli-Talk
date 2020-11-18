import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Meeting(props) {
    return (
        <SafeAreaView>
            <View>
                <ImageBackground style={styles.image} source={require('../assets/cameron.png')}>
                    <Image style={styles.pip} source ={require('../assets/pip.jpg')}/>
                </ImageBackground>
            </View>

            <View style = {styles.toolbar}>
                <View style = {styles.mute}>
                    <MaterialCommunityIcons name ="microphone" color = {colors.darkGrey}  size= {40}></MaterialCommunityIcons>
                </View>

                <View style = {styles.camera}>
                    <MaterialCommunityIcons name ="camera" color = {colors.darkGrey}  size= {40}></MaterialCommunityIcons>
                </View>

                <View style = {styles.settings}>
                    <MaterialIcons name ="settings" color = {colors.darkGrey}  size= {40}></MaterialIcons>
                </View>

                <View style = {styles.report}>
                    <MaterialIcons name ="report" color = {colors.darkGrey}  size= {40}></MaterialIcons>
                </View>

                <View style = {styles.endCall}>
                    <MaterialCommunityIcons name ="close" color = {colors.darkGrey}  size= {40}></MaterialCommunityIcons>
                </View>
            </View>

            <View style={styles.prompt}>
                <View style = {styles.next}>
                    <MaterialIcons name ="navigate-next" color = {colors.darkGrey}  size= {25}></MaterialIcons>
                </View>

                <View style = {styles.before}>
                    <MaterialIcons name ="navigate-before" color = {colors.darkGrey}  size= {25}></MaterialIcons>
                </View>
        
                <Text style={styles.promptText}>Is abortion murder?</Text>
            </View>

            <View style={styles.chat}>
                <Text style ={styles.chatText}>Cameron: Thanks for sharing!</Text>
                <Text style ={styles.chatText2}>Me: Of Course!</Text>
                <View style={styles.keyboard}>
                    <Text style={styles.keyboardMessage}>Message Cameron</Text>
                    <View style = {styles.emojiIcon}>
                        <MaterialCommunityIcons name ="sticker-emoji" color = {colors.lightGrey}  size= {20}></MaterialCommunityIcons>
                    </View>
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
        height: '8%',  
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    chat: {
        width: '100%',
        height: '47.7%',
        backgroundColor: colors.primary,
        alignItems: "center",
    },
    
    chatText: {
        color: colors.offWhite,
        position: "absolute",
        alignSelf: "baseline",
        margin: 5,
    },

    chatText2: {
        color: colors.offWhite,
        position: "absolute",
        alignSelf: "baseline",
        margin: 5,
        top: 25,
    },

    keyboard: {
        width: "90%",
        height: 35,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        position: "absolute",
        bottom: 15
    },

    keyboardMessage: {
        color: colors.lightGrey,
        alignSelf: "flex-start",
        top: 8,
        left: 10,
    },

    emojiIcon :{
        alignSelf: "flex-end",
        right: 10,
        bottom: 10,
    },

    pip: {
        height: 120,
        width: 90,
        position: "absolute",
        alignSelf: "flex-end",
        margin: 20,
        right:0,
        borderRadius: 15,
    },

    prompt: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: '10%',
        borderColor: colors.primary,
        borderWidth: 5,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    promptText: {
        fontSize:20,
        color: colors.darkGrey,
    },

    next: {
        position: "absolute",
        alignSelf: "flex-end",
        margin: 10,
        right: 0,
    },

    before: {
        position: "absolute",
        alignSelf: "flex-start",
        margin: 10,
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
