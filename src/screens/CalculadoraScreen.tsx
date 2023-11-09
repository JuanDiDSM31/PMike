import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'

export const CalculadoraScreen = () => {
  const [num, setnum] = useState('0');
  const [numAnterior, setnumAnterior] = useState('0')
  const limpiar =()=>{
  setnum('0');
  }

  const armar=(numeroTexto:string)=>{
    setnum(num+numeroTexto)
  }

  const negPos=()=>{
    if(num.includes('-')){
      setnum(num.replace('-',''))
    }
    else{
      setnum('-'+num)
    }
  }

  return (
    <View style={styles.calContainer}>
    <Text style={styles.resultadoP}>{numAnterior}</Text>
    <Text style={styles.resultado}
     numberOfLines={1}
     adjustsFontSizeToFit
    >{num}</Text>
   
   {/* view de los botones primer fila */}
   <View style={styles.fila}>

    <BotonCalc text='C'   color='#9B9B9B' accion={limpiar} />
    <BotonCalc text='+/-' color='#9B9B9B'accion={negPos} />
    <BotonCalc text='del' color='#9B9B9B' accion={limpiar} />
    <BotonCalc text='/'   color='#FF9427' accion={limpiar} />
    
   </View>

   <View style={styles.fila}>

    <BotonCalc text='7' accion={armar}  />
    <BotonCalc text='8'  accion={armar} />
    <BotonCalc text='9'  accion={armar}  />
    <BotonCalc text='X'   color='#FF9427' accion={limpiar} />

    </View>
    <View style={styles.fila}>

    <BotonCalc text='4' accion={armar}     />
    <BotonCalc text='5'  accion={armar}  />
    <BotonCalc text='6'   accion={armar} />
    <BotonCalc text='-'   color='#FF9427' accion={limpiar}/>

    </View>
    <View style={styles.fila}>

    <BotonCalc text='3'   accion={armar}   />
    <BotonCalc text='2'   accion={armar} />
    <BotonCalc text='1'  accion={armar}  />
    <BotonCalc text='+'   color='#FF9427' accion={limpiar}/>

    </View>

    <View style={styles.fila}>

    <BotonCalc  ancho  text='0'    accion={armar}  />
    <BotonCalc text='.'   accion={armar} />
    <BotonCalc text='='   color='#FF9427'accion={limpiar} />

    </View>

  {/* fin del view de los botones  */}
  </View>
  


  

  )
}
