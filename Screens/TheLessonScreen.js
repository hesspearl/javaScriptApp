import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  BackHandler
} from "react-native";
import { PublisherBanner,AdMobInterstitial } from "expo-ads-admob";

const TheLessonScreen = props => {
  const DATA = props.navigation.getParam("data");

  BackHandler.addEventListener("hardwareBackPress",async()=>{
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/5224354917'
     ); //  'ca-app-pub-6131682069999134/9992879592'
        
    try{
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      props.navigation.goBack()
    }
    catch(e){
      console.log(e);
    }
  })
  return (
    <FlatList
      data={DATA.body}
      style={styles.container}
      renderItem={({ item }) => {
        return (
          <View>
            
            <Image
              style={styles.img}
              resizeMode="contain"
              source={{ uri: item }}
            />
           
          </View>
        );
      }}
      keyExtractor={item => {}}
    />
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

TheLessonScreen.navigationOptions = navData => {
  const data = navData.navigation.getParam("data");

  return {
    headerTitle: data.title,
    headerLeft:null
  };
};

const dimensions = Dimensions.get("screen");
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  img: {
    width: imageWidth,
    height: imageHeight,
    marginTop: -100,
   marginBottom: -100
  },
  container: {
    flex: 1
  }
});

export default TheLessonScreen;
/*
   
*/
