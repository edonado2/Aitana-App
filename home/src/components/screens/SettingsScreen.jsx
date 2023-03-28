import { useState, } from 'react'
import { View, Text, TextInput, Image, Pressable, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { NativeRouter, Route, Link, Routes, } from "react-router-native";
import ReportForm from '../ReportScreenComponents/Form'
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { useHistory } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePasswordAction } from '../../reduxStore/reduxStore';


const FormScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const token = useSelector((state) => state.auth.token);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleLogout = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post('http://192.168.3.101:8070/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.status === 200) {
                await AsyncStorage.removeItem('token');
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error(error);
            // handle error appropriately
        }
    };
    const updatePassword = async (e) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Por favor, rellene todos los campos');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        try {
            // fetch the user data from the backend
            const response = await axios.put(`http://192.168.3.101:8070/update-password/${userId}`, {
                currentPassword,
                newPassword
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const userData = response.data;
            // compare the current password entered by the user with the current password fetched from the backend
            console.log(currentPassword);
            console.log(userData.contrasena);
            const payload = { userId, newPassword, token };
            await dispatch(updatePasswordAction(payload));
            if (response.status === 200) {
                alert('Contraseña actualizada correctamente');
            } else {
                alert('Hubo un problema al actualizar la contraseña');
            }
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                alert('Contraseña actual incorrecta');
            } else {
                alert('Hubo un problema al actualizar la contraseña');
            }
        }
    };



    const [data, setData] = useState({
        reporterName: '',
        reporterLastname: '',
        reporterCode: '',
        reporterCellphone: '',
        denouncedName: '',
        denouncedLastname: '',
        denouncedCode: '',
        place: '',
        date: '',
        time: '',
        report: '',
        reportType: '',
    })

    const [reportDate, setReportDate] = useState(new Date())
    const [reportTime, setReportTime] = useState(new Date())

    const [inputBorderColor, setInputBorderColor] = useState({
        reportName: '#E5E7EB',
        reportLastname: '#E5E7EB',
        reportCode: '#E5E7EB',
        reportCellphone: '#E5E7EB',
        reportDenouncedName: '#E5E7EB',
        reportDenouncedLastname: '#E5E7EB',
        reportDenouncedCode: '#E5E7EB',
        reportPlace: '#E5E7EB',
        reportDate: '#E5E7EB',
        reportTime: '#E5E7EB',
        report: "#E5E7EB",
        reportType: '#E5E7EB'
    })

    const [datePickerIsOpen, setDatePickerIsOpen] = useState(false)
    const [timePickerIsOpen, setTimePickerIsOpen] = useState("")

    const onFocus = (name) => {
        setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
    };

    const onBlur = (name) => {
        setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
    };

    const onFocusDatePicker = (name) => {
        setDatePickerIsOpen(true)
        setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
    }

    const onBlurDatePicker = (name) => {
        setDatePickerIsOpen(false)
        setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
    }

    const onFocusTimePicker = (name) => {
        setTimePickerIsOpen(true)
        setInputBorderColor((state) => ({ ...state, [name]: '#745c98' }));
    }

    const onBlurTimePicker = (name) => {
        setTimePickerIsOpen(false)
        setInputBorderColor((state) => ({ ...state, [name]: '#E5E7EB' }));
    }

    const onChange = (e, date) => {
        onBlurDatePicker('reportName')
        setData((state) => ({ ...state, date: date.toLocaleDateString(), }))
        setReportDate(date)
    }

    const timeOnChange = (e, time) => {
        const hour = time.getHours() === 0 ? 12 : time.getHours()

        const schedule = hour > 12 && hour <= 23 ? 'PM' : 'AM'

        const formatedTime = `${moment(time).format('hh:mm')} ${schedule}`

        setData((state) => ({ ...state, time: formatedTime }))
        setTimePickerIsOpen(false)
        setReportTime(time)
    }

    const inputStyle = {
        borderWidth: 2,
        padding: 16,
        borderRadius: 4,
        fontSize: 15,
    };

    const reporterNameStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportName,
    }

    const reporterLastnameStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportLastname,
    }

    const reporterCodeStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportCode,
    }

    const reporterCellphone = {
        ...inputStyle,
        borderColor: inputBorderColor.reportCellphone
    }

    const denouncedNameStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportDenouncedName,
    }

    const denouncedLastnameStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportDenouncedLastname,
    }

    const denouncedCodeStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportDenouncedCode,
    }

    const reportPlaceStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportPlace,
    }

    const reportDateStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportDate,
    }

    const reportTimeStyle = {
        ...inputStyle,
        borderColor: inputBorderColor.reportTime,
    }

    const reportInputStyle = {
        ...inputStyle,
        textAlignVertical: "top",
        borderColor: inputBorderColor.report,
    }

    const reportTypeStyle = {
        borderWidth: 2,
        padding: 4,
        borderRadius: 4,
        fontSize: 15,
        borderColor: inputBorderColor.reportType,
    }

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
                        Perfil
                    </Text>
                </View>
                {/* End header */}

                <ScrollView bounces={false} bouncesZoom={false}>
                    <View style={{ backgroundColor: "#fff", }}>
                        <Image
                            style={{ width: 90, height: 120, alignSelf: "center" }}
                            resizeMode="contain"
                            source={
                                require("../images/perfil.png")
                            }
                        />
                        <Text style={{ textAlign: "center", alignSelf: "center", fontFamily: "OpenSans_400Regular", fontSize: 17, }}>Fulanito</Text>
                        <Text style={{ textAlign: "center", alignSelf: "center", fontFamily: "OpenSans_400Regular", fontSize: 17, marginTop: 5 }}>fulanito@gmail.com</Text>
                    </View>

                    <View style={{ padding: 16, backgroundColor: "#fff", }}>
                        <Text style={{ textAlign: "left", fontFamily: "OpenSans_700Bold", fontSize: 17, marginTop: 15, marginLeft: 15, color: "#00000099" }}>Cambiar Contraseña</Text>
                        <Text style={{ textAlign: "left", fontFamily: "OpenSans_700Bold", fontSize: 16, marginTop: 18, marginLeft: 15, marginBottom: 15, color: "#8547ca" }}>Contraseña Actual</Text>
                        <View style={{ marginBottom: 16 }}>
                            <TextInput
                                style={reporterNameStyle}
                                placeholder="Clave Actual"
                                onFocus={() => onFocus('reportName')}
                                onBlur={() => onBlur('reportName')}
                                onChangeText={(text) => setCurrentPassword(text)}
                                value={currentPassword}
                            />
                        </View>
                        <Text style={{ textAlign: "left", fontFamily: "OpenSans_700Bold", fontSize: 16, marginLeft: 15, marginBottom: 15, color: "#8547ca" }}>Nueva Contraseña</Text>
                        <View style={{ marginBottom: 16 }}>
                            <TextInput
                                style={reporterNameStyle}
                                placeholder="Nueva Clave"
                                onFocus={() => onFocus('newPassword')}
                                onBlur={() => onBlur('newPassword')}
                                onChangeText={(text) => setNewPassword(text)}
                            />
                        </View>
                        <Text style={{ textAlign: "left", fontFamily: "OpenSans_700Bold", fontSize: 16, marginLeft: 15, marginBottom: 15, color: "#8547ca" }}>Confirmar Contraseña</Text>
                        <View style={{ marginBottom: 16 }}>
                            <TextInput
                                style={reporterNameStyle}
                                placeholder="Confirmar Clave"
                                onFocus={() => onFocus('confirmPassword')}
                                onBlur={() => onBlur('confirmPassword')}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                        </View>
                    </View>
                    <View style={{ padding: 10, backgroundColor: "#fff", }}>
                        <TouchableOpacity onPress={updatePassword} style={{ alignItems: "center", justifyContent: "center", height: 48, borderRadius: 24, elevation: 3, backgroundColor: "#745c98", width: 220, alignSelf: 'center', marginBottom: 15 }}>
                            <Text style={{ fontSize: 16, color: "#fff", fontFamily: "OpenSans_400Regular" }}>Cambiar Contraseña</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 16, marginBottom: 50 }}>
                        <TouchableOpacity onPress={handleLogout} style={{ alignItems: "center", justifyContent: "center", height: 48, borderRadius: 24, elevation: 3, backgroundColor: "#745c98", }}>
                            <Text style={{ fontSize: 16, color: "#fff", fontFamily: "OpenSans_400Regular" }}>Cerrar Sesión</Text>
                        </TouchableOpacity>
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


