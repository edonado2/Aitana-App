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

export const ProcesoDenuncia = () => {
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
                    require("../images/denuncia1.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿CÓMO ES EL PROCESO DE DENUNCIA?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> En Venezuela, el Ministerio Público establece que todo ciudadano o ciudadana, tiene el derecho de formular su denuncia sobre cualquier delito, como estafa, robo, homicidio, violación, secuestro, posesión y tráfico de drogas, ilícitos ambientales, violencia de género y casos de corrupción, entre otros.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> El Código Orgánico Penal Procesal (COPP) establece en su artículo 268 que la denuncia podrá ser verbal, es decir, que se levantará un acta en presencia de el o la denunciante, quien la firmará junto con el funcionario o funcionaria que la reciba; o escrita, es decir, que será firmada por el o la denunciante o por un apoderado o apoderada con facultades para hacerlo. Si el o la denunciante no puede firmar, estampará sus huellas dactilares.</Text>
          <Text style={[styles.paragraph, styles.marginTop22]}> En este sentido, los pasos a seguir para presentar tu denuncia son los siguientes:</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Paso 1. </Text> Ubica la forma que más te conviene para denunciar.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• Paso 2. </Text> Prepara la documentación que necesitas para levantar tu denuncia.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Paso 3. </Text> Acude al ministerio público.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Paso 4. </Text> Relata cómo sucedió el delito.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Paso 5. </Text> Da seguimiento a tu denuncia .</Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> Es importante mencionar que, nuestro Código Orgánico Procesal Penal (COPP) establece que cualquier persona, natural o jurídica, víctima o no, que tenga conocimiento de la comisión de un hecho punible, puede formular su denuncia.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> La denuncia también puede ser hecha ante los órganos de policía de investigaciones penales competentes, como son los casos del Cuerpo de Investigaciones Científicas, Penales y Criminalísticas (CICPC), la Guardia Nacional Bolivariana, policías estadales y municipales y los consejos de Protección de Niños, Niñas y Adolescentes, en los casos que le correspondan.</Text>     
          <Text style={[styles.paragraph, styles.marginTop15]}> Denunciar no sólo es un derecho, <Text style={styles.bold}>es tu deber</Text>. Como ciudadano te corresponde hacer tu denuncia y alzar tu voz contra las personas que arremeten con la integridad física y moral de otras. Es tarea de todos contribuir con la seguridad, para que pueda funcionar la justicia en este país. <Text style={styles.bold}>¡Denuncia!</Text></Text>     

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref]} 
          >Nitología. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.notilogia.com/como-hacer-una-denuncia-en-venezuela/')}>
          https://www.notilogia.com/como-hacer-una-denuncia-en-venezuela/</Text></Text>
             <Text style={[styles.ref, styles.marginBottom]} 
          >Denuncia.org 2021. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://denuncia.org/proceso-de-denuncia/')}>
          https://denuncia.org/proceso-de-denuncia/</Text></Text>
          

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