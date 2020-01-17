import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text
} from "react-native";
import { ScrollView } from "react-native";

const TheLessonScreen = props => {
  const DATA = props.navigation.getParam("data");

  return (
    <FlatList
      data={DATA}
   
      style={styles.container}
      renderItem={({ item }) => {
        console.log(item);
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
