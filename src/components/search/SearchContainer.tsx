/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Alert, Platform, View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {mainStyle} from '../../styles/MainStyle';

interface IProps {}
interface IState {}

class SearchContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: '',
      testDataFile: 'telephone test mots allo dzdz algerie'.toLowerCase(),
      showPositiveResultPanel: false,
      showSearchLoading: false,
      showNegatifResultPanel: false,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.confirmSearch = this.confirmSearch.bind(this);
  }
  updateSearch(searchValue: any) {
    this.setState(
      {
        search: searchValue,
        showSearchLoading: true,
      },
      () => {
        if (this.state.testDataFile.includes(this.state.search.toLowerCase())) {
          this.setState({
            showPositiveResultPanel: true,
            showSearchLoading: false,
          });
        } else {
          this.setState({
            showPositiveResultPanel: false,
          });
          setTimeout(() => {
            this.setState({
              showSearchLoading: false,
              showNegatifResultPanel: true,
            });
          }, 5000);
        }
      },
    );
  }
  confirmSearch() {
    Alert.alert(
      'Search title',
      'My Alert Search Msg is: ' + this.state.search,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  /* RENDERING */
  render() {
    const {search} = this.state;
    return (
      <View>
        <SearchBar
          showCancel={Platform.OS === 'ios'}
          showLoading={this.state.showSearchLoading}
          placeholder="Hawess 3la kolchi hna..."
          onChangeText={this.updateSearch}
          value={search}
          style={{backgroundColor: '#ffffff'}}
          containerStyle={styles.searchBar}
          placeholderTextColor={'#505050'}
          inputStyle={{backgroundColor: '#ffffff'}}
          inputContainerStyle={{backgroundColor: '#ffffff'}}
        />
        {this.state.showPositiveResultPanel && (
          <View>
            <Text>{this.state.search}</Text>
          </View>
        )}
        {this.state.showNegatifResultPanel && (
          <View>
            <Text>No result found! :(</Text>
          </View>
        )}
      </View>
    );
  }
}

export default SearchContainer;

// Styles
const styles = mainStyle;

interface IProps {}
interface IState {
  search: string;
  testDataFile: string;
  showPositiveResultPanel: boolean;
  showNegatifResultPanel: boolean;
  showSearchLoading: boolean;
}
