//Aboutscreen.js
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Aboutscreen extends Component {
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
  });
