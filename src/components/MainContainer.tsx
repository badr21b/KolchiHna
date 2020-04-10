import React, {Component} from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import HorizontalList from './scrollable/HorizontalList';
import {mainStyle} from '../styles/MainStyle';

export default class MainContainer extends Component<IProps, IState> {
  render() {
    const {navigate} = this.props.navigation;
    const IconClearButton = (props: any) => (
      <Button

        type="clear"
        {...props}
        style={styles.avatarStyle}
        icon={
          <Icon
            reverse
            name="ios-american-football"
            type="ionicon"
            color="gray"
            size={12}
            style={styles.IconClearButtonStyle}
          />
        }
      />
    );
    return (
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={'#4d6d7a'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerStyle}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.logoStyle}>KolchiHna</Text>
              <IconClearButton title="Yea" onPress={() => navigate('Details')}/>
            </View>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
              <Button title="Go to Details" onPress={() => navigate('Details')} />
            </View>
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
