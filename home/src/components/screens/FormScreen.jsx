import { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, Pressable, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { NativeRouter, Route, Link, Routes, } from "react-router-native";
import ReportForm from '../ReportScreenComponents/Form'
import { FlatList, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';

const FormScreen = () => {
    const [formIsOpen, setFormIsOpen] = useState(false)
    const [denuncias, setDenuncias] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const { userId } = useSelector(state => state.auth);



    useEffect(() => {
        fetch(`http://192.168.3.101:8070/users/${userId}/denuncias`)
            .then(response => response.json())
            .then(data => setDenuncias(data))
            .catch(error => console.log(error));
    }, [userId]);

    console.log(denuncias, "respuesta-tabla")
    console.log(userId, "user id")

    const formIsOpenHandler = () => {
        setFormIsOpen(!formIsOpen)
    }

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', padding: 20 }}>
            <Text style={{ flex: 1, padding: 2, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.fecha_abuso}
            </Text>
            <Text style={{ flex: 1, padding: 2, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.hora_acontecimiento}
            </Text>
            <Text style={{ flex: 1, padding: 2, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.tipo_abuso}
            </Text>
            {/* <Text style={{ flex: 1, padding: 5, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.lugar_del_acontecimiento}
            </Text> */}
            <Text style={{ flex: 1, padding: 2, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.nombre}
            </Text>
            <Text style={{ flex: 1, padding: 2, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.apellido}
            </Text>
            {/* <Text style={{ flex: 1, padding: 5, fontSize: Dimensions.get('window').width < 600 ? 12 : 16 }}>
                {item.cedula}
            </Text> */}
        </View>
    );


    return (
        <NativeRouter>
            <StatusBar backgroundColor="#fff" style={{ color: "#000" }} />


            <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, }}>

                {/* Start header */}
                <View style={{ width: "100%", height: 50, backgroundColor: "#fff", flexDirection: "row", }}>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 15, alignSelf: "center" }}
                        resizeMode="contain"
                        source={require("../images/logo.png")}
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

                        <FlatList
                            data={denuncias}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </ScrollView>

                <Routes>
                    <Route path="../" element={<FormScreen />} />
                    <Route path="/ReportScreenComponents/Form" element={<ReportForm />} />
                </Routes>

            </View>
        </NativeRouter>
    )
}


export default FormScreen;