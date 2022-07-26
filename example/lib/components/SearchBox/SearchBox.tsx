import React from 'react';
import {TextInput, Image, TouchableOpacity, Text, View} from 'react-native';
import styles, {searchBoxContainer} from './SearchBox.style';
import SearchIMG from '../../local-assets/search.png';

interface SearchBoxProps {
  searchBoxText?: string;
  iconComponent?: React.ReactNode | React.ReactNode[];
  onSearchBoxPress: () => void;
  disableTextInput?: boolean;
  searchBoxWidth?: string | number;
  searchBoxBorderRadius?: number;
  searchBoxBackgroundColor?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchBoxText = 'What are you looking for?',
  iconComponent,
  onSearchBoxPress,
  disableTextInput = false,
  searchBoxWidth = '55%',
  searchBoxBorderRadius = 20,
  searchBoxBackgroundColor = '#F5F7FA',
  ...rest
}) => {
  const renderTextInput = () => {
    if (disableTextInput) {
      return <Text style={styles.searchBoxTextStyle}>{searchBoxText}</Text>;
    }
    return (
      <TextInput
        placeholder={searchBoxText}
        style={styles.searchBoxTextStyle}
        {...rest}
      />
    );
  };

  return (
    <TouchableOpacity
      style={searchBoxContainer(
        searchBoxWidth,
        searchBoxBorderRadius,
        searchBoxBackgroundColor,
      )}
      onPress={onSearchBoxPress}>
      <View style={styles.searchBoxGlue}>
        {iconComponent || (
          <Image
            resizeMode="contain"
            source={SearchIMG}
            style={styles.searchImageStyle}
          />
        )}
        {renderTextInput()}
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;
