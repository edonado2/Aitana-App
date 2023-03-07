import { View, Text, Image, StyleSheet, onPress } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    NativeRouter,
    Route,
    Link,
    Routes
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';


export const Hostigamiento = () => {
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
                    require("../images/image6.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>HOSTIGAMIENTO</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}>El hostigamiento abarca una amplia gama de comportamientos ofensivos. Normalmente se entiende como una conducta destinada a perturbar o alterar. Según la RAE, hostigar es matar alguien o burlarse de él insistentemente. En el sentido jurídico, es el comportamiento que se encuentra amenazante o perturbador. El hostigamiento o acoso sexual se refiere a los avances sexuales de forma persistente, normalmente en el lugar de trabajo, donde las consecuencias de negarse son potencialmente muy perjudiciales para la víctima.</Text>

          <Text style={styles.subTitle2}>TIPOS DE HOSTIGAMIENTO</Text>
          <Text style={styles.paragraph}>Hay una serie de conductas abusivas que entran en esta categoría.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• El acoso escolar. </Text> El acoso que puede ocurrir en el patio o cualquier otro lugar de la escuela (puede ser acoso sexual o acoso verbal). Por lo general, física y psicológica de una conducta de acoso perpetrado contra un individuo, por una o más personas. En los últimos años el acoso en el lugar de trabajo y en las escuelas ha salido a la luz como mucho más graves y generalizados que se pensaba.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• El acoso psicológico. </Text> Este tipo de acoso es un comportamiento humillante, intimidatorio o abusivo que es a menudo difícil de detectar sin dejar evidencia de que no sea víctima de los informes o quejas, lo característico de una persona disminuye la autoestima o les causa tormento. Esto puede tomar la forma de comentarios verbales, episodios de ingeniería de intimidación, acciones agresivas o gestos repetidos. Entran en esta categoría es el acoso laboral por individuos o grupos de mobbing. </Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• El hostigamiento racial. </Text> La selección de un individuo por su raza u origen étnico. El acoso puede incluir palabras, obras y acciones que están específicamente diseñados para hacer que el objetivo de sentirse degradado debido a su raza u origen étnico.</Text>          
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Acoso físico o stalking. </Text> Los siguientes no autorizados y la vigilancia de una persona, en la medida en que la privacidad de la persona es inaceptable intromisión en, y la víctima teme por su seguridad.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Acoso laboral. </Text> Violencia cometidos directa o indirectamente por un grupo vagamente afiliadas y organizada de los individuos para castigar o incluso ejecutar a una persona por algún presunto delito sin un juicio legal. El "delito" puede variar de un delito grave como el asesinato a la simple expresión de actitudes no deseadas étnicas, culturales o religiosas. La cuestión de la culpabilidad real de la víctima o la inocencia suele ser irrelevante para la mafia, ya que la turba por lo general se basa en afirmaciones que no son verificables, sin fundamento, o fabricado por completo.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Ciberacoso. </Text> El uso de herramientas electrónicas como el correo electrónico o mensajería instantánea para hostigar o abusar de una persona o personas. También puede incluir particularmente intensa y / o coordinadas incidentes de arrastre, sobre todo cuando se repiten y se dirigen específicamente a una sola persona o grupo.</Text>

        
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Wikipedia. Última edición: 20 oct 2022. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://es.wikipedia.org/wiki/Hostigamiento#Tipos_de_hostigamiento')}>
            https://es.wikipedia.org/wiki/Hostigamiento#Tipos_de_hostigamiento</Text></Text>
          

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