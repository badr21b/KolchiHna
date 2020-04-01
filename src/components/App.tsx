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
import {createStackNavigator} from '@react-navigation/stack';

import MainContainer from './MainContainer';
import SecondScreen from './SecondScreen';
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
    function HomeScreen({navigation}: any) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Main "
            onPress={() => navigation.navigate('Main')}
          />

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Second "
              onPress={() => navigation.navigate('Second')}
            />
          </View>
        </View>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
          <Stack.Screen name="Main">
            {(props) => <MainContainer {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
