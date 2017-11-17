import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

export default class TelaInicial extends Component<{}> {
    
  constructor(props) {
    super(props);
    AsyncStorage.getItem('integra')
      .then((integra) => {
        if (integra != null) {
          this.avanca();  
        } 
      }).catch((err) => {
          console.log(err);
      });
    }

  componentWillMount() {

    GoogleSignin.hasPlayServices({ autoResolve: true });

    GoogleSignin.configure({
      iosClientId: '697699898278-e9o2lc36ljlh05pqn6qqcgmkl2pc4de7.apps.googleusercontent.com',
      webClientId: '697699898278-e9o2lc36ljlh05pqn6qqcgmkl2pc4de7.apps.googleusercontent.com'
    })
      .then(() => {
     // you can now call currentUserAsync()
    });
  

  }  

  componentDieMount() {
    GoogleSignin.currentUserAsync().then((user) => {
      console.log('USER', user);
      this.setState({ user: user });
    }).done();
  }

  
  requisicaoIntegra(idToken) {
      console.log('teste');
       axios.get('http://ec2-54-207-86-56.sa-east-1.compute.amazonaws.com:8080/auth?idToken=' + idToken)
          .then((integra) => { 
            console.log(integra); 
            AsyncStorage.setItem('integra', JSON.stringify(integra));
      	    this.avanca();
          }).catch((err) => {
            alert('Não existe nenhum e-mail com esse nome cadastrado');
            this.deslogar();
            console.log(err);
          });

  }

  avanca() {
	 Actions.replace('telaUsuario', { integra: '' });
  }

  deslogar() {
    GoogleSignin.signOut()
      .then(() => {
        console.log('out');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logar(){
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.requisicaoIntegra(user.idToken);
        this.setState({ user: user });
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
        this.deslogar();
      })
      .done();
  }

  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.login}>
          <Button 
            title='Logar'
            onPress = {() =>{ this.logar() }}
          />
        </View>  
      </View>
    );
  }

}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#00bfff',
  },

  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

