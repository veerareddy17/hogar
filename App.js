import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import CircularSlider from './CircularSlider';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import ManualScreen from './pages/ManualComponent'
import OnScreen from './pages/OnComponent'

const Tab = createBottomTabNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const topTab = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <topTab.Navigator>
     <topTab.Screen name="Manual" component={ManualScreen} />
    </topTab.Navigator>
  );
} 
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Manual'
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="Manual"
          component={HomeStack}
         />
        <Tab.Screen
          name="On"
          component={OnScreen}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
