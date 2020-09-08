import React, { useEffect } from "react";
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  BackHandler
} from "react-native";
import { PublisherBanner, AdMobInterstitial } from "expo-ads-admob";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import * as Localization from 'expo-localization';
import{} from "react-native-view-pdf"
import { WebView } from 'react-native-webview';

const TheLessonScreen = props => {
  const DATA = props.navigation.getParam("data");

  return (
    <View style={{flex:1, }}>
      <PublisherBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-6131682069999134/9992879592" //"ca-app-pub-6131682069999134/9992879592" // Test ID, Replace with your-admob-unit-id
        onDidFailToReceiveAdWithError={bannerError}
        onAdViewDidReceiveAd={bannerAdReceived}
      />
      <ScrollView style={styles.container}>
      {DATA.body.map((item,index)=> (
           <View 
           key={index}
           style={{margin:10, }}>
              <Image
              style={styles.img}
            
              source={{ uri: item }}
            />
            </View>
          )
          )
          }
      </ScrollView>
          
       
             
          
      
    </View>
  );
};

/*
const downloadPDF =(url)=>{
  RNFetchBlob.fetch('GET', url , {
    Authorization : 'Bearer access-token...',
    // more headers  ..
  })
  .then((res) => {
    console.log(res)
   /* let status = res.info().status;

    if(status == 200) {
      // the conversion is done in native code
      let base64Str = res.base64()
      // the following conversions are done in js, it's SYNC
      let text = res.text()
      let json = res.json()
    } else {
      // handle other status codes
    }
  })
  // Something went wrong:
  .catch((errorMessage, statusCode) => {
    console.log("error"+errorMessage)
  })
} */

const AdHandler = async props => {};

// TheLessonScreen.navigationOptions = navData => {
//   const data = navData.navigation.getParam("data");

//   if(Localization.isRTL)
//   return{
//     headerTitle: data.title,
//     headerLeft:null,
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="return"
//           iconName={"back"}
//           onPress={ () => {
//           /*  AdMobInterstitial.setAdUnitID(
             
// "ca-app-pub-6131682069999134/1911850227"
//             ); //  ca-app-pub-6131682069999134/1911850227

//             try {
//               await AdMobInterstitial.requestAdAsync();
//               await AdMobInterstitial.showAdAsync();*/
//               navData.navigation.goBack();
//           /*  } catch (e) {
//               console.log(e);
//             }*/
//           }}
//         />
//       </HeaderButtons>
//     )
//   }

//   return {
//     headerTitle: data.title,
//     headerLeft: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="return"
//           iconName={"back"}
//           onPress={ () => {
//          /*   AdMobInterstitial.setAdUnitID(
//               'ca-app-pub-6131682069999134/1911850227'
//             ); //  ca-app-pub-6131682069999134/1911850227

//             try {
//               await AdMobInterstitial.requestAdAsync();
//               await AdMobInterstitial.showAdAsync();*/
//               navData.navigation.goBack();
//        /*     } catch (e) {
//               console.log(e);
//             }*/
//           }}
//         />
//       </HeaderButtons>
//     )
//   };
// };

const dimensions = Dimensions.get("screen");
const imageHeight = dimensions.height/1
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  img: {
    
    height:700
     
    //   marginBottom: -100
  },
  container: {
  height:"100%"
  }
});

export default TheLessonScreen;
/*
   
*/
