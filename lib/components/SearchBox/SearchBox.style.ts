import {StyleSheet} from 'react-native';

export function searchBoxContainer(
  searchBoxWidth,
  searchBoxBorderRadius,
  searchBoxBackgroundColor,
) {
  return {
    left: 8,
    padding: 6,
    width: searchBoxWidth,
    borderRadius: searchBoxBorderRadius,
    backgroundColor: searchBoxBackgroundColor,
  };
}

export default StyleSheet.create({
  searchBoxGlue: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 3,
    height: 25,
  },
  searchBoxTextStyle: {
    left: 5,
    width: '85%',
    fontSize: 12,
    color: '#90A2BD',
  },
  searchImageStyle: {
    width: 15,
    height: 15,
    tintColor: '#aaa',
  },
});
