import React from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';

function News({title, date, publisher, link}) {
    return (
      <View style ={styles.container}>
          <Text style = {styles.title} onPress={()=>Linking.openURL(`${link}`)}>{title}</Text>
          <Text style = {styles.date}>{publisher} {date}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    date:{
        color:"#6e6969",
        marginBottom:10
    },
    title:{
        fontWeight: '500',
        marginTop:10,
        marginBottom:5,
        marginHorizontal:5,
        textAlign:"center"

    },
})
export default News;
