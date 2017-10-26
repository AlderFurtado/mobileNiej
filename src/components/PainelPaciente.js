import React, { Component } from 'react';
import {
	FlatList,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';

export default class PainelPaciente extends Component<{}> {
	render() {
		return (
			<View style={styles.principal}>
				<View style={styles.containerNome}>
					<Text style={styles.nome}>{this.props.nome}</Text>
				</View>
				<View style={styles.containerBotoes}>
					<TouchableOpacity
						style={styles.botao}
						onPress={() => false}
					>
					<Text style={styles.textoBotao}>Adicionar pré-cadastro</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.botao}
						onPress={() => false}
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