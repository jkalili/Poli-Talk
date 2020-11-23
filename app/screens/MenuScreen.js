import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

import colors from '../config/colors'
import News from '../components/News'
function MenuScreen(props) {
    return (
        <ImageBackground 
        blurRadius = {3}
        style = {styles.background}
        source ={require('../assets/background1.jpg')}
        >
        <View style = {styles.logo}>
            <Image style = {styles.image} resizeMode="contain" source ={require('../assets/LogoGray.png')}/>
        </View>

        <View style = {styles.profile}>
            <Image style = {styles.image} source ={require('../assets/profileAdrian.jpeg')}/>
        </View>
        <View style ={styles.newscard}>
            <News
                title="Biden wins election"
                date="11/22/20"
                subTitle="Ex-Vice president Biden has been chosen to be the next president of the United States"
            />
        </View>
        <View style ={styles.topicsCard}>
            <Text>This is where Topics would go Test</Text>
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
    
    logo: {
        position: 'absolute',
        left: 20,
        top: '2%',
    },

    newscard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: '5%',
        height: '75%',
        width: '45%',
        top:'12%',
        alignItems:"center",
    },

    topicsCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: 20,
        height: '53%',
        width: '43%',
        top:'12%',
        right:'5%',
        alignItems: "center",
        marginBottom:20,
    },

    friendsListCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: 20,
        height: '21%',
        width: '43%',
        top:'66%',
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
        right: 20,
        top: '2%',
    }
})
export default MenuScreen;