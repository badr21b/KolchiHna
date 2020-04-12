/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {mainStyle} from "../../styles/MainStyle";

interface IProps {}
interface IState {}

class SearchContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.confirmSearch = this.confirmSearch.bind(this);
  }
  updateSearch(searchValue: any) {
    this.setState({
      search: searchValue,
    });
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
      <SearchBar
        placeholder="Hawess 3la kolchi hna..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={styles.searchBar}
        placeholderTextColor={'#505050'}
        inputStyle={{backgroundColor: '#ffffff'}}
        inputContainerStyle={{backgroundColor: '#ffffff'}}
      />
    );
  }
}

export default SearchContainer;

// Styles
const styles = mainStyle;

interface IProps {}
interface IState {
  search: string;
}
