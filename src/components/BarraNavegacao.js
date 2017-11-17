import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
	componentWillMount(){

    GoogleSignin.hasPlayServices({ autoResolve: true });

    GoogleSignin.configure({
      iosClientId: '697699898278-e9o2lc36ljlh05pqn6qqcgmkl2pc4de7.apps.googleusercontent.com',
      webClientId: '697699898278-e9o2lc36ljlh05pqn6qqcgmkl2pc4de7.apps.googleusercontent.com'
    })
      .then(() => {
     // you can now call currentUserAsync()
    });
  

  } 
	
	render() {
		return (
		  <View style={styles.container}>
	        <View style={styles.barraTitulo}>
	     
		      <TouchableHighlight
		  	  onPress={() => {this.deslogar()}}
	 	      >
	 	  	  <Image source={btnVoltar} />
	 	      </ TouchableHighlight>
	 	    </View>
	 	  	
	 	    <View style={styles.tituloContainer}>
	 	  	  <Text style={styles.titulo}> {this.props.titulo}</Text>
	 	    </View>
	 	  </View>
	     
  		);
	}

	removerStorage() {
		AsyncStorage.removeItem('integra');
	}

	goTelaIncial() {
		Actions.replace('telaInicial', {});
	}

	deslogar() {
 	  GoogleSignin.signOut()
	     .then(() => {
	       console.log('out');
	       this.removerStorage();
	       this.goTelaIncial();
	     })
	     .catch((err) => {
	       console.log(err);
	     });
	}
}

const styles = StyleSheet.create({
	container: {
		
		height: 60,
		backgroundColor: '#00bfff',
		padding: 10,
		flexDirection: 'row',
	},

	barraTitulo: {
		
		justifyContent: 'flex-start',
		

	},

	tituloContainer: {
		flex: 2,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		
	},

	titulo: {
		
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		
	},


});
