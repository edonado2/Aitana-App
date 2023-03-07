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

export const PruebasDenuncia = () => {
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
                    require("../images/denuncia3.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿ES NECESARIO CONTAR CON PRUEBAS AL DENUNCIAR?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> El testimonio de la persona que ha vivido o vive una situación de violencia de género física y/o psíquica, aunque no haya otros testigos, y siempre que concurran los requisitos de ausencia de incredibilidad subjetiva, verosimilitud del testimonio  y  persistencia en la incriminación. En ese supuesto, la declaración de la persona podrá ser prueba suficiente para fundamentar una condena y desvirtuar la presunción de inocencia. Lo contrario, al tratarse de delitos que suceden normalmente en la más estricta intimidad familiar, permitiría que estas conductas delictivas escapen del reproche penal correspondiente, quedando así en la más absoluta impunidad.</Text>

          <Text style={[styles.subTitle2]}> ¿QUÉ MEDIOS DE PRUEBA SON VÁLIDOS PARA ACREDITAR LA EXISTENCIA DE MALOS TRATOS?</Text>

          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> El reconocimiento total o parcial de los hechos por el propio agresor.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Testigos presenciales o testigos de referencia (familiares, vecinas y vecinos, personal de asistencia social, que no hayan presenciado pero tengan conocimiento de los hechos). De ser los testigos menores de edad, la autoridad judicial podrá acordar que sean interrogados evitando la confrontación visual con el inculpado, utilizando para ello cualquier medio técnico o audiovisual que haga posible la práctica de la prueba.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Pericial: informe forense, informe médico, informe psicológico, informe social...</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Documental: fotos que evidencian, en su caso, lesiones, diligencias policiales, otras denuncias (aunque estén archivadas)</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> También podrán ser admitidos como medios de prueba, los medios de reproducción de palabra, el sonido y la imagen: mensajes e imágenes enviadas por telefonía, chats, redes sociales, correos electrónicos, grabaciones de imágenes, grabaciones de voz…</Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> El Tribunal resolverá sobre la admisión de cada una de las pruebas propuestas, atendiendo al principio de la libre valoración de la prueba.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Instituto Andaluz de la Mujer. Consejería de Inclusión Social, Juventud, Familias e Igualdad. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.juntadeandalucia.es/iamindex.php/1-violencia-de-genero/que-medios-de-prueba-son-validos-para-acreditar-la-existencia-de-malos-tratos')}>
          https://www.juntadeandalucia.es/iamindex.php/1-violencia-de-genero/que-medios-de-prueba-son-validos-para-acreditar-la-existencia-de-malos-tratos</Text></Text>
          

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