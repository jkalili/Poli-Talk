import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

import colors from "../config/colors";

function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        //width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 11,
        borderColor: "white",
        bottom: 70,
        marginVertical: 10,
    },
    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    }
})

export default AppButton;