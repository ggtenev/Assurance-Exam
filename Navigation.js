import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screeens/Home'
import One from './screeens/One'
import Result from './screeens/Result'
import Categories from './screeens/Categories'
import Colors from './constants/Colors'

const Stack = createStackNavigator();

const defaultNavOptions = {
  // headerTitleAlign: "left",
  height: 70,

  headerStyle: {
    height: 70,
    backgroundColor: Colors.main,
    shadowRadius: 0,

    elevation: 0,
  },
  headerTitleStyle: {
    textAlign: "center",
    fontSize: 27,
  },

  headerTintColor: 'black',
};

const Nav = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={defaultNavOptions} >
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="One" component={One} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Nav