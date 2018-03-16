import React, { Component } from 'react';

import { View, WebView } from 'react-native';

import styles from './styles';

export default class Video extends Component {
  static navigationOptions = {
    title: 'Saiba mais',
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/STpyGGNqWXM?rel=0'}}
        />
      </View>
    );
  }
}
