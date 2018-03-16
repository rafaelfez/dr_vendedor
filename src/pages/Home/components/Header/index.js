import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../../img/Logo_dr-01-300x79.png')}
        />
        <TouchableOpacity style={styles.icon} onPress={ BackHandler.exitApp } >
          <Icon name="sign-in" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}
