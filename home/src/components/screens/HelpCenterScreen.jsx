import { View, Text, Image, Pressable} from 'react-native'
import * as React from "react";
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Card } from "@rneui/base";
import {
    NativeRouter,
    Route,
    Link,
    Routes
  } from "react-router-native";
  
import { TestView } from '../HelpCenterScreenComponents/TestView';
import { OrganosReceptoresDenuncia } from '../OrganosReceptores.jsx/OrganosReceptoresDenuncia';
import { ProcesoDenuncia } from '../HelpCenterScreenComponents/ProcesoDenuncia';
import { DerechosDenunciar } from '../HelpCenterScreenComponents/DerechosDenunciar';
import { PruebasDenuncia } from '../HelpCenterScreenComponents/PruebasDenuncia';
import { ReceptorDenuncia } from '../HelpCenterScreenComponents/ReceptorDenuncia';
import { DatosDenuncia } from '../HelpCenterScreenComponents/DatosDenuncia';
import { SeguimientoDenuncia } from '../HelpCenterScreenComponents/SeguimientoDenuncia';
import { InocenteDenuncia } from '../HelpCenterScreenComponents/InocenteDenuncia';
import { FalsaDenuncia } from '../HelpCenterScreenComponents/FalsaDenuncia';
import { ApoyoPsicologico } from '../HelpCenterScreenComponents/ApoyoPsicologico';
import { ApoyoLegal } from '../HelpCenterScreenComponents/ApoyoLegal';
import { OrganosReceptores } from '../HelpCenterScreenComponents/OrganosReceptores';
import { VictimaNiño } from '../HelpCenterScreenComponents/VictimaNiño';

const HelpCenterScreen = () => {
    return (
        <NativeRouter>
        <StatusBar backgroundColor="#fff"/>
         <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>

        {/* ------ Start Header ------- */}
        <View style={{width:"100%", height:50, backgroundColor:"#fff", flexDirection:"row"}}>
        <Image
                        style={{ width: 30, height: 30, marginLeft:15, alignSelf:"center"}}
                        resizeMode="contain"
                        source={
                            require("../images/logo.png")
                        }
                        />
                <Text style={{textAlign:"center", alignSelf:"center", fontFamily:"OpenSans_700Bold", fontSize:17, marginLeft:2}}>Centros de Ayuda</Text>
        </View>
        {/* ------- End Header ------- */}


        <ScrollView bounces={false} bouncesZoom={false} >
            <StatusBar backgroundColor="#fff" style={{color:"#000"}}/>

        {/* ------- Start First Card ------- */}
            <View style={{backgroundColor:"#fff"}}>          
            <Image
            style={{ width: "100%", height: 230}}
            resizeMode="cover"
            source={
                require("../images/denuncia.jpg")
            }
            />
            <Text style={{width:"49%",textAlign:"left", fontFamily:"OpenSans_700Bold",color:"#fff", letterSpacing:1.5,fontSize:22, marginTop:12, marginLeft:24, position:"absolute", bottom:100}}>¿Dónde puedo realizar una denuncia?</Text>
            <Link to="/OrganosReceptoresDenuncia" style={{width:100, height:30,  marginTop:12, marginLeft:24, position:"absolute", bottom:60, borderRadius:20}}>
            <Text style={{width:100, height:30,textAlign:"left", letterSpacing:2, fontSize:16, color:"#cec0da", backgroundColor:"#745c98", textAlignVertical:"center", textAlign:"center", fontFamily:"OpenSans_400Regular",borderRadius:14}}>VER</Text>
            </Link>
            </View>
        {/* ------- End First Card ------- */}

        {/* ------- Start Cards ------- */}
        <View style={{marginBottom: 145, height:"100%", backgroundColor:"#fff"}}
        >
        <Text style={{fontFamily:"OpenSans_700Bold",marginLeft:20, marginTop:35, fontSize:18, letterSpacing:.5}}>Información sobre Denuncias</Text>
        <Text style={{fontFamily:"OpenSans_400Regular", marginLeft:20, marginTop:4,color:"#00000099", marginBottom:4,fontSize:14, letterSpacing:.5}}>Lo que debes saber al presentar tu denuncia</Text>            

        <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>

            {/* ------- 1 Card ------- */}
        <Link to="/HelpCenterScreenComponents/ProcesoDenuncia" style={{width:"45%", height:120, marginTop:15, 
        borderRadius:20}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.87}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia1.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:10, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Cómo es el proceso de denuncia?</Text>
            
            </Card>  
            </Link>

            {/* ------- 2 Card ------- */}
        <Link to="/HelpCenterScreenComponents/DerechosDenunciar" style={{width:"45%", height:120, marginTop:15, textAlign:"center",borderRadius:20, marginLeft:7}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.87}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia2.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:6, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Cuáles son tus derechos al denunciar?</Text>
            
            </Card>  
            </Link> 

            {/* ------- 3 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/PruebasDenuncia" style={{width:"45%", height:120, marginTop:65, borderRadius:20}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.87}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia3.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:4, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Es necesario contar con pruebas?</Text>
            
            </Card>  
            </Link> 

            {/* ------- 4 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/ReceptorDenuncia" style={{width:"45%", height:120, marginTop:65, borderRadius:20, marginLeft:7}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.87}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia4.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:10, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Qué es un órgano receptor de denuncia?</Text>
            
            </Card>  
            </Link>  

            {/* ------- 5 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/DatosDenuncia" style={{width:"45%", height:120, marginTop:65, borderRadius:20}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia5.jpg")
                }
                />
            </View> 
            <Card.Title style={{textAlign: "left",  fontWeight:"500", marginTop:5,paddingHorizontal:6, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Qué datos debe de contener una denuncia?</Card.Title>
            
            </Card>  
            </Link> 

            {/* ------- 6 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/SeguimientoDenuncia" style={{width:"44%", height:120, marginTop:65, borderRadius:20, marginLeft:7}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia6.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:2, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>Realizar seguimiento a una denuncia</Text>
            
            </Card>  
            </Link> 

            {/* ------- 7 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/InocenteDenuncia" style={{width:"45%", height:120, marginTop:65, borderRadius:20}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia7.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:7, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>¿Qué debo de hacer sí me culpan de algo que no hice?</Text>
            
            </Card>  
            </Link> 

            {/* ------- 8 Card ------- */}          
            
            <Link to="/HelpCenterScreenComponents/FalsaDenuncia" style={{width:"45%", height:120, marginTop:65,borderRadius:20, marginLeft:7}}  >    
            <Card containerStyle={{width:"100%",height: 120, marginLeft:0, marginTop:0,borderRadius:15,shadowColor:"#fff", borderColor:"#fff", padding:0, opacity:.85}} wrapperStyle={{}}>
                <View
                style={{
                alignItems: "center",
                }}
            >
                <Image
                style={{ width: "100%", height: 120,borderRadius:15}}
                resizeMode="cover"
                source={
                    require("../images/denuncia8.jpg")
                }
                />
            </View> 
            <Text style={{textAlign: "left",  fontFamily:"OpenSans_500Medium", marginTop:5, paddingHorizontal:10, fontSize:12, width:"100%",lineHeight:20,color:"#00000099",letterSpacing:.3}}>Consecuencias de presentar una denuncia falsa</Text>
            
            </Card>  
            </Link> 



        </View>
        {/* ------- End Recommendations ------- */}

        </View>
        </ScrollView>


        <Routes>
            <Route path="../" element={<HelpCenterScreen/>} />
            <Route path="/OrganosReceptoresDenuncia" element={<OrganosReceptoresDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/ProcesoDenuncia" element={<ProcesoDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/DerechosDenunciar" element={<DerechosDenunciar/>} />
            <Route path="/HelpCenterScreenComponents/PruebasDenuncia" element={<PruebasDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/ReceptorDenuncia" element={<ReceptorDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/DatosDenuncia" element={<DatosDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/SeguimientoDenuncia" element={<SeguimientoDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/InocenteDenuncia" element={<InocenteDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/FalsaDenuncia" element={<FalsaDenuncia/>} />
            <Route path="/HelpCenterScreenComponents/ApoyoPsicologico" element={<ApoyoPsicologico/>} />
            <Route path="/HelpCenterScreenComponents/ApoyoLegal" element={<ApoyoLegal/>} />
            <Route path="/HelpCenterScreenComponents/OrganosReceptores" element={<OrganosReceptores/>} />
            <Route path="/HelpCenterScreenComponents/VictimaNiño" element={<VictimaNiño/>} />
        </Routes>

        </View>             
    </NativeRouter>
    )
}

export default HelpCenterScreen;