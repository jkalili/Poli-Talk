import React, {Component} from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";


function CompassButton ({title, onPress, color}) {
state ={
    toggle: true
}

_onPress() ; {
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
}

render () ; {
    const {toggle} = this.state;
    const buttonBg = toggle?"colors.white":"dodgerblue";
    const textColor = toggle?"colors.black":"colors.white";
    return (

        <View>
        <TouchableOpacity 
        onPress={()=>this._onPress} 
        style={{height: 35,
            backgroundColor: buttonBg,
            borderRadius: 11,
            borderColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 5,
            marginVertical: 5,
            marginHorizontal: 25,
            flexDirection: "row",}}>
            
            
            <Text style={{color:textColor,
                 fontSize: 13,}}>{title} </Text>


        </TouchableOpacity>


        </View>
     );
    }
}

const styles = StyleSheet.create({
    // button: {
    //     //width: "22%",
    //     height: 35,
    //     backgroundColor: buttonBg,
    //     borderRadius: 11,
    //     borderColor: colors.primary,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 5,
    //     marginVertical: 5,
    //     marginHorizontal: 25,
    //     flexDirection: "row",
    // },
    // text: {
    //     color: colors.black,
    //     fontSize: 13,
    //     //fontWeight: 'bold',

    // },
})

export default CompassButton;
