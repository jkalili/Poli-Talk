import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableWithoutFeedback, Animated , Easing, TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors'

    const numStars = 5;

    export default class PostConversation extends React.Component {
    
        
    state = {
        rating:1,
        animation: new Animated.Value(1) 
    }

    rate = star => {
        this.setState({rating:star})
    }

    animate = () => {
        Animated.timing(this.state.animation, {
            toValue:2,
            duration:400,
            easing:Easing. ease,
            useNativeDriver: true
        }).start(() => {
            this.state.animation.setValue(1);
        })
    }

    render () { 
        let stars = []
        
        const animateScale = this.state.animation.interpolate ({
            inputRange: [1,1.5,2],
            outputRange: [1,1.4,1]
        })

        const animateOpacity = this.state.animation.interpolate({
            inputRange: [1,1.2,2],
            outputRange: [1, 0.5, 1]
        })

        const animationStyle = {
            transform: [{
                scale: animateScale
            }],
            opacity: animateOpacity
        }

        for(let x=1;x <= numStars;x++) {
            stars.push(
                <TouchableWithoutFeedback key={x} onPress={() =>{
                    this.rate(x), this.animate();
                }}>
                    <Animated.View style={x <= this. state.rating ? animationStyle: ""}>
                        <Star filled={x <= this.state.rating ? true : false}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <ImageBackground style = {styles.container} source={require ('../assets/background2.jpg')} blurRadius={3}>
                
                <Text style = {styles.header}>RATE YOUR CONVERSATION</Text>
                <View style = {{flexDirection: "row"}}>{stars}</View>

                <TextInput 
                    style ={styles.input}
                    placeholder = "leave some feedback!"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                />

                <View style = {styles.submitButton} onPress = {() => navigation.navigate('MenuScreen')}>
                    <Text style = {{fontWeight: "bold"}}>SUBMIT</Text>
                </View>
            </ImageBackground>
        );
    }
    }

    class Star extends React.Component {
        render () {
            return (
                <FontAwesome name={this.props.filled === true ? "star" : "star-o"} color = "#4c4c4c" size= {32} style ={{marginHorizontal: 6}}/>
            )
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 

    header: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
        color: colors.darkGrey,
    },

    submitButton: {
        height: 40,
        width: 80,
        backgroundColor: colors.lightGrey,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 10,
    },

    input: {
        height: 80,
        width: 300,
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 45,
        margin: 10,
    },

})
