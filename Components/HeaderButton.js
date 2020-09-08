import React from 'react'
import {Platform} from 'react-native'
import{HeaderButton}from 'react-navigation-header-buttons'
import {AntDesign} from '@expo/vector-icons'


const CustomHeadErButton = props=>{
    return<HeaderButton {... props} 
     IconComponent={AntDesign}
     iconSize={23}
     

     />
}

export default CustomHeadErButton;