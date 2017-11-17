import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import BarraNavegacao from './BarraNavegacao';

const a59b83165247c522cd8c99fe6 = require('../imgs/LogoCrereSer.jpg');

export default class TelaUsuario extends Component<{}> {
	

	constructor(props) {
		super(props);
		this.state = { loaded: false};
		
		AsyncStorage.getItem('integra')
			.then((integra) => {
				var integraJSON = JSON.parse(integra);
				
				this.requisicaoMyProfile(integraJSON.data.token);
			}).catch((err) => {
				console.log(err);
			});

	}

	requisicaoProjetos(token) {
    //requisição para ver todos os projetos
    const AuthStr = 'Bearer '.concat(token);
    axios.get('http://ec2-54-207-86-56.sa-east-1.compute.amazonaws.com:8080/api/project', { headers: { Authorization: AuthStr } })
      .then(response => {         
            console.log(response.data);
            this.setState({ projetos: response.data });
            this.getMyProject(this.state.profile,this.state.projetos);

            this.setState({loaded: true});
          })
          .catch((error) => {
            console.log('error ao recuperar projetos ' + error);
          });
    }

  	requisicaoMyProfile(token){
    //requisição para ver todos os projetos
    const AuthStr = 'Bearer '.concat(token);
    axios.get('http://ec2-54-207-86-56.sa-east-1.compute.amazonaws.com:8080/api/profile/my', { headers: { Authorization: AuthStr } })
      .then(response => {         
            console.log(response.data);
            this.setState({ profile: response.data });
            this.requisicaoProjetos(token);
            AsyncStorage.setItem('profile',JSON.stringify(response.data));
            AsyncStorage.getItem('profile')
              .then((profile) => {
                console.log(profile);
              }).catch((err) => {

              })
          })
          .catch((error) => {
            console.log('error ao recuperar profile ' + error);
          });  
    }

    getMyProject( profile, arrayJson){

    var meusProjetos = [];
    var quant = 0;
    for (var i = 0; i < arrayJson.length; i++) {
      for (var j = 0; j < arrayJson[i].members.length; j++) {
     
        if (profile._id === arrayJson[i].members[j]._id) {
          meusProjetos[quant] = arrayJson[i];
          quant++;

        }

      }
    }

    console.log(meusProjetos);
    this.setState({meusProjetos: meusProjetos})
    return meusProjetos;
  }

  avancar() {
    Actions.fichaEnfermagemIdoso();
  }



	render() {
    if (this.state.loaded) {
      return (
        <View style={styles.principal}>

          <View >
            <BarraNavegacao /> 
          </View>

          <View style={styles.container}>
            <View style={styles.imagem}>
              
                {this.state.meusProjetos.map((projeto) => { 
                return ( 
                <TouchableOpacity
                key={projeto._id} 
                onPress={() => {this.avancar()}}
                >
                <Image
                key={projeto._id} 
                style={styles.logos}
                source={a59b83165247c522cd8c99fe6}
                />
                </TouchableOpacity>
                );
                })}
             
            </View>
          </View>

        </View>
        );
    } else {

		  return (
			   <View style={styles.principal}>
           <View style={styles.BarraNavegacao}>
			       <BarraNavegacao />
           </View>  
            <View style={styles.container}>
			       {this.state.loaded ? <Text >Carregado</Text> : <Text >Carregando</Text>}
			      </View>
         </View>
		);
  }
	}

}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  BarraNavegacao: {
    flex: 1,
  },

  loading: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  imagem: {
    

  },
 
  logos: {
    borderColor: 'blue',
    borderWidth: 10,
    backgroundColor: 'red',
    width: 100, 
    height: 100,
    margin: 10,

  }
})