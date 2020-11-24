import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

import colors from '../config/colors'
import News from '../components/News'
import Topics from '../components/Topics'

//menu screen done by Adrian
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
                title="Gov. Newsom Quarantining"
                publisher="NPR"
                date="11/23/20"
                subTitle="California Gov. Gavin Newsom and his family are quarantining after coming in contact with a Patrol Officer who tested positive for COVID-19"
            />
            <News
                title="Trump refuses to Concede"
                publisher="FOX News"
                date="11/23/20"
                subTitle="GSA Chief warns that Pres. elect Biden will continue presidential transition reguardless of Pres. Trump's actions"
            />
            <News
                title="Ken Jennings new Jeopardy Host"
                publisher="The Hill"
                date="11/23/20"
                subTitle="Ken Jennings has been named interim 'Jeopardy!' host after death of Alex Trebek"
            />
            <News
                title="Economic recession likely"
                publisher="CNN"
                date="11/20/20"
                subTitle="With the pandemic intensifying, experts from JPMorgan warn the GDP will turn negative by early next year"
            />
            <News
                title="Biden wins election"
                publisher="AP News"
                date="11/12/20"
                subTitle="Ex-Vice president Joe Biden has been chosen to be the next president of the United States"
            />
        </View>
        <View style ={styles.topicsCard}>
            <Text style ={{fontSize:17}}>Popular Topics</Text>
            <Text style={{fontWeight: 'bold',textDecorationLine: 'underline',marginTop:5}}>This Week</Text>
            <Topics 
                topic = "2020 Election"
                number = "4.3K"
            />
            <Topics 
                topic = "COVID-19 Vaccine"
                number = "3.9K"
            />
            <Topics 
                topic = "BLM Movement"
                number = "3.7K"
            />  
            <Topics 
                topic = "Gun Control"
                number = "2.8K"
            />
            <Topics 
                topic = "Raising Minimum Wage"
                number = "2.7K"
            />
            <Topics 
                topic = "Immigration Reform"
                number = "2.2K"
            />
            <Topics 
                topic = "Abortion"
                number = "2.1K"
            />
            <Topics 
                topic = "Foreign Aid"
                number = "1.7K"
            />
        <Text style ={{color:'#6e6969', fontSize:15,marginVertical:10}}>Show More</Text>                                                   
        </View>
        <View style = {styles.navBottom}>
            <Text>Menu Bar items would go here</Text>
        </View>
        <View style = {styles.friendsListCard}>
        <Text style ={{fontSize:17, marginBottom:10}}>Friends Online (3/14)</Text>
            <View>
                <Text style = {styles.FriendsList}>Cristian Ornelas</Text>
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
        left: 20,
        top: '2%',
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
        height: '75%',
        width: '42%',
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
        fontSize:20,
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
