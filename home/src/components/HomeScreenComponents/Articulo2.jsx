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

export const Articulo2 = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View style={{borderBottomColor:"#00000026", borderBottomWidth:1.2}}>
      <Text style={styles.backspace}>
        <Link to="/HomeScreenComponents/Articulos" style={{width:27, height:27, borderRadius:50}}>
          <Text  style={{}}>
            <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView >
          <Text style={styles.title}>Maltrato: la violencia de todos los días</Text>
          <Text style={styles.subTitle}>Revista ¿Cómo ves?</Text>
        <View >          
                <Image
                style={{ width: "85%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo2.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Maltrato: la violencia de todos los días</Text>
        <View style={styles.container}>
          <Text style={[styles.paragraph]}> Cuando pensamos en violencia, por lo general la asociamos con la rudeza, la brutalidad y el crimen de los que nos informan los medios. Sin embargo, muchas veces pasamos por alto otros tipos de violencia, más cercanos y cotidianos. Y aunque aquellos extremos sean un motivo real de preocupación, que incluso puede estar afectando nuestra vida y actividades diarias, estas otras formas de violencia son igualmente perjudiciales, al grado de situarse como uno de los posibles factores que desencadenan la violencia mayor.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> De acuerdo con la Organización Mundial de la Salud (OMS), "la violencia es una de las principales causas de muerte, a nivel mundial, para las personas de entre 15 y 44 años". A la violencia se le atribuyen, en promedio, el 14% de las defunciones de varones y el 7% de mujeres. Y por cada persona fallecida como resultado de la violencia extrema, existen muchas otras que padecen consecuencias derivadas de violencia física o psicológica en forma de abuso, maltrato o intimidación infantil, violencia doméstica y de género, acoso laboral y discriminación social.</Text>

          <View >          
                <Image
                style={{ width: "95%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo2-2.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Alerta y conducta ante signos de maltrato</Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> El origen de las conductas violentas en los humanos ha sido un tema importante de investigación en filosofía, sociología, biología, psicología y psiquiatría. En fechas más recientes, se han sumado a este esfuerzo la neurobiología y la neurofisiología, que buscan en el cerebro las claves para estudiar y prevenir la violencia. Con ayuda de estas disciplinas, junto con novedosas herramientas que permiten obtener imágenes cerebrales, se han conseguido avances, pero todavía hay muchas incógnitas sobre este fenómeno. Una de ellas es si la violencia es inherente a los humanos, o se adquiere culturalmente.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Así, por ejemplo, en el siglo XVIII, Jean-Jacques Rousseau afirmaba que el hombre es bueno por naturaleza y que la "civilización artificial" es la que lo corrompe. Por el contrario, pensadores como Thomas Hobbes, Sigmund Freud y el premio Nobel de Medicina Konrad Lorenz han sostenido que el humano es naturalmente agresivo y egoísta, y esto sólo se contiene con la cultura. Esta controversia aún no ha podido zanjarse, pero muchas evidencias apuntan a que, como siempre, parece existir la doble influencia de la naturaleza y el medio</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Para bien y para mal La doctora Feggy Ostrosky, directora del Laboratorio de Neuropsicología y Psicofisiología de la Facultad de Psicología de la UNAM (FPSI-UNAM), y experta en las bases biológicas de la violencia humana, señala que "nacemos con una predisposición a la agresión, para posteriormente aprender cuándo podemos y debemos expresar o inhibir estas tendencias". Agrega que la perspectiva biológica nos indica que "la agresión es inherente al ser humano como medio de supervivencia"; un comportamiento con fines de adaptación, seleccionado durante la evolución.</Text>
          <Text style={[styles.paragraph]}> Las bases biológicas de la conducta agresiva están reguladas por ciertas estructuras cerebrales y por los mensajeros neuronales: las hormonas y los neurotransmisores. Feggy Ostrosky precisa que estos mensajeros no producen por sí mismos la conducta agresiva, por lo que aquí entra la importancia del aprendizaje social en la modulación o en la manifestación de esta conducta.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> La agresividad no necesariamente es violencia. En palabras de la doctora Ostrosky, la agresión incluso puede ser positiva, cuando se trata de una "reacción espontánea y breve para protegernos de algún peligro que nos acecha". En este sentido, la agresión "positiva" cumple con una importante función biológica y evolutiva. Por el contrario, la agresión negativa, o violencia, según la define la OMS, es "el uso intencional de la fuerza física o del poder, en los hechos o como amenaza, en contra de uno mismo, de otra persona o de un grupo o comunidad, y que tiene como resultado una alta probabilidad de producir, lesiones, muerte, daño psicológico, problemas en el desarrollo o privaciones".</Text>

          <View >          
                <Image
                style={{ width: "95%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo2-3.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Consecuencias del maltrato en la vida adulta</Text>


          <Text style={[styles.paragraph, styles.marginTop15]}> Además del miedo, que nos obliga a enfrentar la conocida disyuntiva de huir o atacar, el enojo es una emoción que dispara nuestra agresión. Enojarse de vez en cuando es totalmente natural; cierta cantidad de enojo es necesaria para la supervivencia, y bien canalizada nos puede impulsar a actuar asertivamente para resolver un problema. No obstante, el enojo crónico es perjudicial y a veces oculta otras emociones. Si el enojo pasa de ser un sentimiento ocasional a formar parte de la personalidad, puede convertirse en hostilidad. Igualmente, cuando no logramos "sacar" o expresar nuestro enojo de manera saludable por medio de la comunicación, y preferimos ocultarlo o tratar de suprimirlo, puede transformarse en agresión pasiva, esto es, una conducta donde los sentimientos de agresión no se expresan abiertamente, sino a través del resentimiento, la testarudez y el culpar a otros para evitar la propia responsabilidad.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Hay que subrayar la importancia de que el enojo se exprese de manera saludable, pues si es extremo e incontrolado puede desencadenar ira. Y esta emoción excesiva fácilmente conduce a la violencia.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
          <Text style={[styles.ref, styles.marginBottom]} 
          >Revista de Divulgación de la Ciencia. ¿Cómo ves?. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.comoves.unam.mx/numeros/articulo/143/maltrato-la-violencia-de-todos-los-dias')}>
          https://www.comoves.unam.mx/numeros/articulo/143/maltrato-la-violencia-de-todos-los-dias</Text></Text>
          

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
    marginTop:25
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
    fontSize:16,
    alignSelf:"center"
  },
  subTitle2:{
    fontFamily:"OpenSans_700Bold",
    fontSize:20, 
    marginTop:15,
    marginBottom:12,
    lineHeight:30
  },
  title: {
    fontFamily:"OpenSans_700Bold", 
    letterSpacing:1.6, 
    fontSize:20, 
    marginTop:40, 
    marginBottom:6,
    textAlign:"center",
    width:"87%",
    alignSelf:"center"
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
  leyenda: {
    width:"80%",
    fontSize:12,
    alignSelf:"center",
    fontFamily:"OpenSans_500Medium",
    marginTop:5, 
    marginBottom:10
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