import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import HorizontalList from './scrollable/HorizontalList';
import {mainStyle} from '../styles/MainStyle';

export default class MainContainer extends Component<IProps, IState> {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerStyle}>
            <Image
              source={require('../images/logo/logo.png')}
              style={styles.logoStyle}
            />
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation('Details')}
            />
          </View>

          <View style={styles.horizontalScrollContainer}>
            <View style={styles.horizontalScrollTextContainer}>
              <Text style={styles.horizontalScrollTextLeft}>TATIL TMALARI</Text>
              <Text style={styles.horizontalScrollTextRight}>Tumu > </Text>
            </View>

            <HorizontalList />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = mainStyle;

interface IProps {
  navigation: any;
}
interface IState {}
