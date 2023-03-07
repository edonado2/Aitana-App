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

export const InocenteDenuncia = () => {
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
                    require("../images/denuncia7.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿QUÉ DEBO DE HACER SI ME CULPAN DE ALGO QUE NO HICE?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Cuando se llega al grado de acusar por un delito a una persona, es importante que primero se evalúen cuáles fueron las causas y las consecuencias a fin de probar que, si ocurrió el hecho delictivo y que afectó la integridad de otra persona, para entonces así, proceder a poner una demanda penal.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Por ello, cuando se desenlazan este tipo de eventualidades es necesario que la persona cuenta con la asesoría de un abogado penalista que vele por defender sus intereses y probar que los hechos por el cuales se le están acusando son falsos. </Text>

          <Text style={[styles.subTitle2]}> ¿QUÉ DERECHOS TIENEN LAS PERSONAS ACUSADAS DE UN DELITO?</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}> Si usted es acusado de un delito tiene los siguientes derechos constitucionales:</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Declararse inocente y tener un juicio ante un tribunal o jurado.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Ser representado por un abogado defensor durante todo el juicio y el proceso que conduzca a ese juicio.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Solicitar un defensor público designado por el tribunal si no tiene los medios para pagar uno.</Text>
          <Text style={[styles.paragraph,  styles.marginLeft]}><Text style={styles.bold}>•</Text> Ser considerado inocente, a menos que el fiscal presente pruebas que demuestren su culpabilidad más allá de toda duda razonable.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Confrontar y contrainterrogar a los testigos llamados a declarar en su contra.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Presentar pruebas en su defensa y exigir la presencia de testigos mediante citaciones emitidas por el tribunal.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Permanecer en silencio durante los procedimientos penales o testificar en defensa propia. Su silencio no podrá ser usado en su contra.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Apelar a un tribunal superior para que revise la sentencia.</Text>


                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
            <Text style={[styles.ref]} 
          >World Legal Corporation. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.worldlegalcorp.com/blog/que-pasa-si-estoy-siendo-acusado-de-un-delito-que-no-cometi/')}>
          https://www.worldlegalcorp.com/blog/que-pasa-si-estoy-siendo-acusado-de-un-delito-que-no-cometi/</Text></Text>
          <Text style={[styles.ref, styles.marginBottom]} 
          >Abogado.com. Ley Criminal. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.abogado.com/recursos/ley-criminal/defendiendose-de-un-cargo-penal.html')}>
          https://www.abogado.com/recursos/ley-criminal/defendiendose-de-un-cargo-penal.html</Text></Text>
          

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