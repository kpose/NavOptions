import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ProductScreen extends Component {
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

