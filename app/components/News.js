import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function News({title, subTitle, date, publisher}) {
    return (
      <View style ={styles.container}>
          <Text style = {styles.title}>{title}</Text>
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
        marginHorizontal:5
    },
})
export default News;
