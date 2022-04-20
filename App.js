import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
   <NavigationContainer>
    
     <Stack.Navigator>
         
     
     <Stack.Screen name="WELCOME" component={HomeScreen} ></Stack.Screen>
    
     <Stack.Screen name="location" component={WeatherScreen}></Stack.Screen>
      
       
     </Stack.Navigator>
   </NavigationContainer>
  )
}
