import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Registration, UserDetails, Users } from './paths';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTitleAlign:'center'
    }}
    >
    <Stack.Screen name="Registration" component={Registration} />
    
  </Stack.Navigator>
  )
}

export default StackNavigation

