import { View, Text, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    Link
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
export const ApoyoPsicologico = () => {
  
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View>
      <Text style={styles.backspace}>
        <Link to="/OrganosReceptoresDenuncia" style={{width:27, height:27, borderRadius:50}}>
          <Text  style={{}}>
            <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView >

        <Text style={styles.title}>APOYO PSICOLÓGICO</Text>
        <View >          
                <Image
                style={{ width: "100%", height: 230, marginTop:25}}
                resizeMode="cover"
                source={
                    require("../images/apoyopsicologico.jpg")
                }
                />
        </View>

        <View style={styles.container}>
               

          <Text style={styles.subTitle2}>1. Línea PsicoApoyo Por Nosotras</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Brinda primeros auxilios psicológicos a mujeres víctimas de violencia y orientación a personas que deseen saber cómo ayudar a quienes pasan por esta situación. La llamada es anónima, confidencial y gratuita.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text> 0212 - 4145114. Marcar la Opción 1</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De martes a sábado. 8:00 am - 8:00 pm </Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>2. PsicoApoyo AVESA</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Psicólogas formadas brindan atención psicológica en las modalidades presencial, virtual y telefónica a mujeres que vivan o hayan vivido violencia basada en género</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0424 - 1659742 (texto SMS o WhatsApp)</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De lunes a viernes. 8:00 am - 8:00 pm </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Presencial en Caracas:</Text> Av. Libertador. Edf. La Línea. Torre A. Piso 10. Oficina 104-A. Urb. Los Caobos. </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}>De lunes a jueves, de 9:00 am a 1:00 pm. Es un servicio gratuito y confidencial, al que se accede previa cita escribiendo al correo o al teléfono.</Text>
        
          <Text style={[styles.subTitle2, styles.marginTop30]}>3. Línea de ayuda psicológica de la Federación de Psicólogos de Venezuela </Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Ofrece primeros auxilios psicológicos e intervención en crisis por teléfono. </Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0212-416.31.16 / 0212-4163118</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> A partir de los viernes desde las 8:00 am, hasta los miércoles a las 8:00 am.  </Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>4. Servicio de atención psicosocial de la Comisión para los Derechos Humanos y La Ciudadanía (Codehciu) </Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Atención privada y gratuita vía telefónica.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text> 0412 - 1850266</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 8:00 am a 5:00 pm </Text>
        
        <Text style={[styles.subTitle2, styles.marginTop30]}>5. Médicos Sin Fronteras</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Servicio de Atención Nacional a la Víctima (SALVA).</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text> 0414 - 0179925</Text>


          <Text style={[styles.subTitle2, styles.marginTop30]}>6. Unidad de Atención Psicológica de PLAFAM</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Ofrece servicios psicológicos especializados en salud sexual y reproductiva, con énfasis en la prevención y atención de casos de violencia contra las mujeres.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text> 0412 - 2273712 (texto SMS o llamada telefónica)</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 9:00 am a 5:00 pm. </Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>E-mail</Text>  coordinacion.uap@gmail.com</Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>7. Línea de la organización civil Mulier Venezuela</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Atención psicológica gratuita.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15, styles.marginBottom]}><Text style={styles.bold}>Teléfono</Text> 0414 - 6254125</Text>
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
        marginTop:20
      },      
      backspace: {
        width:"100%", 
        height:50, 
        paddingLeft:20, 
        paddingTop:12
      },
      subTitle2:{
        fontFamily:"OpenSans_700Bold",
        fontSize:20, 
        marginBottom:12,
        lineHeight:30, 
        letterSpacing:1.2     
      },
      title: {
        fontFamily:"OpenSans_700Bold",
        letterSpacing:1.6, 
        fontSize:24, 
        marginTop:7, 
        marginTop:10,
        marginLeft:20
      },
      paragraph: {
        fontSize:14, 
        lineHeight:26, 
        textAlign:"justify",
        letterSpacing:.2,
        fontFamily:"OpenSans_500Medium"       
      }, 
      paragraphLeft: {
        fontSize:14, 
        lineHeight:26, 
        textAlign:"left",
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
        color:"#745c98"
      },
      link: {
        color:"#109dfa", 
        textDecorationLine:"underline"
      },
      marginTop15: {
        marginTop:15
      },
      marginTop30: {
        marginTop:30
      },
      marginBottom: {
        marginBottom:75
      },
      marginLeft: {
        marginLeft: 8
      }
});