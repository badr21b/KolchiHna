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
} from 'react-native';
//import { SearchBar } from 'react-native-elements';

import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainContainer from './MainContainer';
import DetailsScreen from './DetailsScreen';
import {mainStyle} from '../styles/MainStyle';

interface IProps {}
interface IState {}

const Stack = createStackNavigator();
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  /* RENDERING */
  render() {
    /* Parameters */
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <MainContainer {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
