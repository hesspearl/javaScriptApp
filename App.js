import React ,{useState} from 'react';
import {View,Text } from 'react-native';
import * as Font from 'expo-font'
import{AppLoading} from "expo"
import LessonsNav from "./Navigations/LessonsNavigation"


const fetchFonts=()=>{
  return Font.loadAsync({
    'font': require('./assets/font/Katibeh-Regular.ttf')
  })
}
export default function App() {
 
 const [isLoading, setIsLoading] = useState(false)
// fetch fonts before loading the screen
 if (!isLoading){
  return(
    <AppLoading
      startAsync={fetchFonts}
      onFinish={setIsLoading(true)}
    />)
 }

 // will be loaded after finish fetching fonts 
 return(
  <LessonsNav/>
 )

}
