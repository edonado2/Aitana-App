import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RecoverPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleRecoverPassword = () => {
        // send password recovery email
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <AntDesign name="arrowleft" size={24} color="black" style={{ padding: 20 }} />
            </TouchableOpacity>
            <View style={styles.body}>
                <Text style={styles.title}> Recupera tu contraseña</Text>
                <Text style={styles.subtitle}>
                    Ingrese su correo electrónico para recuperar su contraseña
                </Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Correo Electrónico"
                    placeholderTextColor="gray"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRecoverPassword}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#710193',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    subtitle: {
        fontSize: 25,
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        width: '100%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#710193',
        padding: 16,
        borderRadius: 25,
        marginTop: 32,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default RecoverPasswordScreen;