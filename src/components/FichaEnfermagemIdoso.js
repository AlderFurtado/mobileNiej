import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TextInput,
  Text
} from 'react-native';
// import axios from 'axios';
// import { Actions } from 'react-native-router-flux';
// import { GoogleSignin } from 'react-native-google-signin';

export default class FichaEnfermagemIdoso extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {nomeCompleto: null, apelido: null, nSus: null, rg: null,
						cpf: null, dataNascimento: null, idade: null}
	}

	render(){
		return(
			<View>
			<Text style={styles.titulo}>Ficha enfermagem</Text>
			 <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Nome Completo'}
		        value={this.state.nomeCompleto}
		     />
			 <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Apelido ou nome social'}
		        value={this.state.apelido}
		     />

			 <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Nº do cartão do SUS'}
		        value={this.state.nSus}
		     />

		     
			 <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'RG'}
		        value={this.state.rg}
		     />

		     <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'CPF'}
		        value={this.state.cpf}
		     />

		      <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Data de nascimento'}
		        keyboardType={'numeric'}
		        value={this.state.dataNascimento}
		     />
		     <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Idade'}
		        keyboardType={'numeric'}
		        value={this.state.idade}
		     />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	titulo: {
		fontSize: 20,
		color: 'black',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
	}

})
