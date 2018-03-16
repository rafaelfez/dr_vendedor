import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Chat extends Component {
  static navigationOptions = {
    title: 'Chat',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.suporte}>
          <Text style={styles.atendente}>Rafael Felipe</Text>
        </View>
        <View style={styles.trocaDeMensagens}>

        </View>
        <View style={styles.enviarMensagem}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enviar Mensagem"
          />
          <TouchableOpacity style={styles.icon} onPress={() => {} } >
            <Icon name="send" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
