import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import SearchBox from './components/SearchBox/SearchBox';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import styles, {_shadowStyle, glueContainer} from './BottomSearchBar.style';

const BottomSearchBar = (props: any) => {
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

  const renderHomeButton = () => (
    <TouchableOpacity onPress={onHomePress}>
      <View style={[styles.homeButtonContainer, homeButtonStyle]}>
        {homeButtonIconComponent || (
          <Image
            resizeMode="contain"
            source={require('./local-assets/home.png')}
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
          {!disableHomeButton && renderHomeButton()}
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
