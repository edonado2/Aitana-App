import { View, Text, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    Link
  } from "react-router-native";
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/Ionicons';
export const VictimaNiño = () => {
  
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View>
      <Text style={styles.backspace}>
        <Link to="/OrganosReceptoresDenuncia" style={{width:27, height:27, borderRadius:50}}>
          <Text  style={{}}>
            <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView >

        <Text style={styles.title}>SERVICIO DE ATENCIÓN CUANDO LA VÍCTIMA ES UN NIÑO O UNA NIÑA</Text>
        <View>          
                <Image
                style={{ width: "100%", height: 230, marginTop:25, marginBottom:15}}
                resizeMode="cover"
                source={
                    require("../images/apoyoinfantil.jpg")
                }
                />
        </View>

        <View style={styles.container}>
               

          <Text style={styles.subTitle2}>1. Atención telefónica de los Consejos de Protección de Niños, Niñas y Adolescentes</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Los Consejos de Protección atienden casos de violencia contra la mujer cuando las víctimas son niñas o adolescentes. Estos órganos administrativos pueden dictar medidas de protección e intervenir en casos de maltrato y de abuso sexual. Consulte en el siguiente enlace el directorio nacional con los nombres y números de teléfono de los consejeros de protección de cada municipio del país: <Text style={[styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.redhnna.org/sistema-de-proteccion')}>
           Directorio de los Consejos de Protección</Text></Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>2. Cecodap (ONG dedicada a la defensa y protección de los derechos de la niñez) </Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Servicio de atención psicológica a distancia para padres, madres, cuidadores, niños, niñas y adolescentes. </Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0424 - 1804002 (mensaje de texto) | 0414 - 2696823 / 0424 - 2842359 (WhatsApp)</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginBottom]}><Text style={styles.bold}>E-mail</Text>  cecodap.sap@gmail.com </Text>
        
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
        marginTop:20
      },      
      backspace: {
        width:"100%", 
        height:50, 
        paddingLeft:20, 
        paddingTop:12
      },
      subTitle2:{
        fontFamily:"OpenSans_700Bold",
        fontSize:20, 
        marginBottom:12,
        lineHeight:30, 
        letterSpacing:1.2     
      },
      title: {
        fontFamily:"OpenSans_700Bold",
        letterSpacing:1.6, 
        fontSize:24, 
        marginTop:7, 
        marginTop:10,
        marginLeft:20
      },
      paragraph: {
        fontSize:14, 
        lineHeight:26, 
        textAlign:"justify",
        letterSpacing:.2,
        fontFamily:"OpenSans_500Medium"       
      }, 
      paragraphLeft: {
        fontSize:14, 
        lineHeight:26, 
        textAlign:"left",
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
        color:"#745c98"
      },
      link: {
        color:"#109dfa", 
        textDecorationLine:"underline"
      },
      marginTop15: {
        marginTop:15
      },
      marginTop30: {
        marginTop:30
      },
      marginBottom: {
        marginBottom:75
      },
      marginLeft: {
        marginLeft: 8
      }
});