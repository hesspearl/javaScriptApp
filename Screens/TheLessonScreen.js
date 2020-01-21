import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from "../Components/HeaderButton"
import RNFetchBlob from 'rn-fetch-blob'


const TheLessonScreen = props => {
  const DATA = props.navigation.getParam("data");

  

  return (
    <FlatList
      data={DATA.body}
   
      style={styles.container}
      renderItem={({ item }) => {

        return (
       
          <Image style={styles.img}
          resizeMode="contain"
             source={{uri:item}} />
 
        );
      }}
      keyExtractor={item => {}}
    />
  );
};

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
    }*/
  })
  // Something went wrong:
  .catch((errorMessage, statusCode) => {
    console.log("error"+errorMessage)
  })
}



TheLessonScreen.navigationOptions= navData =>{
    const data = navData.navigation.getParam("data")
 
    return{ 
        headerTitle:data.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
     <Item title='Download'
     iconName='download' 
     onPress={()=>{
       Alert.alert("تنزيل الدرس",
       "هل تريد تحميل ملف  الدرس بصيغة pdf؟",
       [{text:"لا" , 
       style:"cancel"},
       {text:"تحميل"
       ,onPress:()=>downloadPDF(data.body)
       },
       ])
     }}
     />
   </HeaderButtons>}
  }

const dimensions = Dimensions.get("screen");
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  img: {
    width: imageWidth,
    height:imageHeight,
    marginTop:-100,
    marginBottom:-100
 
  },
  container:{
      flex: 1,
  }
  
});


export default TheLessonScreen;
/*
   
*/
