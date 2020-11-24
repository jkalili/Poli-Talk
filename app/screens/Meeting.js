import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';


//meeting screen done by Jason
function Meeting({navigation}) {
    return (
        <View>
            <View>
                <ImageBackground style={styles.image} source={require('../assets/cameron.png')}>
                    <Image style={styles.pip} source ={require('../assets/pip.jpg')}/>
                </ImageBackground>
            </View>
        
            <View style = {styles.toolbar}>
                <TouchableOpacity style = {styles.mute}>
                    <MaterialCommunityIcons name ="microphone" color = {colors.darkGrey}  size= {30}></MaterialCommunityIcons>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.camera}>
                    <MaterialCommunityIcons name ="camera" color = {colors.darkGrey}  size= {30}></MaterialCommunityIcons>
                </TouchableOpacity>

                {/* Added onPress to both TouchableOpacity and MaterialIcon because adding it on only materialIcons would not work on mobile, and the opposite would not work when running in web browser*/}
                <TouchableOpacity style = {styles.settings} onPress = {() => navigation.navigate('ComingSoon')}>
                    <MaterialIcons name ="settings" color = {colors.darkGrey}  size= {30} onPress = {() => navigation.navigate('ComingSoon')}></MaterialIcons>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.report} onPress = {() => navigation.navigate('Report')}>
                    <MaterialIcons name ="report" color = {colors.darkGrey}  size= {30} onPress = {() => navigation.navigate('Report')}></MaterialIcons>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.endCall}  onPress = {() => navigation.navigate('PostConversation')}>
                    <MaterialCommunityIcons name ="close" color = {colors.darkGrey}  size= {30} onPress = {() => navigation.navigate('PostConversation')}></MaterialCommunityIcons>
                </TouchableOpacity>
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
                <Text style ={styles.chatText0}>Cameron: Thanks for sharing!</Text>
                <Text style ={styles.chatText1}>Me: Of Course!</Text>
                <Text style ={styles.chatTextDynamic}>Me: Of Course!</Text>
                <View style={styles.keyboard}>
                    <TextInput 
                    style = {styles.input}
                    placeholder = "enter message"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    />
                    <TouchableOpacity style = {styles.sendIcon} >
                        <MaterialCommunityIcons name ="send" color = {colors.lightGrey}  size= {20}></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        height: 50,  
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    chat: {
        width: '100%',
        height: 430,
        backgroundColor: colors.primary,
        alignItems: "center",
    },
    
    prompt: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: 70,
        borderColor: colors.primary,
        borderWidth: 5,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    
    chatText0: {
        color: colors.white,
        position: "absolute",
        alignSelf: "baseline",
        margin: 10,
    },

    chatText1: {
        color: colors.white,
        position: "absolute",
        alignSelf: "baseline",
        margin: 10,
        top: 25,
    },

    chatTextDynamic: {
        color: colors.white,
        position: "absolute",
        alignSelf: "baseline",
        margin: 10,
        top: 50,
    },

    keyboard: {
        width: "90%",
        height: 35,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        position: "absolute",
        bottom: 80,
    },

    input: {
        color: colors.lightGrey,
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        top: 8,
    },

    sendIcon: {
        alignSelf: "flex-end",
        right: 10,
        bottom: 8,
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
