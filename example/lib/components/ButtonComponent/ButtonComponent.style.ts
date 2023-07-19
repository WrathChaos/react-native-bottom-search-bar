import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    right: 36,
    position: 'absolute',
  },
  buttonIconStyle: {
    top: 1,
    left: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 85,
    height: 35,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFC484',
  },
  buttonTextStyle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  iconImageStyle: {
    width: 15,
    height: 15,
    tintColor: '#fff',
  },
});
