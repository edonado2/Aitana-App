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

export const ViolenciaFisica = () => {
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
                    require("../images/image3.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>VIOLENCIA FÍSICA</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> La violencia física es aquella acción generada de manera voluntaria y que por lo mismo ocasiona daños no accidentales, utilizando la fuerza física o material (es decir, sirviéndose de objetos) y que tiene como fin fundamental generar un impacto directo en el cuerpo y consecuencias físicas tanto externas como internas.</Text>
          <Text style={[styles.paragraph]}> La violencia física ocurre cuando una persona trasgrede el espacio corporal de la otra sin su consentimiento, ya sea sometiéndola a golpes, jalones o empujones, o bien encerrándola, provocándole lesiones físicas con algún tipo de objeto (letales o no), o forzándola a tener algún tipo de relaciones sexuales.</Text>

          <Text style={styles.subTitle2}>EJEMPLOS DE VIOLENCIA FÍSICA</Text>
          <Text style={[styles.paragraph]}>Algunos ejemplos de violencia física pueden ser:</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Golpizas, asaltos con armas de cuerpo a cuerpo, arrollamientos con vehículos o agresiones físicas de cualquier tipo.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Disparos con arma de fuego.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• </Text> Violaciones (actos sexuales no consentidos), sin importar el sexo o la orientación sexual de tanto víctima como victimario.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• </Text> Castigos físicos que infringen dolor, sufrimiento corporal o que causan malestares de salud.</Text>

          <Text style={styles.subTitle2}>CONSECUENCIAS DE VIOLENCIA FÍSICA</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Incapacidad para trabajar.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Enfermedades causadas por dicha lesión.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Homicidios.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Suicidios.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Generación de pánico en la victima.</Text>      
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref]} 
          >Editorial Etecé. Última edición: 5 agosto, 2021. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://concepto.de/violencia-fisica/')}>
             https://concepto.de/violencia-fisica/</Text></Text>
             <Text style={[styles.ref, styles.marginBottom]} 
          >MisAbogados.com.co. Abril 04, 2017. Derecho Penal. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.misabogados.com.co/blog/que-es-la-violencia-fisica')}>
             https://www.misabogados.com.co/blog/que-es-la-violencia-fisica</Text></Text>
          

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
    marginTop:35,
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
    letterSpacing:.2,
    textAlign:"justify",
    fontFamily:"OpenSans_500Medium"         
  }, 
  paragraphLeft: {
    fontSize:14, 
    lineHeight:26, 
    letterSpacing:.2,
    textAlign:"left",
    fontFamily:"OpenSans_500Medium"         
  }, 
  references: {
    fontWeight:"400", 
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
    marginLeft: 8
  }
});