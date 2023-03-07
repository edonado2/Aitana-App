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

export const Articulo1 = () => {
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
          <Text style={styles.title}>Violencia de género en Latinoamérica: Estrategias para su prevención y erradicación</Text>
          <Text style={styles.subTitle}>Universidad del Zulia</Text>
        <View >          
                <Image
                style={{ width: "85%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo1.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Violencia de género en Latinoamérica</Text>

        <View style={styles.container}>
          <Text style={styles.paragraph}> El género ha sido determinado social y culturalmente como la categoría que permite identificar lo femenino de lo masculino, y los roles que se establecen para cada sexo. De acuerdo al informe de la Organización Mundial de la Salud (OMS, 2013) el 35% de las mujeres del mundo han sido víctimas de violencia física y/o sexual por parte de su pareja o de violencia sexual por parte de otros sujetos distintos de ésta.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> La Organización de las Naciones Unidas, ONU Mujeres (2017) reporta en informe de resultados globales, que en el mundo mujeres y niñas enfrentan acoso sexual y violencia en espacios públicos, en el transporte público, en las calles, lugares de recreación (parques), mercados, tanto en países en desarrollo como desarrollados, en sus diferentes zonas. En Latinoamérica, se han establecido políticas públicas, reformas legislativas, acciones y programas de organización social tanto públicas como privadas, con el fin de evaluar, monitorear así como establecer medidas y estrategias para la prevención y erradicación de la violencia contra la mujer.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> No obstante, los reportes institucionales en los diferentes Estados de la región reflejan que la problemática aún persiste. En Ecuador, la encuesta nacional sobre relaciones familiares y violencia de género contra las mujeres, realizada por el Instituto Nacional de Estadísticas y Censo (INEC, 2019), reportó una violencia total nacional de 64,9%, urbano 65,7% y rural 62,8%.</Text>

          <View >          
                <Image
                style={{ width: "95%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo1-2.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>La violencia de género, una lacra que golpea a las mujeres de toda América Latina</Text>


          <Text style={[styles.paragraph, styles.marginTop15]}> En Colombia, el Boletín Epidemiológico (2019) Violencia contra las mujeres, emitido por el Instituto Nacional de Medicina Legal y Ciencias Forenses (INMLCF, 2019), demuestra dentro de la violencia fatal contra la mujer 138 homicidios, como violencia no fatal intrafamiliar 2.471, presunto delito sexual 3.263, violencia interpersonal 5.501, violencia de pareja 5,877. En la realidad venezolana, la obtención de datos sobre la Violencia contra las Mujeres continúa siendo una limitación grave para la comprensión del problema, así como para diseñar estrategias asertivas, para conocer su magnitud y alcance, sin embargo, el Ministerio Público, 2007-2008 reporta en porcentaje de actos violentos un total de 1.066,70% (Marcano y Palacios, 2017).</Text>
          <Text style={[styles.paragraph]}> En Perú, la Encuesta Demográfica y de Salud Familiar (Instituto Nacional de Estadística e Informática [INEI], 2018), reporta que “el 63,2% de mujeres fueron víctimas de violencia ejercida alguna vez por el esposo o compañero, siendo mayor en las residentes en el área urbana (63,3%) y en aquellas mujeres con educación secundaria (69,4%)” (p.287). A nivel de México, la violencia contra la mujer registra un 66,1% (Instituto Nacional de Estadísticas y Geografía [INEGI], 2017), en este caso las mujeres han sufrido al menos un incidente de violencia emocional, económica, física, sexual o discriminación a lo largo de su vida en al menos un ámbito así como ejercida por cualquier agresor.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Cerrando con Argentina, donde el Registro único de casos de violencia contra las mujeres en los periodos 2013-2018, refleja la violencia contra las mujeres con edad comprendida de 18 años y más, al igual que mantenían vínculo con su agresor en un 67,9%, de acuerdo con el Instituto Nacional de Estadísticas y Censo, República Argentina (INDEC, 2019) a través de la Dirección Nacional de Estadísticas Sociales y de Población.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Respecto a ello, las cifras reportadas a través de los años por los organismos internacionales deben ser atendidas con carácter prioritario. Aun cuando los Estados de la región han realizado un importante trabajo, para garantizar y resguardar los derechos de mujeres, niñas y adolescentes, se recibe de manera permanente información alarmante sobre Estados que enfrentan desafíos, dificultades, para dar una respuesta efectiva al problema social de discriminación, desigualdad y violencia contra mujeres, niñas y adolescentes (Comisión Interamericana de Derechos Humanos [CIDH], 2019).</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En Perú, la Encuesta Demográfica y de Salud Familiar (Instituto Nacional de Estadística e Informática [INEI], 2018), reporta que “el 63,2% de mujeres fueron víctimas de violencia ejercida alguna vez por el esposo o compañero, siendo mayor en las residentes en el área urbana (63,3%) y en aquellas mujeres con educación secundaria (69,4%)” (p.287). A nivel de México, la violencia contra la mujer registra un 66,1% (Instituto Nacional de Estadísticas y Geografía [INEGI], 2017), en este caso las mujeres han sufrido al menos un incidente de violencia emocional, económica, física, sexual o discriminación a lo largo de su vida en al menos un ámbito así como ejercida por cualquier agresor.</Text>

          <Text style={styles.subTitle2}>ESTRATEGIAS PARA LA PREVENCIÓN Y ERRADICACIÓN DE LA VIOLENCIA CONTRA LA MUJER EN LATINOAMÉRICA</Text>

          <View >          
                <Image
                style={{ width: "95%", height: 200, alignSelf:"center", marginTop:15}}
                resizeMode="cover"
                source={
                    require("../images/articulo1-3.jpg")
                }
                />
        </View>
        <Text style={styles.leyenda}>Estrategias para la prevención de la violencia contra la mujer en Latinoamérica</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}> La situación de la violencia contra la mujer a nivel mundial, preocupa a todos los sujetos involucrados, no sólo al Estado y Organismos Internacionales, sino también a la sociedad en general, las consecuencias que provoca son de tal magnitud que los costos para los gobiernos y para las víctimas causan daños muchas veces irreparables; ningún tipo de violencia es aceptable, sin embargo, la violencia de género, por los graves daños que esta genera (físicos, biológicos, psicológicos, sociales, culturales, entre otros) ha sido motivo de alertas y llamados a su prevención, sanción y erradicación.</Text>
          <Text style={[styles.paragraph]}> Históricamente, se ha considerado que la mujer ha estado limitada en sus derechos, libertades, decisiones y oportunidades, en el ámbito social, económico, político, y cultural; las repercusiones del Covid-19 le han afectado en el presente y le afectarán en el futuro desde muchos aspectos (Rodríguez, 2020). En este sentido, De Monserrat (2008) señala que: “no cabe sino afirmar que la violencia de que es objeto la mujer, a través de sus diversas manifestaciones, es un asunto prioritario para los Estados, para la sociedad civil, y debería constituirse para cada hombre y mujer” (p.1046).</Text>
          <Text style={[styles.paragraph]}> De ello deriva la obligación impuesta a los Estados, plasmada en los diferentes instrumentos internacionales; de tomar todas las acciones pertinentes, que involucran revisar las leyes cuyos contenidos sean discriminatorios en el ámbito social, cultural, y laboral. Enfocados al cambio de conciencia, conductas y pensamientos basados en estos factores de desigualdad.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Por tanto, la principal propuesta de solución para la prevención y erradicación de este problema, es emplear estrategias en beneficio de las mujeres, que fomenten su acceso a la educación, trabajo y participación ciudadana. Así pues, es relevante examinar las estrategias adoptadas en la región, que van desde el estudio y diagnóstico de la situación, legislación, así como políticas públicas en los diferentes ámbitos.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Universidad del Zulia. 09 Septiembre 2021. Derecho Penal. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://www.redalyc.org/journal/280/28065077021/html/')}>
          https://www.redalyc.org/journal/280/28065077021/html/</Text></Text>
          

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
    marginTop:35,
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