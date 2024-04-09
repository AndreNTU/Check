import * as React from 'react';
import LogInScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import Challenge18 from './Screens/Challenge18';
import About from './Screens/About';
import Logout from './Screens/Logout';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarStyle: { backgroundColor: 'whitesmoke' } }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="blueviolet" />
            ) : (
              <Ionicons name="person-outline" size={24} color="dimgrey" />
            )
        }}
name="Home" component={Challenge18} />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="questioncircle" size={24} color="blueviolet" />
            ) : (
              <AntDesign name="questioncircleo" size={24} color="dimgrey" />
            )
        }}
name="About" component={About} />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="door-open" size={24} color="blueviolet" />
            ) : (
              <FontAwesome5 name="door-closed" size={24} color="dimgrey" />
            )
        }}
        name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;