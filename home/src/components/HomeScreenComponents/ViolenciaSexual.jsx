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

export const ViolenciaSexual = () => {
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
                    require("../images/image5.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>VIOLENCIA SEXUAL</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> Cuando hablamos de violencia sexual, nos referimos a malos tratos sexuales, o sea, a relaciones sexuales no consentidas, forzadas o impuestas al otro. También se aplica a prácticas sexuales humillantes, de vejación o que ocasionen dolencias físicas o riesgo para la vida, incluso si se llevan a cabo entre adultos que consienten.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Este tipo de acciones violentas pueden realizarse con el propio cuerpo o con objetos. Pueden ocurrir dentro o fuera de una relación afectiva o familiar, y suelen ir acompañados de otras formas de maltrato, como el psicológico, verbal y emocional.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> El maltrato hacia la mujer, o hacia los homosexuales o transgéneros también es una forma de violencia sexual, que usualmente va acompañada de violaciones “correctivas” (sobre todo en el caso de los homosexuales) o de humillaciones, escarnio y otras formas de trauma emocional, físico y psicológico.</Text>

          <Text style={styles.subTitle2}>MANERAS DE RESPONDER AL CONTACTO SEXUAL NO DESEADO</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si estás bajo presión para a tener una actividad sexual que no desea, estos consejos de RAINN (Red Nacional de Violación, Abuso e Incesto, por sus siglas en inglés) pueden ayudarle a salirse de forma segura de la situación.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Recuerde que no es su culpa.</Text> No tiene obligación de actuar de una manera en la que no está de acuerdo. La persona que la está presionando es la responsable.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Confíe en sus instintos. </Text> Si algo no parece estar bien o le incomoda, confíe en lo que siente.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Está bien dar excusas o mentir para que pueda salirse de la situación.</Text>  No se sienta mal de hacerlo. Puede decirlo que se sintió enferma de repente, tiene que atender una emergencia familiar o que solo necesita ir al baño. Si puede, llame a un amigo.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Busque una vía de escape.</Text>  Busque la puerta o ventana más cercana para que pueda salir rápidamente. Si hay gente cerca, piense cómo llamar su atención. Piense a dónde ir después. Haga lo que sea para estar a salvo.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Piense con anticipación acerca de una palabra o código especial con un amigo o familiar.</Text>  Así, puede llamarlos y decirles la palabra, código o oración si se encuentra en una situación en la que no quiere estar.</Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> No importa lo que pase. Nada de lo que haya hecho o dicho causó la agresión. No importa lo que haya estado usando, bebiendo, o haciendo, incluso si estaba coqueteado o besando, no es su culpa. Su comportamiento antes, durante y después del incidente no cambia el hecho de que el perpetrador es el culpable.</Text>
        
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Biblioteca Nacional de Medicina. MedlinePlus . Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://medlineplus.gov/spanish/ency/article/001955.htm')}>
            https://medlineplus.gov/spanish/ency/article/001955.htm</Text></Text>
          

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
        fontFamily:"OpenSans_700Bold"
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