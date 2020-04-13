/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Icon} from 'react-native-elements';

import SecondScreen from './sceen/SecondScreen';
import DetailsScreen from './sceen/DetailsScreen';
import MainContainer from './MainContainer';
import ProfileScreen from './sceen/ProfileScreen';
import {mainStyle} from '../styles/MainStyle';

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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName = 'ios-american-football';
              let iconColor = 'gray';
              if (route.name === 'Main') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                iconColor = focused ? '#FF6001' : 'gray';
              } else if (route.name === 'Second') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                iconColor = focused ? '#FF6001' : 'gray';
              }

              // You can return any component that you like here!
              return (
                <Icon
                  reverse
                  name={iconName}
                  type="ionicon"
                  color={iconColor}
                  size={12}
                  style={mainStyle.IconClearButtonStyle}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF6001',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Main" component={MainContainer} />
          <Tab.Screen name="Second" component={SecondScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default BottomNavigator;
