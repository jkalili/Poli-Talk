import React from 'react';
import {View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import colors from "../config/colors";

function CTscore(onPress) {
    return (
        <ImageBackground
        blurRadius ={7}
        style = {styles.background}        
        source={require("../assets/welcome.jpg")} 
        >
        <View style={styles.logoIcon}>
            <Image style = {styles.image} resizeMode = "contain" source={require("../assets/logo.png")} />
        </View>

        <View style={styles.profileIcon}>
            <Image style = {styles.image} source={require('../assets/cristianprofile.jpg')}/>
        </View>

        <View style ={styles.forum}>
                     <Text style={styles.title}>Compass Test</Text>
                            <View>
                                     <Text style={styles.scoreHeader}>Your Current Score:</Text>
                                     <Text style={styles.score}>46</Text>
                           </View>
                                     
                           <TouchableOpacity style={styles.scoreButton} onPress={onPress}>
                             <Text style={styles.continue} > CONTINUE </Text>
                                </TouchableOpacity>

        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
            
            background: {
                flex: 1,
                justifyContent: "flex-end",
            },
            continue:{
                color: colors.black,
                position: "relative",
                alignSelf: "center",
                fontSize: 18,
                fontWeight: 'bold',
            },
            forum: {
                alignSelf: "center",
                position: "absolute",
                borderWidth: 10,
                borderRadius: 35,
                borderColor: colors.black,
                backgroundColor: colors.white,
                margin: 10,
                height: "45%",
                width: "70%",
                top: "25%",
            },
            image:{
                width: 60,
                height: 60,
                borderRadius: 30,
            },
            logoIcon:{
                position: "absolute",
                top: "5%",
                left: 20,
            },
            profileIcon:{
                position: "absolute",
                top: "5%",
                right: 20,
            },
            score: {
                alignSelf: "center",
                fontSize: 50,
                marginVertical: 2,
                color: colors.black,
            },
            scoreButton: {
                position: "relative",
                alignSelf: "center",
                justifyContent: 'center',
                top: "9%",
                backgroundColor: colors.primary,
                borderWidth: 5,
                borderRadius: 12,
                borderColor: colors.black,
                height: "25%",
                width: "50%",
            },
            scoreHeader: {
                alignSelf: "center",
                fontSize: 15,
                marginVertical: 14,
                color: colors.black,
              },
            title: {
                alignSelf: "center",
                top: 10,
                fontSize: 20,
                marginBottom: 15,
                marginVertical: 14,
                color: colors.black,
              },
    })

export default CTscore;
