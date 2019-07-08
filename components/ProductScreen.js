import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class ProductScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/contact-icon.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />      
        ),
      };
    render() {
        return (
            <View style = {styles.container}>
                <Text> Welcome to Product's page </Text>
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

