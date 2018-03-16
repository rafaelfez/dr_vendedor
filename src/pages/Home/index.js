import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import Header from './components/Header';

export default class Home extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  saibaMais = () => {
    this.props.navigation.navigate('Video');
  }

  chat = () => {
    this.props.navigation.navigate('Chat');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descricao}>REVOLUCIONANDO O SISTEMA TRADICIONAL DE TREINAMENTOS PARA A FORÇA DE VENDAS ATUAL</Text>
        <Image
          style={styles.image}
          source={require('../../img/Mascote2.png')}
        />
        <View style={styles.funcoes}>
          <View style={styles.funcoesButton}>
            <TouchableOpacity
              onPress={this.saibaMais}
            >
              <Text style={styles.funcoesButtonText}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.funcoesButton}>
            <TouchableOpacity
              onPress={this.chat}
            >
              <Text style={styles.funcoesButtonText}>Converse Conosco</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
