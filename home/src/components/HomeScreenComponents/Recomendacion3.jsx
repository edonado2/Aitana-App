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
import { SocialIcon } from '@rneui/base';

export const Recomendacion3 = () => {
  return (
    <View style={{width:"100%", height:"100%",backgroundColor:"#fff", position:"absolute"}}>
      <View style={{borderBottomColor:"#00000026", borderBottomWidth:1.2}}>
      <Text style={styles.backspace}>
        <Link to="../" style={{width:27, height:27, borderRadius:50}}>
          <Text  style={{}}>
            <Icon name="arrow-back-outline" size={27}  style={{backgroundColor:"#fff"}}/>
            </Text>
        </Link>
        </Text>
      </View>
        <ScrollView >
        <View >          
                <Image
                style={{ width: "100%", height: 200, alignSelf:"center",opacity:.85}}
                resizeMode="cover"
                source={
                    require("../images/recomendacion3.jpg")
                }
                />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>¿CÓMO PUEDO AYUDAR A UNA VÍCTIMA DE VIOLENCIA FAMILIAR?</Text>
          {/* Line */}

          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:20, alignSelf:"center"}}></Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Nueve consejos para ayudar a alguien en esta situación vulnerable:</Text>

          <Text style={styles.subTitle2}>1. DEDÍCALE TIEMPO</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si decides acercarte a una víctima de violencia, hazlo durante un momento de calma. Involucrarte cuando los ánimos estén muy agitados puede poner a esa persona en peligro. Asegúrate de reservar tiempo en caso de que la víctima decida abrirse. Si la persona decide revelar años de miedo y frustración acumulados no puedes finalizar la conversación porque tienes otro compromiso.</Text>

          <Text style={styles.subTitle2}>2. INICIA UNA CONVERSIÓN</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Puedes mencionar el tema de la violencia familiar diciendo “Estoy preocupado por ti porque …” o “Estoy preocupado por tu seguridad …” o “He notado algunos cambios que me preocupan …” Tal vez has visto a la persona usando ropa para cubrir moretones o notado que de repente se ha vuelto inusualmente callada(o) y retraída(o). Ambos pueden ser signos de violencia.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Hazle saber a esa persona que serás discreto sobre cualquier información. No intentes forzar a la persona a abrirse; deja que la conversación se desarrolle a un ritmo cómodo.Tómalo con calma. Es importante hacerle saber que estás disponible y que le comprendes.</Text>

          <Text style={styles.subTitle2}>3. ESCUCHA SIN JUZGAR</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si la persona decide hablar, escucha su historia sin juzgarla, ofrécele consejos o sugiere soluciones. Lo más probable es que si escuchas activamente, la persona te diga exactamente lo que necesita. Solo dale la oportunidad de hablar.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Puedes hacer preguntas aclaratorias pero, principalmente, deja que la persona exprese sus sentimientos y miedos. Puedes ser la primera persona en la que la víctima ha confiado.</Text>

          <Text style={styles.subTitle2}>4. APRENDE LAS SEÑALES DE ADVERTENCIA</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Muchas personas intentan encubrir la violencia por diversas razones, conocer las señales de advertencia es muy importante para poder ayudarlas:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft, styles.bold]}>• Signos físicos </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Ojos morados</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Labios rotos</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Marcas rojas o moradas en el cuello</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Moretones en los brazos</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft, styles.bold]}>• Signos emocionales </Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Baja autoestima</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Se disculpa demasiado</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Temerosa(o)</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Cambios en los patrones de sueño o alimentación</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Ansiosa(o) o nerviosa(o)</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Abuso de sustancias</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Síntomas de depresión</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Hablar de suicidio</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft, styles.bold]}>• Señales de comportamiento</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Volverse retraída(o) o distante</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Cancelar reuniones en el último minuto</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Llegar tarde a menudo</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Privacidad excesiva con respecto a su vida personal</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}> Aislarse de amigos y familiares</Text>

          <Text style={styles.subTitle2}>5. CREE A LA VÍCTIMA</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Debido a que la violencia familiar tiene más que ver con el control que con la ira, a menudo la víctima es la única que ve el lado oscuro del perpetrador. Muchas veces, la gente se sorprenden al saber que una persona que conocen podría cometer actos de violencia. En consecuencia, las víctimas a menudo sienten que nadie les creería si contaran sobre la violencia que viven. Cree la historia de la víctima y díselo. Para una víctima, tener a alguien que sepa la verdad puede brindarle una sensación de esperanza y alivio.</Text>

          <Text style={styles.subTitle2}>6. VALIDAR LOS SENTIMIENTOS DE LA VÍCTIMA</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> No es inusual que las víctimas expresen sentimientos contradictorios sobre su pareja y su situación. Estos sentimientos pueden variar entre: culpa y enojo, esperanza y desesperación, amor y miedo</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si deseas ayudar, es importante que valides sus sentimientos haciéndole saber que tener estos pensamientos conflictivos es normal. Pero también es importante que confirmes que la violencia no está bien y que no es normal vivir con miedo a ser atacado físicamente. Es posible que algunas víctimas no se den cuenta de que su situación es anormal porque no tienen otros modelos de relaciones y se han acostumbrado gradualmente al ciclo de violencia. Díle a la víctima que la violencia no es parte de las relaciones saludables. Sin juzgar, hazle saber que su situación es peligrosa y que te preocupas por su seguridad.</Text>

          <Text style={styles.subTitle2}>7. OFRECE AYUDA Y SOPORTE</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Ayuda a la víctima a encontrar apoyo y recursos. Busca números de teléfono para refugios, servicios sociales, policía, abogados, consejeros o grupos de apoyo. También puedes ayudarle a obtener información sobre cualquier ley relacionada con órdenes de protección/órdenes de restricción e información de custodia de menores.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Si la víctima te pide que hagas algo específico y estás está dispuesta(o) a hacerlo, no dudes en ayudar. Si no puedes hacerlo, intenta encontrar otras formas de satisfacer la necesidad. Identifica sus fortalezas para que encuentre la motivación para ayudarse a si misma(o).</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Lo importante es hacerle saber que estás allí, disponible en cualquier momento. Hazle saber la mejor manera de comunicarse contigo si necesita ayuda.</Text>

          <Text style={styles.subTitle2}>8. AYUDA PARA HACER UN PLAN DE SEGURIDAD O ESCAPE</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Ayuda a la víctima a crear un plan de seguridad que pueda ponerse en práctica si la violencia ocurre nuevamente o si decide abandonar su domicilio. Hacer un plan puede ayudar a visualizar qué pasos son necesarios y prepararse psicológicamente para hacerlo.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Ayuda a la víctima a pensar en cada paso del plan de seguridad, sopesando los riesgos y beneficios de cada opción y las formas de reducir los riesgos.</Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Asegúrense de incluir lo siguiente en el plan de seguridad:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Un lugar seguro para ir en caso de emergencia, o si decide salir de casa</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Una excusa preparada para irse si se siente amenazada(o)</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Una palabra clave para alertar a familiares o amigos de que necesita ayuda</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Una “bolsa de escape” con dinero en efectivo, documentos importantes (acta de nacimiento, identificación oficial, etc.), llaves, artículos de tocador y una muda de ropa a la que se pueda acceder fácilmente en una situación de crisis.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Una lista de contactos de emergencia, incluidos familiares o amigos de confianza, refugios locales y línea telefónica de violencia familiar.</Text>

          <Text style={styles.subTitle2}>9. QUÉ NO HACER O DECIR A UNA VÍCTIMA DE VIOLENCIA FAMILIAR </Text>
          <Text style={[styles.paragraph, styles.marginTop15]}> Aunque no hay una forma correcta o incorrecta de ayudar a una víctima de violencia familiar, debe evitar hacer algo que empeore la situación. Aquí hay algunos cosas que los expertos sugieren evitar:</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Culpar a la víctima. Eso es lo que hace el abusador.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Subestimar el peligro potencial para la víctima y para ti mismo.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Prometer cualquier ayuda que no puedas proporcionar.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Dar apoyo condicional.</Text>
          <Text style={[styles.paragraph, styles.marginTop15, styles.marginLeft]}><Text styles={styles.bold}>•</Text> Presionar a la víctima. Si la víctima no está dispuesta(o) a abrirse al principio, se paciente.</Text>

                {/* Line */}
          <Text style={{backgroundColor:"#00000099", height:.5, width:"80%", marginBottom:5,marginTop:40}}></Text>

          <Text style={[styles.references, styles.bold, styles.marginTop15]} >
            Referencias </Text>
          
             <Text style={[styles.ref, styles.marginBottom]} 
          >ALUMBRA México. 23 abril, 2020. Disponible en: <Text style={[styles.ref, styles.link]} 
          onPress={() => WebBrowser.openBrowserAsync('https://alumbramx.org/como-ayudar-a-una-victima-de-violencia-domestica-2/')}>
          https://alumbramx.org/como-ayudar-a-una-victima-de-violencia-domestica-2/</Text></Text>
          

        </View>      
  
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
    width:"100%", 
    height:50, 
    paddingLeft:20, 
    paddingTop:12
  },
  subTitle: {
    fontFamily:"OpenSans_300Light",
    letterSpacing:.5,
    color:"#00000099",
    fontSize:16
  },
  subTitle2:{
    fontFamily:"OpenSans_700Bold",
    fontSize:20, 
    marginTop:35,
    marginBottom:12,
    lineHeight:30
  },
  title: {
    fontFamily:"OpenSans_700Bold",
    letterSpacing:1.6, 
    fontSize:22, 
    marginTop:7, 
    marginBottom:12
  },
  paragraph: {
    fontSize:14, 
    lineHeight:26, 
    textAlign:"justify",
    letterSpacing:.2,
    fontFamily:"OpenSans_500Medium"          
  }, 
  references: {
    fontFamily:"OpenSans_700Bold",
    fontSize:20,  
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
    fontFamily:"OpenSans_700Bold",
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