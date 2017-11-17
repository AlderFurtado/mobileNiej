import React, { Component } from 'react';
import {
	FlatList,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BarraNavegacao from './BarraNavegacao';

export default class TelaInicial extends Component<{}> {
	avancarPainelPaciente(nome) {
		Actions.painelPaciente( { nome: nome });
	}

	render() {
		return (
			
			<View style={styles.principal}>
				<View >
	            <BarraNavegacao titulo={'Lista de Pacientes'}/> 
	          	</View>
				<View style={styles.lista}>
					<FlatList
						
						  data={[{ key: 'alder', nome: 'Lucas Santos' }, { key: 'bruna', nome: 'Bruna Souza' },
						  { key: 'caio', nome: 'Caio Almeida' }, { key: 'danilo', nome: 'Danilo Alcântra'},
						  { key: 'caio', nome: 'Caio Almeida' }, { key: 'danilo', nome: 'Danilo Alcântra'},
						  { key: 'caio', nome: 'Caio Almeida' }, { key: 'danilo', nome: 'Danilo Alcântra'}]}
						  renderItem={({ item }) =>
						  <TouchableOpacity 
						  	onPress={() => {this.avancarPainelPaciente(item.nome)}}
						  > 
						  <Text key={item.key} style={styles.data}>{item.nome}</Text>
						  </TouchableOpacity>	}
					/>	
				</View>		

				<View style={styles.botao}>
					<Button 
					  title='+'
					  onPress={() =>{false}}
					/>
				</View>
			
			</View>
		);
	}

	
}

const styles = StyleSheet.create({
	botao: {
		flex: 1,
		justifyContent: 'flex-end',
		margin: 10,
		
	},

	lista: {
		flex: 9,
		padding: 5,
	},

	data: {
		backgroundColor: '#6495ed',
		borderColor: 'black',
		borderWidth: 0.5,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 5,
	},

	principal: {
		flex: 1,
	}
});