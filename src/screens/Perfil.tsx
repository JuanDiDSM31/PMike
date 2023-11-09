import React from 'react';
import { View, Text, Image } from 'react-native';

const personas = [
  {
    nombre: 'Miguel Vidal',
    edad: 19,
    email: 'al222210644@gmail.com',
    telefono: '123-456-789',
    direccion: 'Otzsdf',
     imagen: require('../img/img4.jpg')
  }
];

export const Perfil = () => {
return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {personas.map((persona, index) => (
      <View key={index} style={{ marginBottom: 20 }}>
        <Image source={persona.imagen} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{persona.nombre}</Text>
        <Text>Edad: {persona.edad}</Text>
        <Text>Email: {persona.email}</Text>
        <Text>Teléfono: {persona.telefono}</Text>
        <Text>Dirección: {persona.direccion}</Text>
      </View>
    ))}
  </View>
);
};





// export default App;