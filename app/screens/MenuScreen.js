import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

import colors from '../config/colors'

function MenuScreen(props) {
    return (
        <ImageBackground 
        blurRadius = {8}
        style = {styles.background}
        source ={require('../assets/background.jpg')}
        >
        <View style = {styles.profile}>
            <Image style = {styles.image} source ={require('../assets/profile.jpeg')}/>
        </View>
        <View style ={styles.newscard}>
            <Text>This is where recent news would go</Text>
        </View>
        <View style ={styles.topicsCard}>
            <Text>This is where Topics would go </Text>
        </View>
        <View style = {styles.navBottom}>
            <Text>Menu Bar items would go here</Text>
        </View>
        <View style = {styles.friendsListCard}>
            <Text>Friends List would go here</Text>
        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
    },
    newscard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginLeft: '5%',
        height: '70%',
        width: '40%',
        top:'15%',
        alignItems:"center",
    },
    topicsCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginLeft: 20,
        height: '50%',
        width: '40%',
        top:'15%',
        right:'5%',
        alignItems: "center",
        marginBottom:20,
    },
    friendsListCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginLeft: 20,
        height: '15%',
        width: '40%',
        top:'70%',
        right:'5%',
        alignItems: "center",
    },
    navBottom:{
        backgroundColor: '#D3D3D3',
        width: '100%',
        height: 80,
        alignItems: "center",
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    profile:{
        position: 'absolute',
        right: 30,
        top: '5%',
    }
})
export default MenuScreen;