import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "../screens/MenuScreen";
import CompassTest from "../screens/CompassTest";
import ComingSoon from "../screens/ComingSoon";
import Login from "../screens/Login";
import Meeting from "../screens/Meeting";
import Report from "../screens/Report";
import PostConversation from "../screens/PostConversation";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        //customize all at once
      },
    }}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="MenuScreen"
      component={MenuScreen}
      options={{
        headerStyle: { backgroundColor: "#d3d3d3" },
        title: "Dashboard",
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ComingSoon"
      component={ComingSoon}
      options={{
        title: " ",
      }}
    />

    <Stack.Screen
      name="PostConversation"
      component={PostConversation}
      options={{
        title: "Feedback",
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Report"
      component={Report}
      options={{
        title: "Report User",
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Meeting"
      component={Meeting}
      options={{
        headerStyle: { backgroundColor: "#4c4c4c" },
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="CompassTest"
      component={CompassTest}
      options={{
        title: "Political Compass Test",
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
