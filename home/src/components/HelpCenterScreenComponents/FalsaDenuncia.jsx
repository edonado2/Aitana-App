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

export const FalsaDenuncia = () => {
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
                    require("../images/denuncia8.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>CONSECUENCIAS DE PRESENTAR UNA DENUNCIA FALSA</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Una falsa denuncia enmarcada en un proceso legal es un delito consistente en imputar hechos ilícitos a alguna persona con conocimiento de la falsedad de los mismos y desprecio absoluto por la verdad ante el funcionario judicial o administrativo que tenga el deber de proceder a su averiguación.​</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Presentar una denuncia falsa acarrea consecuencias legales. Las cuales se pagan, en función de la magnitud del delito que se quiso imputar a otro. Sin importar si se tenía o no conocimiento de las leyes, ya que esto no exime de que se deba cumplir una pena. </Text>

          <Text style={[styles.subTitle2]}>¿CUÁLES SON LAS PENAS QUE SE PAGAN AL HACER UNA DENUNCIA FALSA?</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Es necesario que sepas que todo dependerá del estatus de los actos procesales, es decir, se evalúa si ya quien fue denunciado ha recibido la totalidad o una parte del castigo por sus supuestos delitos cometidos. De acuerdo a eso, la justicia puede proceder de las siguientes formas: </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Con pena de prisión de seis meses a dos años, además debe pagar una multa de doce a veinticuatro meses, en el caso de que haya simulado la imputación de delitos graves.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Una multa de tres a seis meses, si se incrimina en un delito leve.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> También puede ser solo la pena de multa de doce a veinticuatro meses, si se imputara un delito menos grave.</Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> Por otra parte, si la persona se arrepiente e indica que es mentira todo y que el tercero es inocente, puede que se le aplique la figura de desistimiento o atenuante de confesión  y se exime de su responsabilidad, gracias a que ha reconocido su mala acción. Aun así, esto se ejecuta siempre y cuando se proceda a actuar antes de que la víctima pague alguna condena.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Abogados ZUBIRI & ZUDAIRE. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://zubiri-zudaire.com/consecuencias-legales-de-las-denuncias-falsas/')}>
          https://zubiri-zudaire.com/consecuencias-legales-de-las-denuncias-falsas/</Text></Text>
          

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