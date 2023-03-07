import { View, Text, Image, onPress, StyleSheet } from 'react-native'
import React from 'react'
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

export const ViolenciaPsicologica = () => {
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
                    require("../images/image4.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>VIOLENCIA PSICOLÓGICA</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Por violencia psicológica se comprende un conjunto de conductas o comportamientos destinados a ocasionar en otros algún tipo de sufrimiento emocional o psíquico, constituyendo actos de verdadera agresión psicológica.</Text>
          <Text style={[styles.paragraph]}> Estos actos, intencionados o no, reducen a la víctima, vulneran su autoestima o la someten a escarnio, humillación u otras formas de sufrimiento no físico, es decir, sin llegar a lastimar el cuerpo de la víctima. De hacerse recurrente, la violencia psicológica puede devenir en el maltrato psicológico.</Text>
          <Text style={[styles.paragraph, styles.marginTop22]}> Este tipo de violencia puede ser:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• Activa. </Text>Por ejemplo, cuando una persona insulta, disminuye o agrede emocional y psicológicamente a otra.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• Pasiva.</Text> Por ejemplo, una persona le retira atención a la otra, especialmente cuando requiere de ella, o la somete a abandono emocional.</Text>

          <Text style={styles.subTitle2}>EFECTOS DEL ABUSO EMOCIONAL O VERBAL</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> El impacto de la violencia psicológica puede variar de acuerdo a la frecuencia e intensidad de las agresiones y de las características individuales de la víctima. Dentro de las consecuencias más reportadas están:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Consumo muy frecuente de alcohol, tabaco y sustancias psicoactivas.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Sentimientos de tristeza, bajo estado de ánimo e ideación suicida.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Altos niveles de estrés, irritabilidad y frustración. </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Baja autoestima y disminución en el valor propio.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Depresión y/o ansiedad.</Text>     
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Deterioro de las relaciones cercanas (amigos, familiares).</Text>      

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref]} 
          >Editorial Etecé. Última edición: 5 agosto, 2021. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://concepto.de/violencia-fisica/')}>
             https://concepto.de/violencia-fisica/</Text></Text>
             <Text style={[styles.ref, styles.marginBottom]} 
          >Carolina Blanco. Psicóloga clínica.        
          2022-05-08 Actualizado. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://porquequieroestarbien.com/prevencion-violencia/maltrato/violencia-psicologica-senales-caracteristicas-y-consecuencias')}>
             https://porquequieroestarbien.com/prevencion-violencia/maltrato/violencia-psicologica-senales-caracteristicas-y-consecuencias</Text></Text>
          

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
        ontFamily:"OpenSans_300Light", 
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
        marginLeft:8
      }
});