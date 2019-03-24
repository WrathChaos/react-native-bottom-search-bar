<img alt="React Native Bottom Search Bar" src="https://github.com/WrathChaos/react-native-bottom-search-bar/blob/master/assets/Screenshots/logo.png" width="1050"/>

Elegant & Cool also fully customizable bottom search bar for React Native.

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-bottom-search-bar.svg)](https://www.npmjs.com/package/react-native-bottom-search-bar)
[![npm](https://img.shields.io/npm/dt/react-native-bottom-search-bar.svg)](https://www.npmjs.org/package/react-native-bottom-search-bar)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Bottom Search Bar" src="https://github.com/WrathChaos/react-native-bottom-search-bar/blob/master/assets/Screenshots/inspiration.png" width="49.7%"/>
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
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x",
"react-native-iphone-x-helper": ">= x.x.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

```ruby
<BottomSearchBar />
```


## Advanced Usage

```ruby
<BottomSearchBar 


/>
```

### Configuration - Props


| Property              |   Type    |  Default   | Description                                                                  |
| --------------------- | :-------: | :--------: | ---------------------------------------------------------------------------- |
| styles                |  styles   |   styles   | use this to change main style of the header                                  |
| height                |  number   |     50     | use this to change the header's height                                       |
| width                 |  number   |    100%    | use this to change the header's width                                        |
| statusBarHidden       |  boolean  |   false    | use this to let Header Component itself re-arrange depends on the status bar |
| hitSlops              |  object   | object: 30 | use this to change the header's left and right components' hitSlots          |
| bottomStick           |  boolean  |   false    | stick the header to bottom side                                              |
| headerTitle           |  string   |     ""     | use this to set header's title                                               |
| backgroundColor       |   color   |  #ffffff   | use this to change the header's background color                             |
| leftComponent         | component |    Icon    | set the left component                                                       |
| leftComponentStyle    |   style   |   style    | set the left component's style                                               |
| leftComponentDisable  |  boolean  |   false    | disable the left component                                                   |
| leftComponentOnPress  | function  |    null    | set the left component's onPress function                                    |
| rightComponent        | component |    Icon    | set the right component                                                      |
| rightComponentStyle   |   style   |   style    | set the right component's style                                              |
| rightComponentDisable |  boolean  |   false    | disable the right component                                                  |
| rightComponentOnPress | function  |    null    | set the right component's onPress function                                   |
| centerComponent       | component |    Icon    | set the center component                                                     |
| centerComponentStyle  |   style   |   style    | set the center component's style                                             |

## Credits
I get the inspiration from Joo Find App. This is the exact bottom search bar from their concept design. Thank you for this inspiration :)
Here is the uplabs link:[JooFind App Concept]( https://www.uplabs.com/posts/joo-find))  
Thank you for this awesome concept work [FireArt Studio ](https://www.uplabs.com/fireart)) 

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bottom Search Bar Library is available under the MIT license. See the LICENSE file for more info.
