import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text
} from "react-native";
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from "../Components/HeaderButton"

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


TheLessonScreen.navigationOptions= navData =>{
    const title = navData.navigation.getParam("data")
 
    return{ 
        headerTitle:title.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
     <Item title='Download'
     iconName='download' 
     onPress={()=>{}}
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
<ScrollView style={styles.container}>
{DATA.map(item => 
     {return<Image style={styles.img}
    source={{ uri:'https://i.ibb.co/NSHHwQr/lesson1.jpg'}} />
    }

)}
</ScrollView>
*/
