import { View, Text, Image, onPress } from 'react-native'
import * as React from "react";
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Card } from "@rneui/base";
import {
    NativeRouter,
    Route,
    Link,
    Routes
} from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { ViolenciaDeGenero } from '../HomeScreenComponents/ViolenciaDeGenero';
import { ViolenciaFisica } from '../HomeScreenComponents/ViolenciaFisica';
import { ViolenciaPsicologica } from '../HomeScreenComponents/ViolenciaPsicologica';
import { ViolenciaSexual } from '../HomeScreenComponents/ViolenciaSexual';
import { Hostigamiento } from '../HomeScreenComponents/Hostigamiento';
import { ViolenciaDomestica } from '../HomeScreenComponents/ViolenciaDomestica';

import { Articulos } from '../HomeScreenComponents/Articulos';
import { Articulo1 } from '../HomeScreenComponents/Articulo1';
import { Articulo2 } from '../HomeScreenComponents/Articulo2';
import { Articulo3 } from '../HomeScreenComponents/Articulo3';
import { Articulo4 } from '../HomeScreenComponents/Articulo4';

import { Recomendacion1 } from '../HomeScreenComponents/Recomendacion1';
import { Recomendacion2 } from '../HomeScreenComponents/Recomendacion2';
import { Recomendacion3 } from '../HomeScreenComponents/Recomendacion3';

import { TestView } from '../HomeScreenComponents/TestView';
import { Test2 } from '../HomeScreenComponents/Test2';

const HomeScreen = ({ navigation }) => {

    const images = [
        {
            banner: require("../images/image1.jpg")
        },
        {
            banner: require("../images/frase1.jpg")
        },
        {
            banner: require("../images/frase2.jpg")
        },
        {
            banner: require("../images/frase3.jpg")
        }
    ];

    return (
        <NativeRouter>
            <StatusBar backgroundColor="#fff" />
            <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>

                {/* ------ Start Header ------- */}
                <View style={{ width: "100%", height: 50, backgroundColor: "#fff", flexDirection: "row", borderBottomColor: "#00000026", borderBottomWidth: 1.2 }}>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 15, alignSelf: "center" }}
                        resizeMode="contain"
                        source={
                            require("../images/logo.png")
                        }
                    />
                    <Text style={{ textAlign: "center", alignSelf: "center", fontFamily: "OpenSans_700Bold", fontSize: 17, marginLeft: 2 }}>Aitana</Text>
                </View>
                {/* ------- End Header ------- */}


                <ScrollView bounces={false} bouncesZoom={false} style={{ backgroundColor: "#00000000" }}>
                    <StatusBar backgroundColor="#fff" />

                    {/* ------- Start First Card ------- */}
                    <View>

                        <FlatListSlider horizontal
                            data={images}
                            imageKey={"banner"}
                            local
                            height={230}
                            width={360}
                            timer={7000}
                            indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={15}
                            animation
                            onPress={() => {
                                console.log('You tapped the button!');
                            }}
                        />
                    </View>
                    {/* ------- End First Card ------- */}


                    {/* ------- Start First Carrousel ------- */}
                    <View style={{ backgroundColor: "#fff", height: 270 }}>
                        <View style={{ marginTop: 35, marginLeft: 20 }}>

                            <Text style={{ fontFamily: "OpenSans_700Bold", fontSize: 18, letterSpacing: .2 }}>Tipos de Violencia</Text>
                            <Text style={{ fontFamily: "OpenSans_400Regular", marginTop: 4, color: "#00000099", fontSize: 14, letterSpacing: .2 }}>Conoce los tipos de Violencia que existen</Text>

                        </View>
                        {/* ------- Start Cards ------- */}
                        <View style={{ marginTop: 4 }}>
                            <ScrollView horizontal
                                showsHorizontalScrollIndicator={false}>

                                {/* ------- 1st Card ------- */}

                                <Link to="ViolenciaDeGenero" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>

                                        <View
                                            style={{
                                                alignItems: "center",
                                            }}
                                        >

                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image2.jpg")
                                                }
                                            />


                                        </View>

                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Violencia de Género</Text>

                                    </Card>
                                </Link>

                                {/* ------- 2nd Card ------- */}

                                <Link to="/HomeScreenComponents/ViolenciaFisica" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>
                                        <View
                                            style={{
                                                alignItems: "center"
                                            }}
                                        >
                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image3.jpg")
                                                }
                                            />
                                        </View>
                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Violencia Física</Text>

                                    </Card>
                                </Link>

                                {/* ------- 3rd Card ------- */}
                                <Link to="/HomeScreenComponents/ViolenciaPsicologica" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>
                                        <View
                                            style={{
                                                alignItems: "center"
                                            }}
                                        >
                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image4.jpg")
                                                }
                                            />
                                        </View>
                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Violencia Psicológica</Text>

                                    </Card>
                                </Link>

                                {/* ------- 4th Card ------- */}
                                <Link to="/HomeScreenComponents/ViolenciaSexual" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>
                                        <View
                                            style={{
                                                alignItems: "center"
                                            }}
                                        >
                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image5.jpg")
                                                }
                                            />
                                        </View>
                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Violencia Sexual</Text>

                                    </Card>
                                </Link>
                                {/* ------- 5th Card ------- */}
                                <Link to="/HomeScreenComponents/Hostigamiento" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>
                                        <View
                                            style={{
                                                alignItems: "center"
                                            }}
                                        >
                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image6.jpg")
                                                }
                                            />
                                        </View>
                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Hostigamiento</Text>

                                    </Card>
                                </Link>
                                {/* ------- 6th Card ------- */}
                                <Link to="/HomeScreenComponents/ViolenciaDomestica" style={{ width: 140, height: 122, marginTop: 15, marginLeft: 15, borderRadius: 22, marginRight: 20, marginBottom: 22 }}  >
                                    <Card containerStyle={{ height: 150, marginLeft: 0, marginTop: 0, width: 140, borderColor: "#fff", shadowColor: "#fff", padding: 0, opacity: .80 }} wrapperStyle={{}}>
                                        <View
                                            style={{
                                                alignItems: "center"
                                            }}
                                        >
                                            <Image
                                                style={{ width: "100%", height: 120, borderRadius: 15 }}
                                                resizeMode="cover"
                                                source={
                                                    require("../images/image7.jpg")
                                                }
                                            />
                                        </View>
                                        <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "OpenSans_400Regular", fontSize: 13, letterSpacing: .2 }}>Violencia Doméstica</Text>

                                    </Card>
                                </Link>

                            </ScrollView>
                        </View>
                        {/* ------- End Cards ------- */}
                    </View>
                    {/* ------- End First Carrousel ------- */}



                    {/* ------- Start Second Carrousel ------- */}
                    <View>
                        {/* ------- Start Cards ------- */}
                        <View style={{ marginTop: 25, marginLeft: 20, flexDirection: "row", width: "100%" }}>
                            <Text style={{ fontFamily: "OpenSans_700Bold", fontSize: 18, letterSpacing: .2 }}>Artículos sobre Violencia</Text>

                            <Link to="/HomeScreenComponents/Articulos" style={{ marginTop: 3, marginLeft: 24, height: 18, width: 70, borderRadius: 13 }}>
                                <Text style={{ marginLeft: -8, fontFamily: "OpenSans_400Regular", fontSize: 14, textAlignVertical: "center", textAlign: "center", backgroundColor: "#F2F2F2", height: 24, width: 87, marginTop: -3 }}>
                                    <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 14, letterSpacing: .2, textAlignVertical: "center", textAlign: "center", color: "#109dfa", backgroundColor: "#F2F2F2", height: 24, width: 87, borderRadius: 12 }}>Ver todo<Icon name="chevron-forward-outline" size={15} /></Text>
                                </Text>
                            </Link>

                        </View>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            {/* ------- 1st Card ------- */}
                            <Link to="/HomeScreenComponents/Articulo1" style={{ width: 293, height: 280, marginTop: 15, borderRadius: 20, marginRight: 20, marginLeft: 15 }}  >
                                <Card containerStyle={{ height: 280, marginLeft: -1, marginTop: 0, width: 295, borderRadius: 15, shadowColor: "#fff", padding: 0, opacity: .85 }} wrapperStyle={{}}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            style={{ width: "100%", height: 155, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                            resizeMode="cover"
                                            source={
                                                require("../images/articulo1.jpg")
                                            }
                                        />
                                    </View>
                                    <View style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, lineHeight: 20, backgroundColor: "#ffffffe6", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, height: 125, paddingVertical: 10, paddingHorizontal: 20 }} >

                                        <Text style={{ fontFamily: "OpenSans_400Regular", marginTop: 4, color: "#00000099", fontSize: 14, letterSpacing: .2, width: 200 }}>Artículos sobre Violencia </Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", fontSize: 20, marginTop: 6, lineHeight: 24, width: "100%", letterSpacing: 1 }}>Violencia de género en Latinoamérica</Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", marginTop: 2, fontSize: 14, letterSpacing: .7, width: "100%" }}>Universidad del Zulia</Text></View>

                                </Card>
                            </Link>



                            {/* ------- 2nd Card ------- */}
                            <Link to="/HomeScreenComponents/Articulo2" style={{ width: 293, height: 280, marginTop: 15, borderRadius: 20, marginRight: 20 }}  >
                                <Card containerStyle={{ height: 280, marginLeft: -1, marginTop: 0, width: 295, borderRadius: 15, shadowColor: "#fff", padding: 0, opacity: .85 }} wrapperStyle={{}}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            style={{ width: "100%", height: 155, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                            resizeMode="cover"
                                            source={
                                                require("../images/articulo2.jpg")
                                            }
                                        />
                                    </View>
                                    <View style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, lineHeight: 20, backgroundColor: "#ffffffe6", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, height: 125, paddingVertical: 10, paddingHorizontal: 20 }} >

                                        <Text style={{ fontFamily: "OpenSans_400Regular", marginTop: 4, color: "#00000099", fontSize: 14, letterSpacing: .2, width: 200 }}>Artículos sobre Violencia </Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", fontSize: 20, marginTop: 6, lineHeight: 24, width: "100%", letterSpacing: 1 }}>Maltrato: la violencia de todos los días</Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", marginTop: 2, fontSize: 14, letterSpacing: .7, width: "100%" }}>Revista ¿Cómo ves?</Text></View>

                                </Card>
                            </Link>

                            {/* ------- 3rd Card ------- */}

                            <Link to="/HomeScreenComponents/Articulo3" style={{ width: 293, height: 280, marginTop: 15, borderRadius: 20, marginRight: 20 }}  >
                                <Card containerStyle={{ height: 280, marginLeft: -1, marginTop: 0, width: 295, borderRadius: 15, shadowColor: "#fff", padding: 0, opacity: .85 }} wrapperStyle={{}}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            style={{ width: "100%", height: 155, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                            resizeMode="cover"
                                            source={
                                                require("../images/articulo3.jpg")
                                            }
                                        />
                                    </View>
                                    <View style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, lineHeight: 20, backgroundColor: "#ffffffe6", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, height: 125, paddingVertical: 10, paddingHorizontal: 20 }} >

                                        <Text style={{ fontFamily: "OpenSans_400Regular", marginTop: 4, color: "#00000099", fontSize: 14, letterSpacing: .2, width: 200 }}>Artículos sobre Violencia </Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", fontSize: 20, marginTop: 6, lineHeight: 24, width: "100%", letterSpacing: 1 }}>Violencia De Género Desde La Salud Mental</Text>
                                        <Text style={{ fontFamily: "OpenSans_700Bold", marginTop: 2, fontSize: 14, letterSpacing: .7, width: "100%" }}>Clínica San Pablo S.A</Text></View>

                                </Card>
                            </Link>
                            {/* ------- End Cards ------- */}
                        </ScrollView>
                    </View>
                    {/* ------- End Second Carrousel ------- */}


                    {/* ------- Start Recommendations ------- */}
                    <View style={{ marginBottom: 80, backgroundColor: "#fff", marginTop: 25, height: "100%" }}
                    >
                        <Text style={{ fontFamily: "OpenSans_700Bold", marginLeft: 20, marginTop: 40, fontSize: 18, letterSpacing: .2 }}>Recomendaciones</Text>


                        {/* ------- 1st Recommendation ------- */}
                        <Link to="/HomeScreenComponents/Recomendacion1" style={{ width: 324, height: 100, marginTop: 25, marginLeft: 15, borderRadius: 20 }}  >
                            <Card containerStyle={{ width: "100%", height: 100, marginLeft: 0, marginTop: 0, borderRadius: 15, shadowColor: "#000", borderColor: "#F2F2F2", padding: 0, opacity: .97 }} wrapperStyle={{}}>
                                <View
                                    style={{
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        style={{ width: "43%", height: 100, borderRadius: 15, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, alignSelf: "flex-end", opacity: .85 }}
                                        resizeMode="cover"
                                        source={
                                            require("../images/recomendacion1.jpg")
                                        }
                                    />
                                </View>
                                <Text style={{ textAlign: "left", marginTop: 5, fontFamily: "OpenSans_400Regular", lineHeight: 20, fontSize: 13, position: "relative", bottom: 110, width: "70%", paddingVertical: 25, paddingLeft: 20, paddingRight: 20, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>¿Qué debo hacer si soy victima o testigo de una agresión?</Text>

                            </Card>
                        </Link>

                        {/* ------- 2nd Recommendation ------- */}
                        <Link to="/HomeScreenComponents/Recomendacion2" style={{ width: 324, height: 100, marginTop: 15, marginLeft: 15, borderRadius: 20 }}  >
                            <Card containerStyle={{ width: "100%", height: 100, marginLeft: 0, marginTop: 0, borderRadius: 15, shadowColor: "#FFF", borderColor: "#F2F2F2", padding: 0, opacity: .97 }} wrapperStyle={{}}>
                                <View
                                    style={{
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        style={{ width: "43%", height: 100, borderRadius: 15, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, alignSelf: "flex-end", opacity: .85 }}
                                        resizeMode="cover"
                                        source={
                                            require("../images/recomendacion2.jpg")
                                        }
                                    />
                                </View>
                                <Text style={{ textAlign: "left", marginTop: 5, fontFamily: "OpenSans_400Regular", lineHeight: 20, fontSize: 13, position: "relative", bottom: 110, width: "70%", paddingVertical: 25, paddingLeft: 20, paddingRight: 50, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>¿Qué hacer si sabes de un caso de violencia contra un niño o niña?</Text>

                            </Card>
                        </Link>

                        {/* ------- 3nd Recommendation ------- */}
                        <Link to="/HomeScreenComponents/Recomendacion3" style={{ width: 324, height: 100, marginTop: 15, marginLeft: 15, borderRadius: 20 }}  >
                            <Card containerStyle={{ width: "100%", height: 100, marginLeft: 0, marginTop: 0, borderRadius: 15, shadowColor: "#000", borderColor: "#F2F2F2", padding: 0, opacity: .97 }} wrapperStyle={{}}>
                                <View
                                    style={{
                                        alignItems: "center"
                                    }}
                                >
                                    <Image
                                        style={{ width: "43%", height: 100, borderRadius: 15, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, alignSelf: "flex-end", opacity: .85 }}
                                        resizeMode="cover"
                                        source={
                                            require("../images/recomendacion3.jpg")
                                        }
                                    />
                                </View>
                                <Text style={{ textAlign: "left", marginTop: 5, fontFamily: "OpenSans_400Regular", lineHeight: 20, fontSize: 13, position: "relative", bottom: 110, width: "70%", paddingVertical: 25, paddingLeft: 20, paddingRight: 35, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>¿Cómo puedo ayudar a una víctima de violencia familiar?</Text>

                            </Card>
                        </Link>

                        {/* ------- 4th Recommendation ------- */}
                    </View>
                    {/* ------- End Recommendations ------- */}

                </ScrollView>


                <Routes>
                    <Route path="ViolenciaDeGenero" element={<ViolenciaDeGenero />} />
                    <Route path="/HomeScreenComponents/ViolenciaFisica" element={<ViolenciaFisica />} />
                    <Route path="/HomeScreenComponents/ViolenciaPsicologica" element={<ViolenciaPsicologica />} />
                    <Route path="/HomeScreenComponents/ViolenciaSexual" element={<ViolenciaSexual />} />
                    <Route path="/HomeScreenComponents/Hostigamiento" element={<Hostigamiento />} />
                    <Route path="/HomeScreenComponents/ViolenciaDomestica" element={<ViolenciaDomestica />} />

                    <Route path="/HomeScreenComponents/Articulos" element={<Articulos />} />
                    <Route path="/HomeScreenComponents/Articulo1" element={<Articulo1 />} />
                    <Route path="/HomeScreenComponents/Articulo2" element={<Articulo2 />} />
                    <Route path="/HomeScreenComponents/Articulo3" element={<Articulo3 />} />
                    <Route path="/HomeScreenComponents/Articulo4" element={<Articulo4 />} />

                    <Route path="/HomeScreenComponents/Recomendacion1" element={<Recomendacion1 />} />
                    <Route path="/HomeScreenComponents/Recomendacion2" element={<Recomendacion2 />} />
                    <Route path="/HomeScreenComponents/Recomendacion3" element={<Recomendacion3 />} />

                    <Route path="/HomeScreenComponents/TestView" element={<TestView />} />
                    <Route path="/HomeScreenComponents/Test2" element={<Test2 />} />
                </Routes>

            </View>
        </NativeRouter>

    )
}



export default HomeScreen;

