import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  suporte: {
    backgroundColor: '#30336b',
    flex: 1,
    justifyContent: 'flex-start',
    justifyContent: 'center',
  },

  atendente: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
  },

  trocaDeMensagens: {
    backgroundColor: '#fff',
    flex: 10,
  },

  enviarMensagem: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 5,
  },

  input: {
    flex: 15,
    backgroundColor: '#ddd',
    borderRadius: 3,
  },
  
  icon: {
    flex: 1,
    paddingLeft: 10,
  },

});

export default styles;
