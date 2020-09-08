import React ,{useState} from 'react';
import {View,Text } from 'react-native';
import * as Font from 'expo-font'
import{AppLoading} from "expo"
import LessonsNav from "./Navigations/LessonsNavigation"
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';



/*

init().then(()=>{
  console.log("initialized data")
})
.catch(err=>{
  console.log("failed"+err)
})*/

// const fetchFonts=()=>{
//   return Font.loadAsync({
//     'font-Regular': require('./assets/font/Changa-Regular.ttf')
//   })
// }
 export default function App() {
 
//   i18n.locale= Localization.locale


//  const [isLoading, setIsLoading] = useState(false)
// // fetch fonts before loading the screen

//  if (!isLoading){
//   return(
//     <AppLoading
//       startAsync={fetchFonts}
//       onFinish={setIsLoading(true)}
//     />)
//  }

 // will be loaded after finish fetching fonts 
 return(
  <LessonsNav/>
 )

}
