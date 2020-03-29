/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import {fetchData} from '../fetchData';

interface IProps {}

const HorizontalList: React.FC<IProps> = () => {
  //console.log(fetchData);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.componentContainer}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}
          style={styles.horizontalScrollListContainer}
          horizontal={true}>
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
          <View style={styles.horizontalScrollListItem} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  horizontalScrollListContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e2e2e2',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  horizontalScrollListItem: {
    margin: 6,
    width: 100,
    height: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#FFFFFF',
  },
});

export default HorizontalList;
