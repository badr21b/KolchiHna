import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import {mainStyle} from '../../styles/MainStyle';

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.horizontalScrollContainer}>
            <View style={styles.horizontalScrollTextContainer}>
              <Text style={styles.horizontalScrollTextRight}>
                {' '}
                Profile Screen{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = mainStyle;
