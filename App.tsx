import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/AppTheme';
import { Perfil } from './src/screens/Perfil';
import { Cal } from './src/screens/cal';
import { Tabla } from './src/screens/tabla';
// import Tabla from './src/screens/tabla';
// import {Perfil} from './src/screens/Perfil';

export const App = () => {
  return (
    //  <SafeAreaView style={styles.fondo}>
    //    <StatusBar
    //    backgroundColor='black'
    //    barStyle='light-content'
    //    />
    //    {/* <CalculadoraScreen/>
    //     */}
    //     {/* <Perfil/> */}
    //     <CalculadoraScreen/>
    //  </SafeAreaView>
    // //  <Perfil />

    // <Perfil/>
    // <SafeAreaView
    // style={styles.fondo}

    // >
    //   <StatusBar backgroundColor='black'
    //     barStyle='light-content'/>
    //   <CalculadoraScreen/>

  
     
     <Tabla/>
    // </SafeAreaView>
  //  <Tabla/>
  
  );
};
