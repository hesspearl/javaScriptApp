import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Color from "../Colors"

const Card= props =>{
return (
    <TouchableOpacity onPress={props.onPress}
    >
<View style={styles.container}>
    <Text> {props.title}</Text>
</View>
</TouchableOpacity>
)
}

const styles= StyleSheet.create({
    container:{
        width:150,
        height:200 ,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Color.javascript,
      margin:"5%",
      shadowColor: "black",
    shadowOffset: { width:0, hight: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 10,
      
        
        
    }
})
export default Card;