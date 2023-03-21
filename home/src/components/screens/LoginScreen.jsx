import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import RecoverPass from './RecoverPass';
import axios from 'axios';

const API_URL = 'http://192.168.3.101:8000';
const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onLoggedIn = (token) => {
        axios.post(`${API_URL}/private`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(async (res) => {
                try {
                    const jsonRes = res.data;
                    if (res.status === 200) {
                        setMessage(jsonRes.message);
                    }
                } catch (err) {
                    console.log(err);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmitHandler = () => {
        const payload = {
            email,
            name,
            password,
        };
        axios.post(`${API_URL}/${isLogin ? 'login' : 'signup'}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                try {
                    const jsonRes = res.data;
                    if (res.status !== 200) {
                        setError(true);
                        setMessage(jsonRes.message);
                    } else {
                        onLoggedIn(jsonRes.token);
                        setError(false);
                        setMessage(jsonRes.message);
                    }
                } catch (err) {
                    console.log(err);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={{
                    textAlign: 'center', fontWeight: 'bold',
                    marginBottom: 20,
                    fontSize: 22,
                    color: '#333',
                }}>Iniciar Sesión</Text>
                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese su Correo Electrónico"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese su contraseña"
                    secureTextEntry={true}
                />

                {error && <Text style={{ color: 'red', paddingLeft: 0 }}>{error}</Text>}

                <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ResetPass')}>
                    <Text style={styles.linkText}>Recuperar Contraseña</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.linkText}>¿No tienes una cuenta? Registrate</Text>
                </TouchableOpacity>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {

        width: '90%',
        height: '70%',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 15,
        color: '#333',
        paddingHorizontal: 19
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 17,
        color: '#333',
        paddingHorizontal: 35,
        margin: 10
    },
    button: {
        backgroundColor: '#710193',
        padding: 15,
        borderRadius: 15,
        elevation: 2,
        alignSelf: 'stretch',
        marginHorizontal: 30,
        marginVertical: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    link: {
        marginTop: 20,
    },
    linkText: {
        color: '#3498db',
        textAlign: 'center',
        fontSize: 14,
    },
});

export default LoginScreen;