import { View, Text, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    Link
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
export const OrganosReceptores= () => {
  
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

        <Text style={styles.title}>ÓRGANOS RECEPTORES DE DENUNCIA</Text>
        <View>          
                <Image
                style={{ width: "100%", height: 230, marginTop:25, marginBottom:15}}
                resizeMode="cover"
                source={
                    require("../images/organosreceptores.jpg")
                }
                />
        </View>

        <View style={styles.container}>
               

          <Text style={styles.subTitle2}>1. Ministerio Público</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Es un órgano del Poder Ciudadano que tiene por objetivo actuar en representación del interés general y es responsable del respeto a los derechos y garantías constitucionales a fin de preservar el Estado, democrático y social de derecho y de justicia. Recibe denuncias las 24 horas del día.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Teléfono</Text>  0212 - 5098684 </Text>

          <Text style={[styles.subTitle2, styles.marginTop30]}>2. Defensoría del Pueblo</Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Su misión es la defensa y protección de los derechos humanos y demás derechos, garantías e intereses tutelados en esta Constitución y las leyes, ante hechos, actos u omisiones de la Administración; y el control del ejercicio de las funciones administrativas públicas.</Text>
          <Text style={[styles.paragraphLeft]}><Text style={styles.bold}>Teléfono</Text>  0212 - 5077071</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>Horario</Text> De lunes a viernes. 8:00 am - 2:00 pm</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}><Text style={styles.bold}>E-mail</Text>  atencionddp@defensoria.gov.ve  </Text>
        
          <Text style={[styles.subTitle2, styles.marginTop30]}>3. Comisión Nacional de Justicia de Género del Poder Judicial </Text>

          <Text style={[styles.paragraph, styles.marginTop15]}>Monitorea la administración de justicia y el Estado de derecho en Venezuela.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginBottom]}><Text style={styles.bold}>E-mail</Text>  buzonvcm@gmail.com    </Text>
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