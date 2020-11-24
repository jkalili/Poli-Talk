import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function News({title, subTitle, date, publisher}) {
    return (
      <View style ={styles.container}>
          <Text style = {styles.title}>{title}</Text>
          <Text style = {styles.date}>{publisher} {date}</Text>
          <Text style = {styles.subTitle}>{subTitle}</Text>
      </View>
      
      
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    date:{
        color:"#6e6969",
    },
    title:{
        fontWeight: '500',
        marginBottom:3,
    },
    subTitle:{
        fontWeight:'300',
        margin: 7,
        marginTop:4
    }
})
export default News;
