import React from 'react';
import {View, ImageBackground, StyleSheet, Text, Image} from 'react-native';
import colors from "../config/colors";
import AppButton from '../components/AppButton'; 
import Prompt from '../components/Prompt';
import CompassButton from "../components/CompassButton";
import {AntDesign} from '@expo/vector-icons';

function CompassTest(props) {
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
            <Prompt
                title="Question 1:"
                subTitle="If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations."
            />
            <Prompt
                title="Question 2:"
                subTitle="I’d always support my country, whether it was right or wrong."
            />
            <Prompt
                title="Question 3:"
                subTitle="No one chooses their country of birth, so it’s foolish to be proud of it."
            />
            <Prompt
                title="Question 4:"
                subTitle="Our race has many superior qualities, compared with other races."
            />
        </View>
        <View style={styles.submitContainer}>
            
        <CompassButton title ="Submit" />
        </View>


        {/* <View style={styles.faceIcon}></View> */}
                    {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
               {/* <View style={styles.whitebackground}> */}
                {/* <View style={styles.textContainer}> */}
                    {/* <Text style={styles.question}>QUESTION 1:</Text>
                    <Text style={styles.question}>If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.</Text>
                <View style={styles.buttonsContainer}>   
                <AppButton title ="Agree" />
                <AppButton title = "Neutral"/>
                <AppButton title = "Disagree"/>
                </View> */}
                {/* </View> */}
        
                {/* <View style={styles.textContainer}> */}
                    {/* <Text style={styles.question}>QUESTION 2:</Text>
                    <Text style={styles.question}>hello</Text>
                <View style={styles.buttonsContainer}>
                <AppButton title ="Agree" />
                <AppButton title = "Neutral"/>
                <AppButton title = "Disagree"/>
                </View>     */}
                {/* </View> */}


                {/* </View> */}
                
                </ImageBackground>
                 
            );
        }
        
        const styles = StyleSheet.create({
            background: {
                flex: 1,
                justifyContent: "flex-end",
            },
            buttonsContainer: {
                padding: 10,
                width: "55%",
                justifyContent: 'center',
                flexDirection: "row",
            },
            forum: {
                position: "absolute",
                borderWidth: 10,
                borderRadius: 35,
                borderBottomWidth: 64,
                borderColor: colors.white,
                backgroundColor: colors.black,
                margin: 10,
                height: "85%",
                width: "95%",
                top: "13%",
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
            submitContainer: {
                    margin: "5%",
                    justifyContent: 'center',
                    width: "90%",
                    
                    
            },
        })

export default CompassTest;
