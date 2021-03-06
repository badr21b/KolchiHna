import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const mainStyle = StyleSheet.create({
  logoStyle: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    // alignContent: 'center',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  horizontalScrollContainer: {
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 200,
  },
  horizontalScrollTextContainer: {
    // height: 40,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  horizontalScrollTextRight: {
    marginRight: 24,
    height: 32,
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'right',
  },
  horizontalScrollTextLeft: {
    marginLeft: 24,
    width: 100,
    height: 32,
    flex: 1,
    textAlign: 'left',
    // row_justifyContent: 'center',
    // justifyContent: 'space-between',
  },

  horizontalScrollListContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#d8d8d8',
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

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  headerStyle: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: 64,
    fontWeight: '600',
  },
});
