import {createStackNavigator} from  'react-navigation-stack'
import { createAppContainer} from 'react-navigation'

import MainScreen from "../Screens/LessonsScreen"
import TheLesson from "../Screens/TheLessonScreen"


const LessonsNav= createStackNavigator ({
    MainScreen:MainScreen,
    Lesson:TheLesson

})

export default createAppContainer(LessonsNav)