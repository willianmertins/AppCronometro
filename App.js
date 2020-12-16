import React, { Component } from 'react';

import {  Text, 
          View,
          StyleSheet,
          Image,
          TouchableOpacity
        } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      resultado: null
    };

    //Variavel do Timer relógio
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  };

  vai(){

    if(this.timer != null){
      //Pausa o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'});

    } else {
      //Inicia o timer
      this.timer = setInterval( ()=>{
        this.setState({numero: this.state.numero + 1});
      },1000);

      this.setState({botao: 'PARAR'});

    }


  };

  limpar(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      resultado: this.state.numero,
      numero: 0, 
      botao: 'VAI'
    });


    
  };


  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/assests/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(0)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.resultado}>
            <Text style={styles.txtCorrida}>
              {this.state.resultado > 0 ? 'Ultimo tempo: '+this.state.resultado.toFixed(0)+' segundos': ''}
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },

  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',

  },

  resultado: {
    marginTop: 40,
  },

  txtCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
  


});