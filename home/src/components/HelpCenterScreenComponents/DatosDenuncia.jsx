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

export const DatosDenuncia = () => {
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
                    require("../images/denuncia5.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿QUÉ DATOS DEBE DE CONTENER UNA DENUNCIA?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Los ciudadanos pueden formular sus denuncias sobre delitos tales como estafa, robo, lesiones, homicidio, violación, secuestro, posesión y tráfico de drogas, ilícitos ambientales, violencia de género y casos de corrupción, entre otros. </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> La denuncia podrá formularse verbalmente o por escrito y, en ambos casos, deberá contener la identificación del denunciante, cédula de identidad, domicilio o residencia, además de una narración del hecho que se denuncia, quiénes lo cometieron y las personas que lo hayan presenciado o que tengan noticia de él.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En el caso de la denuncia en forma verbal, el denunciante debe dirigirse al Ministerio Público o ante los órganos de policía de investigaciones penales competentes, donde se le tomará entrevista y  se levantará un acta en presencia del denunciante quien la firmará junto con el funcionario que la reciba. Mientras, que a través de la forma escrita, ésta debe ser consignada en un documento firmado por el denunciante o por un apoderado con facultades para hacerlo. Si el denunciante no puede firmar, estampará sus huellas dactilares.</Text>

          

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Derecho Procesal Penal. Procesalpenalvenezuela Wiki. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://procesalpenalvenezuela.fandom.com/wiki/La_Denuncia#Formulaci%C3%B3n_de_la_Denuncia')}>
          https://procesalpenalvenezuela.fandom.com/wiki/La_Denuncia#Formulaci%C3%B3n_de_la_Denuncia</Text></Text>
          

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
        marginLeft: 8
      }
});