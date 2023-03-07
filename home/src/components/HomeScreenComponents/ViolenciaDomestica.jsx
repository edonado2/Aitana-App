import { View, Text, Image, onPress, StyleSheet } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';
import {
    NativeRouter,
    Route,
    Link,
    Routes
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import { SocialIcon } from '@rneui/base';

export const ViolenciaDomestica = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View>
      <Text style={styles.backspace}>
        <Link to="../" style={{width:27, height:27, borderRadius:50}}>
          <Text  style={{}}>
            <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView >
        <View >          
                <Image
                style={{ width: "100%", height: 230}}
                resizeMode="cover"
                source={
                    require("../images/image7.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>VIOLENCIA DOMÉSTICA</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}>  La violencia doméstica o intrafamiliar es la que se produce entre miembros del núcleo familiar con previa convivencia, pudiendo ser víctimas tanto hombres como mujeres. Su referente jurídico se encuentra en el artículo 173.2 del Código Penal, y se traduce como la violencia ejercida por la persona agresora sobre los descendientes, ascendientes o hermanos por naturaleza, adopción o afinidad, propios o del cónyuge o conviviente, o sobre los menores o incapaces que con él convivan o que se hallen sujetos a la potestad, tutela, curatela, acogimiento o guarda de hecho del cónyuge o conviviente, o sobre persona amparada en cualquier otra relación por la que se encuentre integrada en el núcleo de la convivencia familiar, así como sobre las personas que por su especial vulnerabilidad se encuentran sometidas a custodia o guarda en centros públicos o privados.</Text>

          <Text style={styles.subTitle2}>CAUSAS DE LA VIOLENCIA INTRAFAMILIAR</Text>
          <Text style={[styles.paragraph]}>  Los factores que originan la violencia intrafamiliar pueden ser muy variados. La intolerancia es uno de esos factores o causas. Cuando las personas no son educadas para tolerar, para aceptar, terminan volcándose violentamente contra otras. De igual forma la falta de control de los impulsos es otras de las causas. Cuando no se ha tenido un buen desarrollo de vínculos afectivos, las personas no son capaces de establecerlos, por lo tanto adoptan conductas agresivas. Otra de las causas es la incapacidad de resolver problemas. Hay causas como el alcohol, el consumo de drogas.</Text>
          <Text style={[styles.paragraph]}>  Todas estas causas pueden evitarse o corregirse con la ayuda de un psicólogo.</Text>  

          <Text style={styles.subTitle2}>CONSECUENCIAS DE LA VIOLENCIA INTRAFAMILIAR</Text>
          <Text style={[styles.paragraph]}>  La violencia intrafamiliar es un problema que generar graves consecuencias. Las víctimas de cualquiera de los tipos de violencia intrafamiliar sufren daños físicos, emocionales y psíquicos. Se hacen incapaces de establecer o mantener relaciones afectivas. Sufren problemas de autoestima. La violencia intrafamiliar puede incluso generar la muerte. Es por ello que ante las señales de violencia intrafamiliar hay que acudir por ayuda de expertos. Se hace necesario que los agresores puedan aprender a gestionar sus emociones, controlar sus impulsos y superar la intolerancia a tiempo. Las víctimas también necesitan ayuda, para superar las consecuencias y desarrollar una vida plena, mediante la superación de los estragos originados por la violencia intrafamiliar.</Text>   

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref]} 
          >Instituto Andaluz de la Mujer. Consejería de Inclusión Social, Juventud, Familias e Igualdad. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.juntadeandalucia.es/iamindex.php/1-violencia-de-genero/que-se-entiende-por-violencia-domestica')}>
          https://www.juntadeandalucia.es/iamindex.php/1-violencia-de-genero/que-se-entiende-por-violencia-domestica</Text></Text>
             <Text style={[styles.ref, styles.marginBottom]} 
          >Por Terapify: Psicólogos en línea. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.terapify.com/blog/violencia-intrafamiliar-tipos-causas-y-consecuencias/')}>
          https://www.terapify.com/blog/violencia-intrafamiliar-tipos-causas-y-consecuencias/</Text></Text>
          

        </View>      
  
        </ScrollView>
      
    </View>
  )
}

    const styles = StyleSheet.create({
      container:{
        width:"88%", 
        height:"100%", 
        marginLeft:20, 
        marginTop:35
      },      
      backspace: {
        width:"100%", 
        height:50, 
        paddingLeft:20, 
        paddingTop:12
      },
      subTitle: {
        fontFamily:"OpenSans_300Light",
        letterSpacing:.5,
        color:"#00000099",
        fontSize:16
      },
      subTitle2:{
        fontFamily:"OpenSans_700Bold",
        fontSize:20, 
        marginTop:35,
        marginBottom:12,
        lineHeight:30
      },
      title: {
        fontFamily:"OpenSans_700Bold",
        letterSpacing:1.6, 
        fontSize:24, 
        marginTop:7, 
        marginBottom:12
      },
      paragraph: {
        fontSize:14, 
        lineHeight:26, 
        textAlign:"justify",
        letterSpacing:.2,
        fontFamily:"OpenSans_500Medium"       
      }, 
      references: {
        fontFamily:"OpenSans_700Bold",
        fontSize:20,  
        letterSpacing:1.2 
      },
      ref: {
        width:"95%", 
        fontWeight:"300", 
        fontStyle:"italic",
        fontSize:13,
        lineHeight:20, 
        color:"#000",  
        marginTop:12
      },
      bold: {
        fontFamily:"OpenSans_700Bold",
      },
      link: {
        color:"#109dfa", 
        textDecorationLine:"underline"
      },
      marginTop15: {
        marginTop:15
      },
      marginTop22: {
        marginTop:22
      },
      marginBottom: {
        marginBottom:70
      },
      marginLeft: {
        marginLeft:8
      }
});