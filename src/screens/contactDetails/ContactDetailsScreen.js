import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'

import HeaderStack from '../../commons/HeaderStack'

export default class ContactDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Provide Message',
    drawerLabel: 'Home',
    ...HeaderStack(navigation.goBack),
  })

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>Provide Message</Text>
        <Button
          raised
          fontFamily="montserrat"
          onPress={() => console.log('press button')}
          title="continue"
          onPress={() => this.props.navigation.navigate('Payment')}
        />
      </View>
    )
  }
}
