import { View, Text, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    Link
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
export const ApoyoLegal= () => {
  
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

        <Text style={styles.title}>APOYO LEGAL Y PSICOLÓGICO</Text>
        <View >          
                <Image
                style={{ width: "100%", height: 230, marginTop:25}}
                resizeMode="cover"
                source={
                    require("../images/apoyolegal.jpg")
                }
                />
        </View>

        <View style={styles.container}>
               

          <Text style={styles.subTitle2}>1. Alianza Cepaz, Fundamujer y CEM-UCV</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Ofrecen asesoría legal a mujeres víctimas y a familiares y apoyo psicosocial. Brindan asesoría e información sobre las instituciones a las que se puede acudir en los casos de violencia contra la mujer.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Teléfonos de atención psicosocial</Text>  0412 - 3071273 / 0414 - 3281196 </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 8:00 am - 8:00 pm </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Teléfonos de atención legal</Text>  0424 - 1831025 / 0414 - 2812077 </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 7:00 am - 2:00 pm  </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>E-mail</Text>  fundamujervenezuela@gmail.com  </Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>2. Servicio de atención psicosocial de la Comisión para los Derechos Humanos y La Ciudadanía (Codehciu)</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Ofrecen servicios gratuitos de gestoría de casos, apoyo psicosocial y asesoría legal en el estado Bolívar.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0412 - 8782826 / 0426 - 1182327</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 8:00 am a 5:00 pm </Text>
        
          <Text style={[styles.subTitle2, styles.marginTop30]}>3. Voluntariado “Mayell Hernández”, de En Tinta Violeta</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Brindan atención telefónica psicolegal y acompañamiento físico para denuncias. Están en Caracas, Lara, Mérida, Yaracuy, Táchira, Sucre, Carabobo, Aragua, La Guaira, Nueva Esparta, y en la ciudad de Barcelona en Anzoátegui.  </Text>
          <Text style={[styles.paragraphLeft]}><Text style={styles.bold}>Teléfono</Text>   0416 - 6358486 (Atención 24 horas) / 0424 - 1527105 (llamadas) / 0412 - 6154839 (WhatsApp)</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De 6:00 am a 10:00 pm.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>E-mail</Text>  entintavioleta@gmail.com  </Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>4. Dilo Aquí</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Línea de emergencia. Asesoría legal de Transparencia Venezuela.</Text>
          <Text style={[styles.paragraphLeft, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0424 - 1981060</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De lunes a sábado. 8:00 am - 5:00 pm. </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginBottom]}><Text style={styles.bold}>E-mail</Text> denuncia@transparencia.org.ve</Text>
        
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