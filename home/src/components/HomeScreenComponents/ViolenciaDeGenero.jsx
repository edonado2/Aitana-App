import { View, Text, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    Link
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
export const ViolenciaDeGenero = () => {
  
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View>
      <Text style={styles.backspace}>
        <Link to="/" style={{width:27, height:27, borderRadius:50}}>
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
                    require("../images/image2.jpg")
                }
                />
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Tipos de Violencia</Text> 
          <Text style={styles.title}>VIOLENCIA DE GÉNERO</Text>
               
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:30}}></Text>

          <Text style={styles.paragraph}> La violencia de género es la violencia que ejerce una persona sobre otra solo por su género. Las acciones violentas son todas las que afectan de forma negativa la identidad, la sexualidad y libertad reproductiva, la salud física y mental y el bienestar social de una persona.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> En muchas legislaciones, el concepto de violencia de género se aplica a la violencia ejercida hacia las mujeres. Este tipo de violencia incluye dinámicas de dominación, amenazas y la privación arbitraria de las libertades políticas y civiles en el ámbito social, doméstico, político o laboral.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Entre los actos más aberrantes de violencia de género están: el infanticidio femenino, las violaciones, la prostitución forzada, los abortos en función del sexo del no nato, la violencia contra las prostitutas, la mutilación genital, el tráfico de personas, el acoso y hostigamiento dentro de organizaciones, la violencia doméstica.</Text>

          <Text style={styles.subTitle2}>CAUSAS DE LA VIOLENCIA DE GÉNERO</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• Estereotipos de género. </Text> La diferencia de roles que se impone a los individuos según su género genera actitudes de discriminación e intolerancia dentro de los diferentes ámbitos de una sociedad. Este trato desigual que se da hacia los individuos según su género puede traer situaciones de violencia.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Prejuicios culturales.</Text> La ideología machista prolifera la idea de la superioridad masculina y la primacía sobre las personas de otro género. El machismo utiliza la violencia como un mecanismo de control, estos patrones de conducta suelen ser transmitidos de generación en generación.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• Deseos de poder y dominación. </Text> Individuos del género masculino ejercen violencia sobre personas de otro género para afianzar su autoridad y su creencia de superioridad.</Text>

          <Text style={styles.subTitle2}>CONSECUENCIAS DE LA VIOLENCIA DE GÉNERO</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text style={styles.bold}>• En la salud física. </Text> En la salud física. Puede producir lesiones físicas leves o graves y hasta la muerte de la víctima. Principales lesiones: quemaduras, traumatismos, contusiones, empeore de enfermedades preexistentes.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• En la salud mental. </Text> Puede producir daños emocionales irreversibles en la víctima. Principales consecuencias: baja autoestima, inestabilidad emocional, ansiedad, trastornos alimenticios o de sueño, estrés postraumático, depresión, intento de suicidio.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• En la salud reproductiva. </Text> Las relaciones sexuales forzadas pueden traer como consecuencia enfermedades de trasmisión sexual, embarazos no deseados. La violencia en mujeres embarazadas puede llevar a abortos espontáneos.</Text>
          <Text style={[styles.paragraph, styles.marginTop22, styles.marginLeft]}><Text style={styles.bold}>• En la salud social. </Text> Puede producir aislamiento social de la víctima, deterioro en las relaciones sociales. Una de las consecuencias de la violencia doméstica es la exposición de niños y niñas de la familia a situaciones de violencia.</Text>
        
                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >Editorial Etecé. Última edición: 1 octubre, 2020. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://concepto.de/violencia-de-genero/#ixzz7kTOAf5Rr')}>
             https://concepto.de/violencia-de-genero/#ixzz7kTOAf5Rr</Text></Text>
          

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