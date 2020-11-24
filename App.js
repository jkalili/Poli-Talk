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
      <Stack.Navigator initialRouteName = "Login" screenOptions = {{
        headerTitleStyle: {
          //customize all at once
        }
      }}>
        <Stack.Screen
          name="Login" 
          component={Login}
          options= {{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="MenuScreen" 
          component={MenuScreen}
          options= {{ 
            headerStyle: { backgroundColor: '#d3d3d3'},
            title : "Dashboard"
          }}
        />
        <Stack.Screen  
          name="ComingSoon" 
          component={ComingSoon}
          options= {{ 
            title : "Coming Soon",
          }}
        />
        <Stack.Screen  
          name="PostConversation" 
          component={PostConversation}
          options= {{ 
            title : "Feedback",
          }}
        />
        <Stack.Screen  
          name="Meeting" 
          component={Meeting}
          options= {{ 
            headerStyle: { backgroundColor: "#4c4c4c"}
          }}
        />
        <Stack.Screen  
          name="CompassTest" 
          component={CompassTest}
          options= {{ 
            title : "Political Compass Test",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
