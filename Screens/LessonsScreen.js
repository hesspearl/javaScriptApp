import React ,{ useEffect }from 'react'
import { View,FlatList,SafeAreaView,  StyleSheet,  Alert , BackHandler} from 'react-native';
import Card from "../Components/Card"
import {DATA} from "../data/lessons"
import {PublisherBanner, AdMobInterstitial} from 'expo-ads-admob'




const LessonScreen= props =>{

  


    bannerError = (err) => {
        console.log('banner ad not loading' + err)
      }
    bannerAdReceived = () => {
        console.log('banner ad received')
      }
return (
    <SafeAreaView
  style={styles.container}>
  <PublisherBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-6131682069999134/9992879592" //"ca-app-pub-6131682069999134/9992879592" // Test ID, Replace with your-admob-unit-id
  onDidFailToReceiveAdWithError={bannerError}
 onAdViewDidReceiveAd = {bannerAdReceived}
  />
    <FlatList
    numColumns={2}
   keyExtractor={item=> item.title}
    data={DATA}
    renderItem={(item)=>{
     
     return <Card
     disabled={item.item.disable}
    title={item.item.title}
    onPress={()=>props.navigation.navigate('Lesson', {data:item.item})}
/>


    }}
    />


</SafeAreaView>
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