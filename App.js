import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ProductScreen from './components/ProductScreen';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen 
  },
  About: {
    screen: AboutScreen
  },
  Product: {
    screen: ProductScreen
  }
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
