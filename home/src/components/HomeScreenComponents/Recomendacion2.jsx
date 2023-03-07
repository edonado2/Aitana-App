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

export const Recomendacion2 = () => {
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
                    require("../images/recomendacion2.jpg")
                }
                />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>¿QUÉ HACER SI SABES DE UN CASO DE VIOLENCIA CONTRA UN NIÑO O NIÑA?</Text>
          {/* Line */}

          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:20, alignSelf:"center"}}></Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> La violencia infantil puede estar dentro de nuestro entorno familiar, es importante aprender a reconocerla y tomar medidas adecuadas.</Text>

          <Text style={styles.subTitle2}>1. REALIZAR UN DIAGNÓSTICO</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En primer lugar es importante realizar un análisis de la situación, identificar el tipo de abuso del que fue víctima la niña o el niño. Además, es muy importante utilizar algunos pasos que permiten tener un panorama aún más claro sobre su situación:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Pruebas de laboratorio, para identificar lesiones.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Historial clínico del niño o niña.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Observa y analiza el comportamiento del infante con su círculo social.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Brinda confianza y seguridad al niño o niña para que se sienta seguro y pueda contarte lo que le sucedió. Mantén la calma y escucha con atención todo lo que tenga que decir. No emitas juicios, ni contagies miedos, no amenaces, consuela y protege.</Text>

          <Text style={styles.subTitle2}>2. NO RE-VICTIMICE AL NIÑO O NIÑA</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Una reacción normal frente a un caso de violencia es el pánico que puede abrumar a muchos adultos, el tratar de lograr una respuesta inmediata obliga a tomar una reacción agresiva frente al niño o niña, es importante recordar que el infante ha sido quién se encuentra en una situación crítica, donde recibió algún tipo de agresión física o psicológica, por esa razón siempre es importante reconocer frente al niño o niña que él o ella no tienen la culpa, no se debe crear sentimiento de error o falta, ya que esto es perjudicial.</Text>
          <Text style={[styles.paragraph]}> Siempre recuerda repetir palabras que alivien su situación “Tranquilo”; “no fue tu responsabilidad”; “todo va a estar bien”.</Text>

          <Text style={styles.subTitle2}>3. BRINDALE ATENCIÓN</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Un niño o niña que atraviesa por alguna situación de violencia necesita el apoyo de todos sus seres queridos. Es importante brindarle la atención suficiente para ayudarlo en su estado emocional. Por ese motivo presta mucha atención a su comportamiento, sus reacciones y actitud frente a su círculo social, familia, amigos. Identifica escenarios que lo ponen de mal humor o le generan preocupación, la escuela, el internet, algunos miembros de la familia, todo puede expresar algún sentimiento ocasionado por la situación que está atravesando el infante.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Constantemente pregúntale sobre ¿Cómo se siente?, si necesita ayuda, en el momento que el niño o niña sienta la suficiente confianza podrá tener una conversación y expresar su temor.</Text>

          <Text style={styles.subTitle2}>4. BUSQUE ASESORAMIENTO DE PROFESIONALES </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Finalmente, no descartes la opción de acudir a profesionales, de denunciar el maltrato, las autoridades especializadas en el maltrato infantil son un grupo de personas que tienen amplia experiencia para atender casos de violencia, diferentes departamentos podrán garantizar su seguridad, atención y la investigación necesaria para estudiar su caso.</Text>

          <Text style={styles.subTitle2}>EN CONCLUSIÓN</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Como personas adultas es importante aprender a reconocer un caso de violencia infantil y tomar las decisiones correctas. Son 4 pasos que permitirán llevar una situación de agresión de una manera acertada. Primero, realiza un diagnóstico del niño o niña, observa su comportamiento con diferentes personas y lugares, esto nos dará un breve conocimiento de la situación; segundo, no re victimices al infante, la situación es muy complicada , lo más importante es no hacerlo sentir culpable de lo sucedido; tercero, bríndale mucha atención, su estado emocional está muy sensible, necesita de apoyo incondicional, el tratar de crear buenos momentos permitirá que el niño o niña adquiera confianza y pueda aceptar tu ayuda. Finalmente, de ser necesario acude a un profesional, una vez realizados los tres primeros pasos podrás identificar si la situación necesita ayuda de un psicólogo experto, la salud mental de un niño o niña necesita ser estable para que pueda desarrollar todo su potencial. Recuerda el silencio es cómplice de la violencia, denuncia y ayúdanos a cuidar de la niñez ecuatoriana.</Text>

      

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >World Vision Ecuador. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://blog.worldvision.org.ec/caso-de-violencia-contra-un-ni%C3%B1o-o-ni%C3%B1a')}>
          https://blog.worldvision.org.ec/caso-de-violencia-contra-un-ni%C3%B1o-o-ni%C3%B1a</Text></Text>
          

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