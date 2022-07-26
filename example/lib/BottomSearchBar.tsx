import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import SearchBox from './components/SearchBox/SearchBox';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import styles, {_shadowStyle, glueContainer} from './BottomSearchBar.style';
import HomeIMG from './local-assets/home.png';

const BottomSearchBar = props => {
  const {
    shadowColor,
    shadowStyle,
    disableButton,
    disableHomeButton,
    buttonComponent,
    homeButtonStyle,
    homeButtonIconComponent,
    homeIconImageStyle,
    onHomePress,
  } = props;

  const HomeButton = () => (
    <TouchableOpacity onPress={onHomePress}>
      <View style={[styles.homeButtonContainer, homeButtonStyle]}>
        {homeButtonIconComponent || (
          <Image
            resizeMode="contain"
            source={HomeIMG}
            style={[styles.iconImageStyle, homeIconImageStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          glueContainer(props),
          shadowStyle || _shadowStyle(shadowColor),
        ]}>
        <View style={styles.glue}>
          {!disableHomeButton && <HomeButton {...props} />}
          <SearchBox {...props} />
          {(!disableButton && buttonComponent) || (
            <ButtonComponent {...props} />
          )}
        </View>
      </View>
    </View>
  );
};

export default BottomSearchBar;
