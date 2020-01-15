import React from 'react'
import { View, FlatList,Image, StyleSheet } from 'react-native';

const LessonScreen= props =>{
return (
<Image
style={{width:"100%", height:"100%"}} 
    source={require('../assets/lesson1.jpg')}
/>
   
)
}

const styles= StyleSheet.create({})
export default LessonScreen;