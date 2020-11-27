import React, {useState} from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Switch, Button, Alert,TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import News from '../components/News'
import Topics from '../components/Topics'

function MenuScreen({navigation}) {
    const [switchElectionEnabled, switchElection] = React.useState(false);
    const [switchCovidEnabled, switchCovid] = React.useState(false);
    const [switchBLMEnabled, switchBLM] = React.useState(false);
    const [switchGunControlEnabled, switchGunControl] = React.useState(false);
    const [switchSameSexEnabled, switchSameSex] = React.useState(false);
    

    return (
        <ImageBackground 
        blurRadius = {3}
        style = {styles.background}
        source ={require('../assets/background1.jpg')}
        >
        <View style = {styles.logo}>
            <Image style = {styles.image} resizeMode="contain" source ={require('../assets/LogoGray.png')}/>
        </View>
        <TouchableOpacity onPress={()=> Alert.alert("Signout", "",[
            {text: "Cancel"},
            {text: "Confirm"},
        ])} style = {styles.profile}>
            <Image style = {styles.image} source ={require('../assets/profileAdrian.jpeg')}/>
        </TouchableOpacity>
        <View style ={styles.newscard}>
        <Text style ={styles.title}>Recent News</Text>

            <News
                title="Trump pardons Michael Flynn"
                publisher="LA Times"
                date="11/27/20"
                
            />
            <News
                title="Top Black Friday Deals"
                publisher="BuzzFeed"
                date="11/27/20"
            />
            <News
                title="Surprising Grammy Nominations"
                publisher="LA times"
                date="11/24/20"
            />
            <News
                title="China and India tensions rise"
                publisher="CNN"
                date="11/24/20"
            />
            <News
                title="Gov. Newsom Quarantining"
                publisher="NPR"
                date="11/23/20"
            />
            <News
                title="Trump refuses to Concede"
                publisher="FOX News"
                date="11/23/20"
            />
            <News
                title="Ken Jennings new Jeopardy Host"
                publisher="The Hill"
                date="11/23/20"
            />
            <News
                title="Economic recession likely"
                publisher="CNN"
                date="11/20/20"
            />
            <News
                title="Biden wins election"
                publisher="AP News"
                date="11/12/20"
            />
    
        <Button title="SHOW MORE" 
        color="#6e6969"
        style = {{fontWeight: "bold"}}
        onPress = {() => navigation.navigate('ComingSoon')}
        />
        </View>
        <View style ={styles.topicsCard}>
            <Text style ={styles.title}>Popular Topics</Text>
            <Text style={{fontWeight: 'bold',textDecorationLine: 'underline',marginTop:5}}>This Week</Text>
            <Topics 
                    topic = "2020 Election"
                    number = "4.3K"
                /> 
                <Switch
                    value={switchElectionEnabled}
                    style={styles.switchStyle}
                    onValueChange={(value) => switchElection(value)}
                /> 
        <Topics 
                    topic = "COVID-19 Vaccine"
                    number = "4.2K"
                /> 
                <Switch
                    value={switchCovidEnabled}
                    style={styles.switchStyle}
                    onValueChange={(value) => switchCovid(value)}
                /> 
        <Topics 
                    topic = "BLM Movement"
                    number = "4.0K"
                /> 
                <Switch
                    value={switchBLMEnabled}
                    style={styles.switchStyle}
                    onValueChange={(value) => switchBLM(value)}
                /> 
        <Topics 
                    topic = "Gun Control"
                    number = "2.8K"
                /> 
                <Switch
                    value={switchGunControlEnabled}
                    style={styles.switchStyle}
                    onValueChange={(value) => switchGunControl(value)}
                /> 
        <Topics 
                    topic = "Same Sex Marriage"
                    number = "2.5K"
                /> 
                <Switch
                    value={switchSameSexEnabled}
                    style={styles.switchStyle}
                    onValueChange={(value) => switchSameSex(value)}
                /> 
        <Button title="MEET" color="grey" onPress = {() => navigation.navigate('Meeting')}/>
        </View>
        <View style = {styles.friendsListCard}>
        <Text style ={styles.title}>Friends Online (3/14)</Text>
            <View>
                <Text style = {styles.FriendsList}>Adrian Leung</Text>
                <Text style = {styles.FriendsList}>Jason Kalili</Text>
                <Text style = {styles.FriendsList}>Jeffrey Shoji</Text>
            </View>
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
        left: '5%',
        top: '5%',
    },
    FriendsList:{
        fontSize:15,
        marginVertical:7,
    },
    newscard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: '5%',
        height: '80%',
        width: '42%',
        top:'15%',
        alignItems:"center",
    },
    topicsCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: 20,
        height: '57%',
        width: '43%',
        top:'15%',
        right:'5%',
        alignItems: "center",
        marginBottom:20,
        fontSize:20,
    },
    friendsListCard: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: colors.offWhite,
        marginLeft: 20,
        height: '22%',
        width: '43%',
        top:'73%',
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
    topicSelect:{
        flexDirection:"row",
    },
    switchStyle:{
        transform: [{ scaleX: .8 }, { scaleY: .8 }],
        marginVertical:3,
    },
    title:{
        top:10,
        fontSize:20,
        marginBottom:15
    },
    profile:{
        position: 'absolute',
        right: '5%',
        top: '5%',
    }
})
export default MenuScreen;
