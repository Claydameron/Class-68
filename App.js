import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/search';
import Transaction from './screens/transac';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render() {
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Search: {screen:Search},
  Transac: {screen:Transaction}
})

const AppContainer = createAppContainer(TabNavigator)
