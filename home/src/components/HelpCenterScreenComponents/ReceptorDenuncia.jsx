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
export const ReceptorDenuncia = () => {
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
                    require("../images/denuncia4.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿QUÉ ES UN ÓRGANO RECEPTOR DE DENUNCIA?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Los órganos receptores de denuncia son los entes del Estado con competencia para recibir cualquier tipo de denuncia. En este sentido, la denuncia podrá ser formulada en forma oral o escrita, con o sin la asistencia de un abogado o abogada, ante cualesquiera de los siguientes organismos: </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Ministerio Público.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Juzgados de Paz.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Prefecturas y jefaturas civiles</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> División de Protección en materia de niño, niña, adolescente, mujer y familia del cuerpo de investigación con competencia en la materia.</Text>
          <Text style={[styles.paragraph,  styles.marginLeft]}><Text style={styles.bold}>•</Text> Órganos de policía.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Unidades de comando fronterizas.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Tribunales de municipios en localidades donde no existan los órganos anteriormente nombrados.</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}> Cada uno de los órganos anteriormente señalados deberá crear oficinas con personal especializado para la recepción de denuncias de los hechos de violencia a que se refiere esta Ley.</Text>

          <Text style={[styles.subTitle2]}>OBLIGACIONES DEL ÓRGANO RECEPTOR DE DENUNCIA</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}> El órgano receptor de la denuncia deberá:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Recibir la denuncia, la cual podrá ser presentada en forma oral o escrita.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Ordenar las diligencias necesarias y urgentes, entre otras, la práctica de los exámenes médicos correspondientes a la persona agredida en los centros de salud pública o privada de la localidad.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Ordenar la comparecencia obligatoria del presunto agresor, a los fines de la declaración correspondiente y demás diligencias necesarias que permitan el esclarecimiento de los hechos denunciados.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Imponer las medidas de protección y de seguridad pertinentes establecidas en esta Ley</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Formar el respectivo expediente.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>•</Text> Elaborar un informe de aquellas circunstancias que sirvan al esclarecimiento de los hechos, el cual deberá acompañar a la denuncia, anexando cualquier otro dato o documento que sea necesario a juicio del órgano receptor de la denuncia.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>•</Text> Remitir el expediente al Ministerio Público.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Ley Orgánica sobre el derecho de las mujeres a una vida libre de violencia. Artículo 71.</Text>
          

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