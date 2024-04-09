import * as React from 'react';
import { View, Text } from 'react-native';
import LogInScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import Challenge18 from './Screens/Challenge18';
import About from './Screens/About';
import Logout from './Screens/Logout';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Challenge18} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;