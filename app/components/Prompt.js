import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import AppButton from './AppButton';
import CompassButton from './CompassButton';

function Prompt({title, subTitle}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.CompassButtonContainer}>   
        <CompassButton title ="Agree" />
        <CompassButton title = "Neutral"/>
        <CompassButton title = "Disagree"/>
        </View>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    CompassButtonContainer: {
        flexDirection: "row",
    },
    subTitle: {
        fontWeight: "300",
        fontSize: 15,
        margin: 7,
        marginTop: 4,
        color: colors.white,
        fontStyle: "italic",
        textAlign: "center",
    },
    title: {
        fontWeight: "700",
        marginTop: 3,
        color: colors.white,
    },
})

export default Prompt;
