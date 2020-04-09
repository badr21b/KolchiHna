/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {
  // ImageBackground,
  // Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
//import { SearchBar } from 'react-native-elements';

import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SecondScreen from './sceen/SecondScreen';
import DetailsScreen from './sceen/DetailsScreen';
import MainContainer from './MainContainer';

interface IProps {}
interface IState {}

const Tab = createBottomTabNavigator();

class BottomNavigator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  /* RENDERING */
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Second" component={SecondScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Main" component={MainContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default BottomNavigator;
