import React from 'react';

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Persona {
  id: string;
  nombre: string;
  sexo: string;
  fechaNacimiento: string;
  domicilio: string;
  ruta: string;
}

//    const personas: Persona[] = [
//      {
//        id: "1",
//        nombre: 'Miguel',
//        sexo: 'Masculino',
//        fechaNacimiento: '01/01/1990',
//        domicilio: '123 Calle Principal'
//      },
//      // ... (resto de las personas)
//    ];

export const Celdas = ({
  id,
  nombre,
  sexo,
  fechaNacimiento,
  domicilio,
  ruta,
}: Persona) => {
  return (
    <View style={stylesT.row}>
      <Text style={stylesT.cell}>{id}</Text>
      <Text style={stylesT.cell}>{nombre}</Text>
      <Text style={stylesT.cell}>{sexo}</Text>
      <Text style={stylesT.cell}>{fechaNacimiento}</Text>
      <Text style={stylesT.cell}>{domicilio}</Text>
      <Image style={stylesT.img} source={require('./../img/img4.jpg')} />
    </View>
  );
};

// estilos

const stylesT = StyleSheet.create({
  card: {
    backgroundColor: '#FFEB3B',
    marginTop: 30,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
