import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    NativeRouter,
    Route,
    Link,
    Routes
  } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import { SocialIcon } from '@rneui/base';

export const Test2 = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View>
      <Text style={{ width:"100%", height:50, paddingLeft:20, paddingTop:12}}>
        <Link to="../HomeScreen" style={{width:22, height:22}}>
          <Text  style={{backgroundColor:"#fff"}}>
            <Icon name="arrow-back-outline" size={26}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView style={{}}>
        <View >          
                <Image
                style={{ width: "100%", height: 230}}
                resizeMode="cover"
                source={
                    require("../images/image2.jpg")
                }
                />
        </View>

        <View style={{width:"88%", height:"100%", marginLeft:20, marginTop:35}}>
          <Text style={{ fontWeight:"300",color:"#00000099",fontSize:14}}>Tipos de Violencia</Text> 
          <Text style={{ fontWeight:"bold", fontSize:26, marginTop:7, marginBottom:12}}>Violencia de Género</Text>
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:35}}></Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, textAlign:"justify"}}>La violencia de género es la violencia que ejerce una persona sobre otra solo por su género. Las acciones violentas son todas las que afectan de forma negativa la identidad, la sexualidad y libertad reproductiva, la salud física y mental y el bienestar social de una persona.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:15, textAlign:"justify"}}>En muchas legislaciones, el concepto de violencia de género se aplica a la violencia ejercida hacia las mujeres. Este tipo de violencia incluye dinámicas de dominación, amenazas y la privación arbitraria de las libertades políticas y civiles en el ámbito social, doméstico, político o laboral.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:15, textAlign:"justify"}}>Entre los actos más aberrantes de violencia de género están: el infanticidio femenino, las violaciones, la prostitución forzada, los abortos en función del sexo del no nato, la violencia contra las prostitutas, la mutilación genital, el tráfico de personas, el acoso y hostigamiento dentro de organizaciones, la violencia doméstica.</Text>

          <Text style={{ fontWeight:"bold", fontSize:22, marginTop:35, marginBottom:12,lineHeight:30}}>Causas de la Violencia de Género</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:15, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• Estereotipos de género. </Text> La diferencia de roles que se impone a los individuos según su género genera actitudes de discriminación e intolerancia dentro de los diferentes ámbitos de una sociedad. Este trato desigual que se da hacia los individuos según su género puede traer situaciones de violencia.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• Prejuicios culturales.</Text> La ideología machista prolifera la idea de la superioridad masculina y la primacía sobre las personas de otro género. El machismo utiliza la violencia como un mecanismo de control, estos patrones de conducta suelen ser transmitidos de generación en generación.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:22, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• Deseos de poder y dominación. </Text> Individuos del género masculino ejercen violencia sobre personas de otro género para afianzar su autoridad y su creencia de superioridad.</Text>

          <Text style={{ fontWeight:"bold", fontSize:22, marginTop:35, marginBottom:12,lineHeight:30}}>Consecuencias de la Violencia de Género</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:15, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• En la salud física. </Text> En la salud física. Puede producir lesiones físicas leves o graves y hasta la muerte de la víctima. Principales lesiones: quemaduras, traumatismos, contusiones, empeore de enfermedades preexistentes.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:22, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• En la salud mental. </Text> Puede producir daños emocionales irreversibles en la víctima. Principales consecuencias: baja autoestima, inestabilidad emocional, ansiedad, trastornos alimenticios o de sueño, estrés postraumático, depresión, intento de suicidio.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:22, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• En la salud reproductiva. </Text> Las relaciones sexuales forzadas pueden traer como consecuencia enfermedades de trasmisión sexual, embarazos no deseados. La violencia en mujeres embarazadas puede llevar a abortos espontáneos.</Text>
          <Text style={{ fontWeight:"400", fontSize:14, lineHeight:24, marginTop:22, textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>• En la salud social. </Text> Puede producir aislamiento social de la víctima, deterioro en las relaciones sociales. Una de las consecuencias de la violencia doméstica es la exposición de niños y niñas de la familia a situaciones de violencia.</Text>
        
        
          <Text style={{ fontWeight:"400", fontSize:12, marginTop:22, marginBottom:70}}>
            Fuente: https://concepto.de/violencia-de-genero/#ixzz7kTOAf5Rr</Text>
        </View>      
  
        </ScrollView>
        <Routes>
            <Route path="../HomeScreen" element={<HomeScreen/>} />
        </Routes>
      
    </View>
  )
}
