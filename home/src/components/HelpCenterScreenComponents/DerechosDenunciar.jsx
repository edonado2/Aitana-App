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

export const DerechosDenunciar = () => {
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
                    require("../images/denuncia2.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Información sobre Denuncias</Text> 
          <Text style={styles.title}>¿CONOCE CUÁLES SON TUS DERECHOS AL DENUNCIAR?</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Conocer tus derechos evitará abusos e irregularidades por parte de las autoridades encargadas de recibir tu denuncia e investigar tu caso.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Desde el momento en que presentas tu denuncia y durante todo el proceso penal, tenemos diversos derechos que deben ser reconocidos y garantizados por las autoridades que conozcan de nuestro caso. Recuerda que si las autoridades no garantizan estos derechos, tú podrás exigirlos.</Text>
          <Text style={[styles.subTitle2]}> DERECHOS EN EL PROCESO PENAL</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Estos son los derechos con los que cuentas al presentar tu denuncia:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• </Text> A recibir asesoría legal gratuita.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A ser informado de tus derechos.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A tener acceso a la carpeta de investigación y conocer el desarrollo del procedimiento penal.</Text> 
          <Text style={[styles.paragraph, styles.marginLeft]}><Text style={styles.bold}>• </Text> A coadyuvar con el ministerio público en las investigaciones.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A recibir atención médica y psicológica de forma gratuita o a ser canalizada a las instituciones que proporcionen estos servicios.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A presentar pruebas periciales de un médico particular.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> En delitos relacionados con violencia de género, a que la inspección corporal se realice con el consentimiento informado de la víctima y con respeto de sus derechos.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A la reparación del daño que sufriste al ser víctima de un delito.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> Al resguardo y protección de tu identidad y datos personales.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A solicitar medidas cautelares o de protección y que te sean brindadas de urgencia en caso de peligro inminente.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> Tienes el derecho de recibir medidas de compensación, satisfacción y no repetición por el daño sufrido.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A participar en los diálogos institucionales de formulación, implementación y seguimiento de política pública en materia penal</Text>  
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> En caso de desaparición de personas, a que las autoridades desplieguen las acciones pertinentes para su protección, con el objetivo de preservar, al máximo posible, la vida, la integridad física y la salud mental, y activar protocolos de búsqueda para dar con el paradero de la persona.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> En el caso de exhumaciones, los familiares de las víctimas tienen el derecho a estar presentes.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A nombrar a otro Asesor jurídico, cuando la víctima considere que se le está brindando asesoría deficiente.</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> Tienes derecho a recibir medidas de ayuda inmediata (emergencia médica, odontológica, quirúrgica y hospitalaria).</Text> 
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• </Text> A la inscripción en el Registro Nacional de Víctimas para tener acceso oportuno y efectivo a las medidas de ayuda, asistencia, atención, acceso a la justicia y reparación integral.</Text> 

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Denuncia.org 2021. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://denuncia.org/proceso-de-denuncia/conoce-tus-derechos')}>
          https://denuncia.org/proceso-de-denuncia/conoce-tus-derechos</Text></Text>
          

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