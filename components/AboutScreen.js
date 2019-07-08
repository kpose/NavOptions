//Aboutscreen.js
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Aboutscreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/about-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />      
    ),
  };
  render() {
    return (
      <View style = {styles.container}>
        <Text> This is the About Screen. </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width:24,
      height:24,
  }
  });
