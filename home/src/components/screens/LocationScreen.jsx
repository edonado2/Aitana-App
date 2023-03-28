import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 10.631179817433752,
        longitude: - 71.62171261118527,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg("Permiso para ubicacion rechazado")
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccurancy: true })
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        )
        console.log(location.coords.latitude, location.coords.longitude)
    }
    useEffect(() => {
        userLocation();
    }, []);
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={mapRegion}
            >
                <Marker
                    coordinate={mapRegion}
                    title="Mi ubicación"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.670152775707237,
                            longitude: -71.60887724378232
                        }
                    }
                    title="Intendencia de Maracaibo"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.663850245638493,
                            longitude: - 71.61537877261766
                        }
                    }
                    title="Ministerio Público"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.678320353356645,
                            longitude: - 71.60698670330049
                        }
                    }
                    title="Defensoria Publica Maracaibo"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.509103416610028,
                            longitude: - 66.91378734747845
                        }
                    }
                    title="Instituto Nacional de la Mujer (INAMUJER)"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.501119624584103,
                            longitude: - 66.89806430514918
                        }
                    }
                    title="Defensoría del Pueblo"
                />
                <Marker
                    coordinate={
                        {
                            latitude: 10.506425071808675,
                            longitude: - 66.9074633167955
                        }
                    }
                    title="Ministerio Público"
                />
            </MapView>
            <Button title='Ubicación' onPress={userLocation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
