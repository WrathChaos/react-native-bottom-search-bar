<img alt="React Native Bottom Search Bar" src="https://github.com/WrathChaos/react-native-bottom-search-bar/blob/master/assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bottom-search-bar)

[![Elegant & Cool also fully customizable bottom search bar for React Native](https://img.shields.io/badge/-Elegant%20%26%20Cool%20also%20fully%20customizable%20bottom%20search%20bar%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-bottom-search-bar)

[![npm version](https://img.shields.io/npm/v/react-native-bottom-search-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bottom-search-bar)
[![npm](https://img.shields.io/npm/dt/react-native-bottom-search-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bottom-search-bar)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Bottom Search Bar" src="assets/Screenshots/example.gif" width="49.7%"/>
</p>

<p align="center">
<img alt="React Native Bottom Search Bar" src="assets/Screenshots/example.png" width="650" height="250"/>
<img alt="React Native Bottom Search Bar" src="assets/Screenshots/example3.png" width="400" height="170"/>
<img alt="React Native Bottom Search Bar" src="assets/Screenshots/example2.png" width="400" height="170"/>
</p>

## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-bottom-search-bar
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"@freakycoder/react-native-helpers": ">= 1.0.2",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

```ruby
<BottomSearchBar />
```

## Advanced Usage

```ruby
<BottomSearchBar
    height={125}
    iPhoneXHeigh={150}
    disableHomeButton
    buttonBackgroundColor="#050191"
    buttonOnPress={() => {}}
    onChangeText={(text)=> {console.log(text)}}
    homeButtonIconComponent={
        <MyIcon>
            Custom Component instead of default Home Button Icon
        </MyIcon>
    }
/>
```

# Configuration - Props

## Main Props

| Property                |   Type    | Default  | Description                                                   |
| ----------------------- | :-------: | :------: | ------------------------------------------------------------- |
| onChangeText            | function  | default  | get the text input's change function                          |
| disableTextInput        |  boolean  |  false   | disable the text input and instead you can use it as a button |
| backgroundColor         |   color   |  white   | change the main component's background color                  |
| buttonText              |  string   | Hotspot  | use this to change the button's text                          |
| onButtonPress           | function  | function | use this to set your onPress function to the button           |
| buttonIconComponent     | component |   Icon   | set your own icon component for the button                    |
| disableButton           |  boolean  |  false   | disable the button itself (on the right one)                  |
| disableButtonIcon       |  boolean  |  false   | disable the button's icon component                           |
| disableHomeButton       |  boolean  |  false   | disable the home button's itself                              |
| onHomePress             | function  | function | set your own onPress function for home button                 |
| homeButtonIconComponent | component |   Icon   | set your own icon component instead of the default one        |

## SearchBox Props

| Property                 |   Type    |          Default          | Description                                           |
| ------------------------ | :-------: | :-----------------------: | ----------------------------------------------------- |
| onChangeText             | function  |         function          | set your own logic for changing text                  |
| searchBoxText            |  string   | What are you looking for? | set the search box's text                             |
| searchBoxOnPress         | function  |         function          | set your own logic when tapping the search box itself |
| searchBoxWidth           |  number   |            95%            | change the search box's width                         |
| searchBoxBorderRadius    |  number   |             8             | change the search box's border radius                 |
| searchBoxBackgroundColor |   color   |          #f5f5f5          | change the search box's background color              |
| iconComponent            | component |           Icon            | set your own icon component instead of Icon           |
| disableTextInput         |  boolean  |           false           | disable or enable the text input itself               |

## Credits

I get the inspiration from Joo Find App. This is the exact bottom search bar from their concept design. Thank you for this inspiration :)
Here is the uplabs link:[JooFind App Concept](https://www.uplabs.com/posts/joo-find))  
Thank you for this awesome concept work [FireArt Studio ](https://www.uplabs.com/fireart))

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bottom Search Bar Library is available under the MIT license. See the LICENSE file for more info.
