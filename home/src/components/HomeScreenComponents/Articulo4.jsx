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

export const Articulo4 = () => {
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
          <Text style={styles.title}>¿Cuáles son las consecuencias de la violencia en la crianza?</Text>
          <Text style={styles.subTitle}>UNICEF para cada infancia</Text>
        <View >        
                <Image
                style={{ width: "85%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo4.jpg")
                }
                />
                
                
        </View>
        <Text style={styles.leyenda}>Violencia en la crianza de los niños, una cruda realidad.</Text>
        <View style={styles.container}>
          <Text style={[styles.paragraph]}> En mayor o menor medida, la violencia siempre deja huellas en niños, niñas y adolescentes, pero ¿de qué forma los afecta cada tipo de violencia?</Text>
          <Text style={[styles.subTitle2]}>¿QUÉ LE PASA A NIÑOS, NIÑAS Y ADOLESCENTES CUANDO RECIBEN CASTIGOS FÍSICOS?</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En un primer momento experimentan miedo o terror frente al golpe. Los niños, niñas y adolescentes al recibir castigos físicos sienten el temor llevado al grado máximo, es decir, terror. Esto ocurre minutos o segundos antes de recibir el golpe, cuando anticipan lo que va a acontecer.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Después del golpe no solo sienten un dolor físico, sino emocional. El sentimiento de impotencia surge luego, como resultado del dolor emocional que resulta de no poder modificar la ira, el enojo o la frustración que siente su madre, padre o cuidador. Niños, niñas y adolescentes sienten que nada de lo que puedan hacer en ese momento hará cambiar la opinión de las personas adultas a su cargo sobre él o ella, o sobre lo ocurrido.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Para sobreponerse de esta experiencia, niños, niñas y adolescentes desarrollan mecanismos de adaptación a la violencia, como la obediencia extrema o comportamientos violentos.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En cualquiera de los dos casos se ubican en algún lugar del círculo de la violencia: víctima o agresor. Estas experiencias trascienden el mundo familiar y se amplían a la escuela y la comunidad. Niños, niñas y adolescentes aprenderán que los problemas deben enfrentarse con violencia y podrá aplicar esta enseñanza a otros ámbitos de su vida. La persistencia de estas conductas acaba generando una sociedad violenta, que utiliza estos mecanismos para resolver los conflictos.</Text>
          <Text style={[styles.subTitle2]}>¿QUÉ LE PASA A NIÑOS, NIÑAS Y ADOLESCENTES CUANDO SUS PADRES O CUIDADORES LOS HUMILLAN O INSULTAN? </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Los seres humanos construimos nuestro pensamiento a partir del lenguaje. En este proceso, los vínculos familiares son fundamentales al momento de ir aprendiendo palabras y construyendo significados.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Como esto se da en un contexto afectivo, niños, niñas y adolescentes confían y creen en lo que sus padres y cuidadores dicen. Por lo tanto, si se usan palabras humillantes para educarlos o ponerles límites, los hijos e hijas pensarán que estas palabras realmente los definen como personas.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Aunque algunas madres y algunos padres creen que insultar no es igual que golpear, las palabras fuertes y humillantes generan los mismos sentimientos de dolor emocional, frustración e impotencia que el castigo físico en las personas.</Text>
          <Text style={[styles.paragraph]}> La violencia física o psicológica no enseña a “portarse bien”, sino a evitar el castigo. Por ese camino, los niños, niñas y adolescentes solo aprenden qué tienen que hacer para no enojar a la persona adulta que incurre en estas prácticas.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Además, la exposición a situaciones de violencia puede alterar el desarrollo fisiológico del cerebro y repercutir en el crecimiento físico, cognitivo, emocional y social del niño, niña o adolescente.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
          <Text style={[styles.ref, styles.marginBottom]} 
          >UNICEF para cada infancia. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.unicef.org/uruguay/historias/cuales-son-las-consecuencias-de-la-violencia-en-la-crianza')}>
          https://www.unicef.org/uruguay/historias/cuales-son-las-consecuencias-de-la-violencia-en-la-crianza</Text></Text>
          

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
    marginTop:5
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