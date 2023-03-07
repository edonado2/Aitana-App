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

export const Articulo3 = () => {
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
          <Text style={styles.title}>Violencia De Género Desde La Salud Mental</Text>
          <Text style={styles.subTitle}>Clínica San Pablo S.A</Text>
        <View >          
                <Image
                style={{ width: "85%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo3.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Violencia De Género Desde La Salud Mental</Text>

        <View style={styles.container}>
          <Text style={[styles.paragraph]}> “Según la ONU Mujeres en su espacio de hechos y cifras: Acabar con la violencia contra mujeres y niñas reporta que en el mundo aproximadamente el 35% de las mujeres ha sido víctima de algún tipo de violencia física y/o sexual en algún momento de su vida”.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En la gran mayoria de los casos, el estado emocional de las personas que han vivido algún tipo de maltrato o abuso, ya sea mental, físico o sexual, se afecta a tal punto que la víctima de estas situaciones puede llegar a experimentar algún trastorno o enfermedad mental. La víctima usualmente se sienta afligida, vulnerada y presenta una baja autoestima: por lo tanto, hablar abiertamente de su situación se les dificulta. Incluso, en algunas ocasiones, la persona puede sentirse avergonzada o manifestar ser culpable de su circunstancia producto del trauma psicológico. En este sentido, es clave que las personas que han sufrido de algún tipo de violencia tengan acceso a una atención integral por parte de un profesional de la salud mental. Igualmente, que se les facilite espacios de confianza, de respeto y de seguridad. Esto con el objetivo de que la persona se sienta comoda, protegida y se logre una recuperación efectiva.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Los trastornos más comunes en las personas que son victimas de violencia son: la depresión, la ansiedad, el estrés post-traumático, los ataques de pánico, el abuso de alcohol, el abuso de sustancias psicoactivas, entre otros. En los casos más extremos se puede llegar a evidenciar comportamientos suicidas o episodios psicóticos. En este sentido, para la recuperación de la persona víctima de violencia de género es importante la detección temprana de la situación, pues le permitirá una atención en salud mental oportuna y el acceso a un tratamiento adecuado. La detección temprana se logra con un equipo de profesionales que tengan la experiencia en el manejo de está situación, al igual que a tráves de una adecuada red de apoyo de la persona.</Text>

          <View >          
                <Image
                style={{ width: "95%", height: 200, alignSelf:"center", marginTop:25}}
                resizeMode="cover"
                source={
                    require("../images/articulo3-2.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Red de ayuda para las personas que son victimas de violencia </Text>

          <Text style={[styles.paragraph, styles.marginTop22]}> La red de apoyo de una víctima de violencia de género es fundamental, ya que la persona se debe sentir comoda, protegida y escuchada. Inmediatamente una persona indica que está sufriendo de violencia de genero, lo primero que se debe hacer es construir con ella lazos de confianza; la persona debe sentir que se puede expresar sin ser juzgada ni discriminada. También se le debe dar credibilidad a sus emociones. Muchas veces la persona no busca ayuda por miedo a lo que los demás piensen de su situación, a la discriminación que pueden sufrir, o en otros casos, porque cuando expresa su situación nadie le cree o le resta importancia a lo sucedido. Las víctimas, sean mujeres o hombres, merecen respeto, acceso a una atención oportuna y apoyo psicológico. No ignoremos que necesitan ayudan y apoyo.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
          <Text style={[styles.ref, styles.marginBottom]} 
          >Clínica San Pablo S.A. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.clinicasanpablo.co/educando/hablemos-de-salud-mental/violencia-de-genero-desde-la-salud-mental')}>
          https://www.clinicasanpablo.co/educando/hablemos-de-salud-mental/violencia-de-genero-desde-la-salud-mental</Text></Text>
          

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