import React from 'react'
import { View,FlatList, ScrollView, StyleSheet } from 'react-native';
import Card from "../Components/Card"

import {DATA} from "../data/lessons"

const LessonScreen= props =>{
return (
    <FlatList
    numColumns={2}
   keyExtractor={item=> item.title}
    data={DATA}
    renderItem={(item)=>{
     console.log(item)
     return <Card
     
    title={item.item.title}
    onPress={()=>props.navigation.navigate('Lesson', {data:item.item.body})}
/>


    }}
    style={styles.container}/>



)
}
const styles= StyleSheet.create({
  
    container:{
    justifyContent:"center",
    alignItems:"center",
     flex:1,
     margin:10,
    }
})

export default LessonScreen;