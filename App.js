import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './screens/home'
import Generate from './screens/generate'
import ScanList from './screens/scan-list'
import Scan from './screens/scan'

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = 'Home'
            component = {Home}
          />

          <Stack.Screen
            name = 'Generate'
            component = {Generate}
          />

          <Stack.Screen
            name = 'ScanList'
            component = {ScanList}
          />

          <Stack.Screen
            name = 'Scan'
            component = {Scan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}