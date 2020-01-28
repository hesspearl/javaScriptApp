import {createStackNavigator} from  'react-navigation-stack'
import { createAppContainer} from 'react-navigation'

import MainScreen from "../Screens/LessonsScreen"
import TheLesson from "../Screens/TheLessonScreen"
import Colors from "../Colors"

const LessonsNav= createStackNavigator ({
    MainScreen:{
        screen: MainScreen,
    navigationOptions:{
        headerTitle:"JavaScript"
    }},
    Lesson:TheLesson

},
{defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:Colors.javascript
    }
}})

export default createAppContainer(LessonsNav)