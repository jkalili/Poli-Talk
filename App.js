import React from "react";
import { View } from "react-native";


import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import ComingSoon from "./app/screens/ComingSoon";
import CompassTest from "./app/screens/CompassTest";
import Login from "./app/screens/Login";
import Meeting from "./app/screens/Meeting";
import MenuScreen from "./app/screens/MenuScreen"
import PostConversation from "./app/screens/PostConversation";


const Stack = createStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen  name="Login" component={Login}/>
        <Stack.Screen  name="MenuScreen" component={MenuScreen}/>
        <Stack.Screen  name="ComingSoon" component={ComingSoon}/>
        <Stack.Screen  name="PostConversation" component={PostConversation}/>
        <Stack.Screen  name="Meeting" component={Meeting}/>
        <Stack.Screen  name="CompassTest" component={CompassTest}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
