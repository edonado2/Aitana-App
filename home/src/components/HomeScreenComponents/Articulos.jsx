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
import { Card } from "@rneui/base";
import { SocialIcon } from '@rneui/base';

export const Articulos = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View style={{borderBottomColor:"#00000026", borderBottomWidth:1.2, flexDirection:"row"}}>
      <Text style={styles.backspace}>
        <Link to="../" style={{width:27, height:27, borderRadius:50}}>
          <Text >            
          <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
        <Text style={styles.header}>
          Artículos sobre Violencia
        </Text>
      </View>
        <ScrollView style={{backgroundColor:"#F2F2F2"}}>
          
        <Link to="/HomeScreenComponents/Articulo1" style={{width:318, height:280, marginTop:35, borderRadius:20,  alignSelf:"center", marginBottom:10 }}  >    
                <Card containerStyle={{height: 280, marginLeft:-1, marginTop:0,width:320,borderRadius:15,shadowColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 155, borderTopRightRadius:15, borderTopLeftRadius:15}}
                    resizeMode="cover"
                    source={
                        require("../images/articulo1.jpg")
                    }
                    />
                </View> 
                <View style={{textAlign: "left", fontWeight:"bold", fontSize:17, lineHeight:20,  backgroundColor:"#ffffffe6", borderBottomRightRadius:15, borderBottomLeftRadius:15, height:125, paddingVertical:10, paddingHorizontal:20}} >
                    
                <Text style={{fontWeight:"400", marginTop:4,color:"#00000099",fontSize:14, letterSpacing:.5, width:200}}>Artículos sobre Violencia </Text>   
                <Text style={{ fontWeight:"bold", fontSize:20, marginTop:6,lineHeight:24,width:"100%",letterSpacing:1.4}}>Violencia de género en Latinoamérica</Text>
                <Text style={{fontWeight:"bold", marginTop:2,fontSize:14, letterSpacing:1.2, width:"100%"}}>Universidad del Zulia</Text></View>
                
                </Card>  
                </Link> 

        {/* ------- 2 Card ------- */}  
        <Link to="/HomeScreenComponents/Articulo2" style={{width:318, height:280, marginTop:15, borderRadius:20,alignSelf:"center" , marginBottom:10 }}  >    
                <Card containerStyle={{height: 280, marginLeft:-1, marginTop:0,width:320,borderRadius:15,shadowColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 155, borderTopRightRadius:15, borderTopLeftRadius:15}}
                    resizeMode="cover"
                    source={
                        require("../images/articulo2.jpg")
                    }
                    />
                </View> 
                <View style={{textAlign: "left", fontWeight:"bold", fontSize:17, lineHeight:20,  backgroundColor:"#ffffffe6", borderBottomRightRadius:15, borderBottomLeftRadius:15, height:125, paddingVertical:10, paddingHorizontal:20}} >
                    
                <Text style={{fontWeight:"400", marginTop:4,color:"#00000099",fontSize:14, letterSpacing:.5, width:200}}>Artículos sobre Violencia </Text>   
                <Text style={{ fontWeight:"bold", fontSize:20, marginTop:6,lineHeight:24,width:"100%",letterSpacing:1.4}}>Maltrato: la violencia de todos los días</Text>
                <Text style={{fontWeight:"bold", marginTop:2,fontSize:14, letterSpacing:1.2, width:"100%"}}>Revista ¿Cómo ves?</Text></View>
                
                </Card> 
                </Link> 

        {/* ------- 3 Card ------- */}  
        <Link to="/HomeScreenComponents/Articulo3" style={{width:318, height:280, marginTop:15, borderRadius:20,alignSelf:"center" , marginBottom:10 }}  >    
                <Card containerStyle={{height: 280, marginLeft:-1, marginTop:0,width:320,borderRadius:15,shadowColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 155, borderTopRightRadius:15, borderTopLeftRadius:15}}
                    resizeMode="cover"
                    source={
                        require("../images/articulo3.jpg")
                    }
                    />
                </View> 
                <View style={{textAlign: "left", fontWeight:"bold", fontSize:17, lineHeight:20,  backgroundColor:"#ffffffe6", borderBottomRightRadius:15, borderBottomLeftRadius:15, height:125, paddingVertical:10, paddingHorizontal:20}} >
                    
                <Text style={{fontWeight:"400", marginTop:4,color:"#00000099",fontSize:14, letterSpacing:.5, width:200}}>Artículos sobre Violencia </Text>   
                <Text style={{ fontWeight:"bold", fontSize:20, marginTop:6,lineHeight:24,width:"100%",letterSpacing:1.4}}>Maltrato: la violencia de todos los días</Text>
                <Text style={{fontWeight:"bold", marginTop:2,fontSize:14, letterSpacing:1.2, width:"100%"}}>Clínica San Pablo S.A</Text></View>
                
                </Card> 
                </Link>

        {/* ------- 4 Card ------- */}  
        <Link to="/HomeScreenComponents/Articulo4" style={{width:318, height:280, marginTop:15, borderRadius:20,alignSelf:"center" , marginBottom:70 }}  >    
                <Card containerStyle={{height: 280, marginLeft:-1, marginTop:0,width:320,borderRadius:15,shadowColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 155, borderTopRightRadius:15, borderTopLeftRadius:15}}
                    resizeMode="cover"
                    source={
                        require("../images/articulo4.jpg")
                    }
                    />
                </View> 
                <View style={{textAlign: "left", fontWeight:"bold", fontSize:17, lineHeight:20,  backgroundColor:"#ffffffe6", borderBottomRightRadius:15, borderBottomLeftRadius:15, height:125, paddingVertical:10, paddingHorizontal:20}} >
                    
                <Text style={{fontWeight:"400", marginTop:4,color:"#00000099",fontSize:14, letterSpacing:.5, width:200}}>Artículos sobre Violencia </Text>   
                <Text style={{ fontWeight:"bold", fontSize:20, marginTop:6,lineHeight:24,width:"100%",letterSpacing:1.4}}>Consecuencias de la violencia en la crianza</Text>
                <Text style={{fontWeight:"bold", marginTop:2,fontSize:14, letterSpacing:1.2, width:"100%"}}>UNICEF </Text></View>
                
                </Card> 
                </Link>    
  
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
    width:27, 
    height:50, 
    paddingLeft:20, 
    paddingTop:12
  },
  header:{
    fontSize:14,
    marginTop:16,
    marginLeft:24
  },
  subTitle: {
    fontWeight:"400", 
    letterSpacing:1.2,
    color:"#00000099",
    fontSize:14,
    alignSelf:"center"
  },
  subTitle2:{
    fontWeight:"bold", 
    fontSize:18, 
    marginTop:35,
    marginBottom:12,
    lineHeight:30
  },
  title: {
    fontWeight:"bold", 
    letterSpacing:1.6, 
    fontSize:18, 
    marginTop:30, 
    marginBottom:6,
    textAlign:"center",
    width:"85%",
    alignSelf:"center"
  },
  paragraph: {
    fontWeight:"400", 
    fontSize:14, 
    lineHeight:24, 
    textAlign:"justify"        
  }, 
  references: {
    fontWeight:"400", 
    fontSize:18,  
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
    fontWeight:"bold"
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