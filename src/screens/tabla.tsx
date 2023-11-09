import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {Celdas} from '../components/celdas';
import {styles} from '../theme/AppTheme';

export const Tabla: React.FC = () => {
  return (
    <View style={{...styles.fila, flexDirection: 'column'}}>
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="2"
        nombre="Juan"
        sexo="masculino"
        fechaNacimiento="24/06/23"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
      <Celdas
        id="1"
        nombre="Miguel"
        sexo="masculino"
        fechaNacimiento="24/0623"
        domicilio="villa"
        ruta="./../img/img4.jpg"
      />
    </View>

    // <Celdas/>
  );
};
