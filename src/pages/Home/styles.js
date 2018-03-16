import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#30336b'
  },
  image: {
    marginTop: 50,
    height: 250,
    width: 150,
  },
  descricao: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  funcoes: {
    flexDirection: 'row',
  },
  funcoesButton: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  funcoesButtonText: {
    color: '#30336b',
  },
});

export default styles;
