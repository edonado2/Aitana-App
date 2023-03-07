import { useState,  } from 'react'
import { View, Text, TextInput, Image, Pressable, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { NativeRouter, Route, Link, Routes, } from "react-router-native";
import ReportForm from '../ReportScreenComponents/Form'


const FormScreen = () => {
    const [formIsOpen, setFormIsOpen] = useState(false)

    const formIsOpenHandler = () => {
      setFormIsOpen(!formIsOpen)
    }

    // const [borderColor, setBorderColor] = useState({ email: "#E5E7EB", password: "#E5E7EB" });

    const inputStyle = { 
      borderWidth: 2, 
      borderColor: '#E5E7EB', 
      height: 48, 
      paddingHorizontal: 16, 
      borderRadius: 4 
    };

    return (
      <NativeRouter>
        <StatusBar backgroundColor="#fff" style={{color:"#000"}}/>


        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, }}>

            {/* Start header */}
            <View style={{ width:"100%", height:50, backgroundColor:"#fff", flexDirection:"row", }}>
                <Image
                    style={{ width: 30, height: 30, marginLeft:15, alignSelf:"center"}}
                    resizeMode="contain"
                    source={ require("../images/logo.png") }
                />
                <Text style={{ textAlign: "center", alignSelf: "center", fontFamily: "OpenSans_700Bold", fontSize: 17, marginLeft: 2 }}>
                    Denuncias
                </Text>
            </View>
            {/* End header */}

            <ScrollView bounces={false} bouncesZoom={false}>
                <View style={{ padding: 16, backgroundColor: "#fff", }}>
                    <Link to='/ReportScreenComponents/Form' style={{ alignItems: "center", justifyContent: "center", height: 48, borderRadius: 24, elevation: 3, backgroundColor: "#745c98", }}>
                        <Text style={{ fontSize: 16, color: "#fff", }}>Emitir una denuncia</Text>
                    </Link>
                </View>

                <View style={{ padding: 16, }}>
                <Text style={{ textAlign: "center", alignSelf: "center", fontFamily: "OpenSans_700Bold", fontSize: 17, }}>Historial de denuncias</Text>

                {/* denuncias ... */}
                </View>
            </ScrollView>

            <Routes>
                <Route path="../" element={<FormScreen/>} />
                <Route path="/ReportScreenComponents/Form" element={<ReportForm/>} />
            </Routes>

        </View>
      </NativeRouter>
    )
}



export default FormScreen;