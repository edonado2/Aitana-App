import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from "@rneui/base";
import {
    NativeRouter,
    Route,
    Link,
    Routes
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import { SocialIcon } from '@rneui/base';


export const OrganosReceptoresDenuncia = () => {
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
        <ScrollView style={{}}>

        <View style={styles.container}>
          <Text style={styles.title}>Conoce las organizaciones a las que puedes solicitar ayuda en Venezuela </Text>
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:25}}></Text>

          <Text style={styles.paragraph}> Si es o ha sido agredido/a, o conoce a una persona víctima de violencia y desea ayudar, en la siguiente lista podrá consultar teléfonos y correos electrónicos de organizaciones que ofrecen primeros auxilios psicológicos y asistencia legal:</Text>

          <Link to="/HelpCenterScreenComponents/ApoyoPsicologico" style={{width:275, height:80, marginTop:35, borderRadius:20, alignSelf:"center"}}  >    
                <Card containerStyle={{width:"100%",height: 80, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#FFF",borderColor:"#745c98", padding:0, opacity:.96, backgroundColor:"#FFF"}} wrapperStyle={{}}>
                <Text style={styles.subTitle}>Apoyo Psicológico</Text>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Icon name="arrow-forward-outline" size={20} style={{position:"relative", bottom:52, left:85, color:"#745c98", backgroundColor:"#CEC0DA", paddingHorizontal:7, paddingVertical:7, borderRadius:50}} />
                </View> 
                
                </Card>  
                </Link>

              <Link to="/HelpCenterScreenComponents/ApoyoLegal" style={{width:275, height:80, marginTop:15, borderRadius:20, alignSelf:"center"}}  >    
                <Card containerStyle={{width:"100%",height: 80, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#FFF",borderColor:"#745c98", padding:0, opacity:.96, backgroundColor:"#FFF"}} wrapperStyle={{}}>
                <Text style={styles.subTitle2}>Apoyo Legal y Psicológico</Text>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Icon name="arrow-forward-outline" size={20} style={{position:"relative", bottom:52, left:85, color:"#745c98", backgroundColor:"#CEC0DA", paddingHorizontal:7, paddingVertical:7, borderRadius:50}} />
                </View> 
                
                </Card>  
                </Link>    

                <Link to="/HelpCenterScreenComponents/OrganosReceptores" style={{width:275, height:80, marginTop:15, borderRadius:20, alignSelf:"center"}}  >    
                <Card containerStyle={{width:"100%",height: 80, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#FFF",borderColor:"#745c98", padding:0, opacity:.96, backgroundColor:"#FFF"}} wrapperStyle={{}}>
                <Text style={styles.subTitle2}>Órganos receptores de denuncia</Text>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Icon name="arrow-forward-outline" size={20} style={{position:"relative", bottom:52, left:85, color:"#745c98", backgroundColor:"#CEC0DA", paddingHorizontal:7, paddingVertical:7, borderRadius:50}} />
                </View> 
                
                </Card>  
                </Link> 

                <Link to="/HelpCenterScreenComponents/VictimaNiño" style={{width:275, height:80, marginTop:15, borderRadius:20, alignSelf:"center", marginBottom:80}}  >    
                <Card containerStyle={{width:"100%",height: 80, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#FFF",borderColor:"#745c98", padding:0, opacity:.96, backgroundColor:"#FFF"}} wrapperStyle={{}}>
                <Text style={styles.subTitle2}>Cuando la víctima es un niño/a</Text>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Icon name="arrow-forward-outline" size={20} style={{position:"relative", bottom:52, left:85,color:"#745c98", backgroundColor:"#CEC0DA", paddingHorizontal:7, paddingVertical:7, borderRadius:50}} />
                </View> 
                
                </Card>  
                </Link>    
      
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
    marginTop:15
  },      
  backspace: {
    width:"100%", 
    height:50, 
    paddingLeft:20, 
    paddingTop:12
  },
  subTitle: {
    textAlign: "left",
    marginTop:5, 
    fontFamily:"OpenSans_700Bold", 
    lineHeight:20,
    letterSpacing:.8,
    fontSize:16,  
    width:"90%", 
    paddingVertical:25, 
    paddingLeft:30, 
    color:"#745c98"
  },
  subTitle2: {
    textAlign: "left", 
    marginTop:5, 
    fontFamily:"OpenSans_700Bold", 
    lineHeight:26,
    letterSpacing:.6,
    fontSize:16,  
    width:"74%", 
    paddingVertical:8, 
    paddingLeft:30, 
    color:"#745c98"
  },
  title: {
    fontFamily:"OpenSans_700Bold",
    letterSpacing:1.6, 
    fontSize:20, 
    marginBottom:12
  },
  paragraph: {
    fontSize:14, 
    lineHeight:26, 
    textAlign:"justify",
    letterSpacing:.2,
    fontFamily:"OpenSans_500Medium"       
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
