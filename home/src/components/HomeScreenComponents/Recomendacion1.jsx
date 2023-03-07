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

export const Recomendacion1 = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View style={{borderBottomColor:"#00000026", borderBottomWidth:1.2}}>
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
                style={{ width: "100%", height: 200, alignSelf:"center",opacity:.85}}
                resizeMode="cover"
                source={
                    require("../images/recomendacion1.jpg")
                }
                />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>¿QUÉ DEBO HACER SI SOY VÍCTIMA O TESTIGO DE UNA AGRESIÓN?</Text>
          {/* Line */}

          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:20, alignSelf:"center"}}></Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si ves que agreden a una persona, escuchas insultos o presencias cómo la atacan, no mires hacia otro lado.</Text>

          <Text style={styles.subTitle2}>¿CÓMO ACTUAR SI ERES TESTIGO ANTE ESTOS CASOS?</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Algunas formas de violencias por motivos de género son explícitas, como la violencia física, el abuso sexual o las amenazas. Otras, son menos evidentes o no están visibilizadas como violencias: el humor sexista, las actitudes que controlan y dominan o manifestaciones de machismo cotidiano como las que se ven en las publicidades o en los medios de comunicación.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Creer y validar lo que relatan las víctimas, tener una actitud de escucha que transmita un: “Yo sí te creo”. Darle valor a su relato permite contradecir la idea que coloca esta situación en el ámbito de lo privado, lo íntimo o lo invisible.</Text>
          <Text style={[styles.paragraph, styles.marginLeft]}><Text style={styles.bold}>•</Text> Construir un vínculo de confianza con la victima.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text>  Si sos familiar o parte del entorno cercano, es importante que la contengas y acompañes para que se sientas más protegida.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Ante una emergencia o una situación de gravedad extrema, se debe intervenir protegiendo la integridad física y psíquica de la persona y llamando al 911 inmediatamente.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> La posterior declaración de testigos del hecho, es una parte fundamental en el proceso de denuncia.</Text>

          <Text style={styles.subTitle2}>¿QUÉ HACER SI ERES VÍCTIMA DE VIOLENCIA?</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Vencer el miedo y contar a personas cercanas lo que estás viviendo. Su apoyo será fundamental en tu protección.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Es importante que cada vez que vivas un episodio de violencia, hagas la denuncia correspondiente en cualquiera de los siguientes organimos: Ministerio Público, Prefecturas y jefaturas civiles, órganos de policias...</Text>
          <Text style={[styles.paragraph, styles.marginLeft]}><Text style={styles.bold}>•</Text> El Estado tiene herramientas para la orientación, atención psicológica, social y jurídica.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Podés solicitar protección ante hechos de violencia intra familiar.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >PRENSA MINISTERIO DE DESARROLLO HUMANO Y PROMOCIÓN SOCIAL. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://sisanjuan.gob.ar/desarrollo-humano-y-promocion-social/2022-04-19/40291-como-actuar-si-sos-testigo-o-victima-de-un-acto-de-violencia-por-motivos-de-genero')}>
          https://sisanjuan.gob.ar/desarrollo-humano-y-promocion-social/2022-04-19/40291-como-actuar-si-sos-testigo-o-victima-de-un-acto-de-violencia-por-motivos-de-genero</Text></Text>
          

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
    fontSize:22, 
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
    marginLeft: 8
  }
});