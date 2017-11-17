
import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import TelaInicial from './src/components/TelaInicial';
import TelaUsuario from './src/components/TelaUsuario';
import ListaPacientes from './src/components/ListaPacientes';
import PainelPaciente from './src/components/PainelPaciente';
import FichaEnfermagemIdoso from './src/components/FichaEnfermagemIdoso'

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    
    const logado = AsyncStorage.getItem('integra');
      
        this.state = {logado: logado};   
  }


  render() {
    console.log(this.state.logado);  
    var i = 10;  
    if ( i == 10) {
      return (
      <Router>
        <Stack key="root">
          <Scene key="telaInicial" component={TelaInicial} title="Login" hideNavBar/>
          <Scene key="telaUsuario" component={TelaUsuario} title="Usuario" hideNavBar/>      
          <Scene key="listaPacientes" component={ListaPacientes} title="Lista de Pacientes" hideNavBar/>
          <Scene key="painelPaciente" component={PainelPaciente} title="PainelPaciente" hideNavBar/>      
          <Scene key="fichaEnfermagemIdoso" component={FichaEnfermagemIdoso} title="FichaEnfermagemIdoso" hideNavBar/>
        </Stack>
      </Router>
      );  
    } else {
      return (
        <Router>
          <Stack key="root">
            <Scene key="telaUsuario" component={TelaUsuario} title="Usuario" hideNavBar/>
            <Scene key="telaInicial" component={TelaInicial} title="Login" hideNavBar/>
          </Stack>
        </Router>
      );
    } 
  }
}

