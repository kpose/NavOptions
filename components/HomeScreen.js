//With ES7 syntax, you could type 'rcn" to bootstrap a react native component skeleton
import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Welcome To Home Screen </Text>
                <Button
                    title = "Go to About Page"
                    onPress={() => this.props.navigation.navigate('About')}
                    />
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
