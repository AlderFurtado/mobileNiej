import React, { Component } from 'react';
import {
	FlatList,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	NetInfo,
} from 'react-native';
import axios from 'axios';
import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyD_OK7miEyTREmzv-ejTMX_8ztN3hz0tCk",
    authDomain: "meu-projeto-incrivel-7f142.firebaseapp.com",
    databaseURL: "https://meu-projeto-incrivel-7f142.firebaseio.com",
    projectId: "meu-projeto-incrivel-7f142",
    storageBucket: "meu-projeto-incrivel-7f142.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class PainelPaciente extends Component<{}> {
	
	salvarUser() {
		NetInfo.isConnected.fetch().then(isConnected => {
		  console.log('First, is ' + (isConnected ? 'online' : 'offline'));
		});
		function handleFirstConnectivityChange(isConnected) {
		  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
		  NetInfo.isConnected.removeEventListener(
		    'change',
		    handleFirstConnectivityChange
		  );
		}
		NetInfo.isConnected.addEventListener(
		  'change',
		  handleFirstConnectivityChange
		);
		

	}

	VerPaciente() {
		axios.get('https://meu-projeto-incrivel-7f142.firebaseio.com/Nome/Nomes.json')
			.then((data) => {
				console.log(data);
			}).catch((err) => {
				alert('erro'+err);
			});
	}

	AdicionarPaciente() {
		//let dado = {{principal : 'Lucas'}, {secundario: 'Lima'}};
		
	}


	render() {
		return (
			<View style={styles.principal}>
				<View style={styles.containerNome}>
					<Text style={styles.nome}>{this.props.nome}</Text>
				</View>
				<View style={styles.containerBotoes}>
					<TouchableOpacity
						style={styles.botao}
						onPress={() => {this.salvarUser()}}
					>
					<Text style={styles.textoBotao}>Adicionar pré-cadastro</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.botao}
						onPress={() => {this.VerPaciente()}}
					>
					<Text style={styles.textoBotao}>Adicionar novos dados</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.containerHistorico}>
					<FlatList
					  data={[{key: '24-10-2017'}, {key: '24-10-2016'}, {key: '24-10-2015'}, {key: '24-05-2015'}, {key: '24-05-2014'}]}
					  renderItem={({item}) =>  <Text style={styles.data}>{item.key}</Text>}
					/>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	principal: {
		flex: 1,
	},

	containerNome: {
		flex: 2,
		backgroundColor: '#f0f8ff',
		marginBottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},

	containerBotoes: {
		flex: 2,
		backgroundColor: '#f0f8ff',
		marginBottom: 5,
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	containerHistorico: {
		flex: 4,
		backgroundColor: '#afeeee',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		
	},

	nome: {
		
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 10,
		fontSize: 30,
	},

	botao: {
		width: 300,
		height: 50,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
	},

	textoBotao: {

		fontSize: 20,

	},

	dataContainer: {
		borderWidth: 0.5,
		borderColor: 'black',
	},

	data: {
		flex: 1,
		fontSize: 20,
		marginBottom: 10,
	}
})